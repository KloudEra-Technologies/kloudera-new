import React, { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import "./GradualBlur.css";

type Position = "top" | "bottom" | "left" | "right";
type Curve = "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
type Animated = boolean | "scroll";

export interface GradualBlurProps {
  position?: Position;
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  curve?: Curve;
  opacity?: number;
  animated?: Animated;
  duration?: string;
  easing?: string;
  hoverIntensity?: number;
  target?: "parent" | "page";
  preset?: keyof typeof PRESETS;
  zIndex?: number;
  className?: string;
  style?: CSSProperties;
  onAnimationComplete?: () => void;
}

const PRESETS = {
  top: { position: "top" as const, height: "6rem" },
  bottom: { position: "bottom" as const, height: "6rem" },
  left: { position: "left" as const, height: "6rem" },
  right: { position: "right" as const, height: "6rem" },
  smooth: { height: "8rem", curve: "bezier" as const, divCount: 10 },
};

const CURVE_FUNCTIONS: Record<Curve, (progress: number) => number> = {
  linear: (progress) => progress,
  bezier: (progress) => progress * progress * (3 - 2 * progress),
  "ease-in": (progress) => progress * progress,
  "ease-out": (progress) => 1 - (1 - progress) ** 2,
  "ease-in-out": (progress) =>
    progress < 0.5 ? 2 * progress * progress : 1 - (-2 * progress + 2) ** 2 / 2,
};

const getGradientDirection = (position: Position) =>
  ({ top: "to top", bottom: "to bottom", left: "to left", right: "to right" })[position];

function GradualBlur({
  position = "bottom",
  strength = 2,
  height = "6rem",
  width,
  divCount = 5,
  exponential = false,
  curve = "linear",
  opacity = 1,
  animated = false,
  duration = "0.3s",
  easing = "ease-out",
  hoverIntensity,
  target = "parent",
  preset,
  zIndex = 1000,
  className = "",
  style,
  onAnimationComplete,
}: GradualBlurProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(animated !== "scroll");

  const config = useMemo(
    () => ({
      ...PRESETS[preset ?? "bottom"],
      position,
      strength,
      height,
      width,
      divCount: Math.max(1, Math.floor(divCount)),
      exponential,
      curve,
      opacity,
      animated,
      duration,
      easing,
      hoverIntensity,
      target,
      zIndex,
      className,
      style,
    }),
    [
      animated,
      className,
      curve,
      divCount,
      duration,
      easing,
      exponential,
      height,
      hoverIntensity,
      opacity,
      position,
      preset,
      strength,
      style,
      target,
      width,
      zIndex,
    ],
  );

  useEffect(() => {
    if (animated !== "scroll" || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry?.isIntersecting ?? false),
      { threshold: 0.1 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animated]);

  useEffect(() => {
    if (!isVisible || animated !== "scroll" || !onAnimationComplete) return;

    const timeout = window.setTimeout(() => onAnimationComplete(), parseFloat(duration) * 1000);
    return () => window.clearTimeout(timeout);
  }, [animated, duration, isVisible, onAnimationComplete]);

  const blurDivs = useMemo(() => {
    const currentStrength = isHovered && hoverIntensity ? strength * hoverIntensity : strength;
    const curveFunction = CURVE_FUNCTIONS[curve];
    const increment = 100 / config.divCount;

    return Array.from({ length: config.divCount }, (_, index) => {
      const progress = curveFunction((index + 1) / config.divCount);
      const blurValue = exponential
        ? 2 ** (progress * 4) * 0.0625 * currentStrength
        : 0.0625 * (progress * config.divCount + 1) * currentStrength;
      const p1 = Math.round(increment * index * 10) / 10;
      const p2 = Math.round(increment * (index + 1) * 10) / 10;
      const p3 = Math.round(increment * (index + 2) * 10) / 10;
      const p4 = Math.round(increment * (index + 3) * 10) / 10;
      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      return (
        <div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            maskImage: `linear-gradient(${getGradientDirection(position)}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(${getGradientDirection(position)}, ${gradient})`,
            backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            opacity,
            transition:
              animated && animated !== "scroll"
                ? `backdrop-filter ${duration} ${easing}`
                : undefined,
          }}
        />
      );
    });
  }, [
    animated,
    config.divCount,
    curve,
    duration,
    easing,
    exponential,
    hoverIntensity,
    isHovered,
    opacity,
    position,
    strength,
  ]);

  const isVertical = position === "top" || position === "bottom";
  const containerStyle: CSSProperties = {
    position: target === "page" ? "fixed" : "absolute",
    pointerEvents: hoverIntensity ? "auto" : "none",
    opacity: isVisible ? 1 : 0,
    transition: animated ? `opacity ${duration} ${easing}` : undefined,
    zIndex: target === "page" ? zIndex + 100 : zIndex,
    height: isVertical ? height : "100%",
    width: isVertical ? width || "100%" : width || height,
    [position]: 0,
    ...(isVertical ? { left: 0, right: 0 } : { top: 0, bottom: 0 }),
    ...style,
  };

  return (
    <div
      ref={containerRef}
      className={`gradual-blur ${target === "page" ? "gradual-blur-page" : "gradual-blur-parent"} ${className}`}
      style={containerStyle}
      onMouseEnter={hoverIntensity ? () => setIsHovered(true) : undefined}
      onMouseLeave={hoverIntensity ? () => setIsHovered(false) : undefined}
    >
      <div className="gradual-blur-inner">{blurDivs}</div>
    </div>
  );
}

export default React.memo(GradualBlur);
