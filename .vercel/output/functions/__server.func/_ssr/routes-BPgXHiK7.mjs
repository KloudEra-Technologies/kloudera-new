import { a as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowRight, n as Sparkles, r as ShieldCheck, u as Check } from "../_libs/lucide-react.mjs";
import { _ as zeroTrustPrinciples, a as clienteles, d as jobs, i as capabilities, l as heroPillars, n as achievements, r as benefits, s as company, t as aboutHighlights } from "./router-C6d_usC-.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Reveal, r as Section, t as GlassCard } from "./GlassCard-CF20Tcmp.mjs";
import { t as Logo } from "./Logo-CV3YvCOG.mjs";
import { t as certifications } from "./certifications-data-tajU08Wv.mjs";
import { t as ContactForm } from "./ContactForm-C99FFU9N.mjs";
import { t as partners } from "./partners-ESNqFkxT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BPgXHiK7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [active, setActive] = (0, import_react.useState)(capabilities[0].id);
	const current = capabilities.find((c) => c.id === active);
	const marquee = [...partners.slice(0, 28), ...partners.slice(0, 28)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative mx-auto w-full max-w-7xl px-5 pt-36 pb-10 sm:px-8 sm:pt-48",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.28em] uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-primary" }), "Enterprise Cybersecurity Consulting"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: {
						opacity: 0,
						y: 28,
						filter: "blur(12px)"
					},
					animate: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					transition: {
						duration: .9,
						delay: .08,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "text-aurora mt-7 max-w-5xl text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-7xl",
					children: company.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .2
					},
					className: "mt-7 max-w-2xl text-base text-muted-foreground sm:text-lg",
					children: company.intro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .3
					},
					className: "mt-10 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "sheen-on-hover group relative inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]",
						children: ["Explore Infrastructure Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						className: "glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-accent" }), "Preview Products Pipeline"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4",
					children: heroPillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .08 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "h-full rounded-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] tracking-[0.26em] text-primary/90 uppercase",
									children: p.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg font-semibold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: p.body
								})
							]
						})
					}, p.kicker))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "capabilities",
			kicker: "Core Capabilities",
			title: "Enterprise Solution Architecture",
			description: "Explore our core operational wings. Select a domain below to review hardware specs and security frameworks.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "glass flex flex-wrap gap-1.5 rounded-full p-1.5",
				children: capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActive(c.id),
					className: `relative z-[2] flex-1 rounded-full px-4 py-2.5 text-xs font-medium whitespace-nowrap transition-colors sm:text-sm ${active === c.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
					children: c.tab
				}, c.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 18
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .5,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "glass mt-6 rounded-[2rem] p-8 sm:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-[2] grid gap-10 lg:grid-cols-[1.1fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-semibold sm:text-3xl",
							children: current.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-[11px] tracking-[0.24em] text-primary/90 uppercase",
							children: current.meta
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground",
							children: current.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline",
							children: ["Full Suite ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4",
						children: current.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-strong rounded-2xl p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-base font-medium",
								children: f.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: f.body
							})]
						}, f.title))
					})]
				})
			}, current.id)]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: "Strategic Ecosystem",
			title: "Technology Partner Directory",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/partners",
				className: "glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium",
				children: "Explore All Partners →"
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass overflow-hidden rounded-[2rem] py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-marquee relative z-[2] flex w-max gap-4",
					children: marquee.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass-strong grid h-24 w-44 shrink-0 place-items-center rounded-2xl p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							src: p.logo,
							name: p.name,
							className: "max-h-10 max-w-[110px]"
						})
					}, `${p.name}-${i}`))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: "Why Enterprises Choose Us",
			title: "How Your Organization Benefits",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
				children: benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-accent",
								children: ["// 0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-semibold",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: b.body
							})
						]
					})
				}, b.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: "About Kloudera",
			title: "Built for High-Stakes Enterprise Resilience",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "h-full p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Kloudera Technologies provides Fortune 500 organizations with end-to-end security posture optimization, compute hardware procurement, and cloud modernization strategies."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 space-y-3",
							children: aboutHighlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-primary" }), h]
							}, h))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline",
							children: ["Read Company Mission ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-[0.28em] text-accent uppercase",
								children: "SYSTEM_FRAMEWORK"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-xl font-semibold",
								children: "Zero-Trust Command Principles"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-4",
								children: zeroTrustPrinciples.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass-strong rounded-2xl p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mr-2 text-primary",
											children: [p.n, "."]
										}), p.title]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm text-muted-foreground",
										children: p.body
									})]
								}, p.n))
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: "Our Achievements",
			title: "Government Recognition & Accreditation",
			description: "Official accreditation and government recognition under key national initiatives.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/achievements",
				className: "glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium",
				children: "Explore More →"
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass overflow-hidden rounded-[2rem] py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-marquee relative z-[2] flex w-max gap-4",
					children: [
						...achievements,
						...achievements,
						...achievements,
						...achievements
					].map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-strong flex h-32 w-72 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-14 place-items-center",
							children: a.logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
								src: a.logo,
								name: a.title,
								className: "max-h-12 max-w-[130px]"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl",
								children: a.emoji || "✦"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs font-semibold leading-tight",
							children: a.title
						})]
					}, `${a.title}-${i}`))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: "Our Clienteles",
			title: "Trusted Across Regulated Industries",
			description: "Engineered for industry-leading financial, IT, construction, and educational enterprises.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/clienteles",
				className: "glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium",
				children: "Explore More →"
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass overflow-hidden rounded-[2rem] py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-marquee relative z-[2] flex w-max gap-4",
					children: [
						...clienteles,
						...clienteles,
						...clienteles,
						...clienteles
					].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-strong flex h-28 w-56 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl p-5",
						children: [c.logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.logo,
							alt: `${c.name} logo`,
							loading: "lazy",
							className: "max-h-10 w-auto object-contain"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-bold tracking-wide",
							children: c.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border/60 px-2.5 py-0.5 text-center font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase",
							children: c.sector
						})]
					}, `${c.name}-${i}`))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: "Compliance Standards",
			title: "KloudEra Technologies CoE — Center of Excellence",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/certifications",
				className: "glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium",
				children: "Explore More →"
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass overflow-hidden rounded-[2rem] py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-marquee relative z-[2] flex w-max gap-4",
					style: { animationDuration: "100s" },
					children: [...certifications, ...certifications].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-strong flex h-32 w-64 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.image,
									alt: c.name,
									className: "max-h-10 w-auto object-contain"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-[11px] font-medium leading-tight line-clamp-2",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border/60 px-2 py-0.5 font-mono text-[8px] tracking-[0.14em] text-primary/80 uppercase",
								children: "CERTIFIED"
							})
						]
					}, `${c.name}-${i}`))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: "Career Portal",
			title: "Join the Kloudera Engineering Core",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/careers",
				className: "glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium",
				children: "View All Open Positions →"
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: jobs.map((j, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] tracking-[0.26em] text-primary/90 uppercase",
								children: j.dept
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-semibold",
								children: j.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: j.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/careers",
								className: "mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline",
								children: ["Apply Position ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})
				}, j.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: "Get in Touch",
			title: "Schedule a Systems Consultation",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "h-full p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Connect directly with our solutions engineering team to evaluate your infrastructure security posture or configure enterprise hardware rigs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "sheen-on-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground",
							children: ["📅 Open Calendar Scheduler ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-sm text-muted-foreground",
							children: [
								"Prefer direct email? Contact us at",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${company.email}`,
									className: "text-primary hover:underline",
									children: company.email
								})
							]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass rounded-3xl p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-[2]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
						})
					})
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
