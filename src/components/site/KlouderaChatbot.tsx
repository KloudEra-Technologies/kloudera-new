import { useState, useRef, useEffect, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  Bot,
  Sparkles,
  X,
  Send,
  RotateCcw,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  Shield,
} from "lucide-react";
import {
  getChatbotResponse,
  initialSuggestions,
  type ChatMessage,
} from "@/lib/chatbot-knowledge";

export function KlouderaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "👋 Welcome to **KloudEra Technologies**!\n\nI am your **KloudEra AI Assistant**, pre-trained on our 24/7 SOC cybersecurity services, custom GPU compute rigs, enterprise cloud governance, and office locations in Bengaluru and Pune.\n\nHow can I assist your enterprise today?",
      timestamp: "Just now",
      suggestions: initialSuggestions,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend ?? input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Realistic typing delay
    setTimeout(() => {
      const response = getChatbotResponse(query);
      const botMsg: ChatMessage = {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        links: response.links,
        suggestions: response.suggestions,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "Chat cleared. What else can I help you with regarding KloudEra's services, hardware rigs, or office locations?",
        timestamp: "Just now",
        suggestions: initialSuggestions,
      },
    ]);
  };

  // Helper to format text with bold and line breaks safely
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split("\n");
    return lines.map((line, lineIdx) => {
      // Parse markdown links [text](url)
      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
      const parts: Array<{ type: "text" | "link"; content: string; url?: string }> = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push({ type: "text", content: line.substring(lastIndex, match.index) });
        }
        parts.push({ type: "link", content: match[1] ?? "", url: match[2] ?? "" });
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        parts.push({ type: "text", content: line.substring(lastIndex) });
      }

      return (
        <p key={lineIdx} className={lineIdx > 0 ? "mt-1.5" : ""}>
          {parts.map((p, pIdx) => {
            if (p.type === "link" && p.url) {
              const isExt = p.url.startsWith("http") || p.url.startsWith("mailto") || p.url.startsWith("tel");
              return isExt ? (
                <a
                  key={pIdx}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  {p.content}
                </a>
              ) : (
                <Link
                  key={pIdx}
                  to={p.url}
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                  onClick={() => setIsOpen(false)}
                >
                  {p.content}
                </Link>
              );
            }

            // Bold parsing within text
            const boldParts = p.content.split(/\*\*(.*?)\*\*/g);
            return (
              <span key={pIdx}>
                {boldParts.map((bp, bpIdx) =>
                  bpIdx % 2 === 1 ? (
                    <strong key={bpIdx} className="font-semibold text-foreground">
                      {bp}
                    </strong>
                  ) : (
                    bp
                  )
                )}
              </span>
            );
          })}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="glass mb-3 flex h-[580px] max-h-[85vh] w-[92vw] max-w-[430px] flex-col overflow-hidden rounded-[2rem] border border-border/80 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 animate-in fade-in zoom-in-95">
          {/* Header */}
          <div className="relative flex items-center justify-between border-b border-border/60 bg-background/70 px-5 py-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="relative flex size-10 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Bot className="size-5 text-primary" />
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-background bg-emerald-500" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-foreground">KloudEra Assistant</h3>
                  <Sparkles className="size-3 text-primary animate-pulse" />
                </div>
                <p className="flex items-center gap-1 text-[11px] font-mono tracking-wider text-muted-foreground uppercase">
                  <Shield className="size-2.5 text-primary" /> Zero-Trust AI
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                title="Restart Chat"
                className="flex size-8 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
              >
                <RotateCcw className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                className="flex size-8 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
              >
                <X className="size-4.5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4 text-xs sm:text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 leading-relaxed shadow-sm ${
                    m.sender === "user"
                      ? "rounded-tr-xs bg-primary text-primary-foreground font-medium"
                      : "rounded-tl-xs border border-border/70 bg-card/80 text-foreground backdrop-blur-md"
                  }`}
                >
                  <div className="space-y-1">{renderFormattedText(m.text)}</div>

                  {/* Render Links */}
                  {m.links && m.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2 border-t border-border/40 pt-2.5">
                      {m.links.map((link, idx) =>
                        link.isExternal ? (
                          <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary transition-all hover:bg-primary/20 hover:scale-102"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="size-3" />
                          </a>
                        ) : (
                          <Link
                            key={idx}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary transition-all hover:bg-primary/20 hover:scale-102"
                          >
                            <span>{link.label}</span>
                            <ChevronRight className="size-3" />
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>

                <span className="mt-1 px-1 font-mono text-[10px] text-muted-foreground/70">
                  {m.timestamp}
                </span>

                {/* Follow-up Suggestion Chips on last bot message */}
                {m.suggestions && m.suggestions.length > 0 && (
                  <div className="mt-2.5 flex max-w-[95%] flex-wrap gap-1.5">
                    {m.suggestions.map((sug, sIdx) => (
                      <button
                        key={sIdx}
                        type="button"
                        onClick={() => handleSendMessage(sug)}
                        className="rounded-full border border-border/80 bg-background/70 px-3 py-1 text-[11px] text-muted-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-102 active:scale-98"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-xs border border-border/60 bg-card/70 px-4 py-3">
                  <span className="size-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                  <span className="size-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                  <span className="size-1.5 rounded-full bg-primary animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="border-t border-border/60 bg-background/80 p-3 backdrop-blur-md">
            <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about SOC, AI rigs, offices, pricing..."
                className="flex-1 rounded-xl border border-input/80 bg-white/5 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/70 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 sm:text-sm"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                title="Send message"
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-40 disabled:hover:bg-primary"
              >
                <Send className="size-4" />
              </button>
            </form>
            <p className="mt-1.5 text-center font-mono text-[9px] tracking-wider text-muted-foreground/60 uppercase">
              Powered by KloudEra Pre-Trained Intelligence
            </p>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close KloudEra AI Chat" : "Open KloudEra AI Chat"}
        className="group relative flex items-center gap-2.5 rounded-full border border-primary/50 bg-background/85 px-4 py-3 text-sm font-medium text-foreground shadow-[0_10px_35px_rgba(59,130,246,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-95"
      >
        <div className="relative flex items-center justify-center">
          {isOpen ? (
            <X className="size-5 transition-transform group-hover:rotate-90" />
          ) : (
            <>
              <Bot className="size-5 text-primary group-hover:text-primary-foreground transition-colors" />
              <span className="absolute -top-1 -right-1 size-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="absolute -top-1 -right-1 size-2 rounded-full bg-emerald-500" />
            </>
          )}
        </div>

        <span className="hidden sm:inline-block font-medium tracking-wide">
          {isOpen ? "Close Assistant" : "Ask KloudEra AI"}
        </span>

        {/* Unread Indicator Pulse */}
        {!isOpen && hasUnread && (
          <span className="inline-flex size-2 rounded-full bg-primary animate-pulse sm:hidden" />
        )}
      </button>
    </div>
  );
}
