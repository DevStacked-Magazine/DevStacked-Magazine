"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type ContactFormData = {
  fullName: string;
  email: string;
  discussion: string;
};

const STORAGE_KEY = "contact-form-values";

const EMPTY: ContactFormData = { fullName: "", email: "", discussion: "" };

function readInitial(): ContactFormData {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<ContactFormData>;
    return {
      fullName: parsed.fullName ?? "",
      email: parsed.email ?? "",
      discussion: parsed.discussion ?? "",
    };
  } catch {
    return EMPTY;
  }
}

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>(readInitial);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as keyof ContactFormData;
    setData((prev) => ({ ...prev, [field]: e.target.value }));
    if (message) setMessage(null);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...data, [field]: e.target.value }));
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      fullName: data.fullName.trim(),
      email: data.email.trim(),
      discussion: data.discussion.trim(),
    };
    if (!payload.fullName || !payload.email || !payload.discussion) {
      setMessage({ type: "error", text: "Please fill in your name, email, and discussion." });
      return;
    }

    setSubmitting(true);
    setMessage(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: payload.fullName,
          email: payload.email,
          message: payload.discussion,
          subject: `New contact request from ${payload.fullName}`,
          from_name: "devstackedmagazine",
        }),
      });
      const result = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !result.success) {
        setMessage({ type: "error", text: result.message ?? "Something went wrong. Please try again." });
        return;
      }
      setMessage({ type: "success", text: "Thanks! Your message has been sent." });
      setData(EMPTY);
      if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 1800);
    } catch {
      setMessage({ type: "error", text: "Unable to send right now. Please try again shortly." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="meta-label block mb-2 text-white/45">
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Jane Founder"
          value={data.fullName}
          onChange={onChange}
          required
          autoComplete="name"
          className="h-13 w-full rounded-2xl border border-line bg-transparent px-4 text-sm text-ink outline-none placeholder:text-ink-faint transition-colors focus:border-red-active sm:h-14 sm:text-base"
        />
      </div>
      <div>
        <label htmlFor="email" className="meta-label block mb-2 text-white/45">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@company.com"
          value={data.email}
          onChange={onChange}
          required
          autoComplete="email"
          className="h-13 w-full rounded-2xl border border-line bg-transparent px-4 text-sm text-ink outline-none placeholder:text-ink-faint transition-colors focus:border-red-active sm:h-14 sm:text-base"
        />
      </div>
      <div>
        <label htmlFor="discussion" className="meta-label block mb-2 text-white/45">
          Project discussion
        </label>
        <textarea
          id="discussion"
          name="discussion"
          placeholder="What are you building, who is it for, and when does it need to be live?"
          value={data.discussion}
          onChange={onChange}
          required
          rows={6}
          className="w-full resize-none rounded-2xl border border-line bg-transparent px-4 py-4 text-sm text-ink outline-none placeholder:text-ink-faint transition-colors focus:border-red-active sm:text-base"
        />
      </div>

      {message && (
        <p
          aria-live="polite"
          className={`text-sm ${message.type === "success" ? "text-green-300" : "text-red-300"}`}
        >
          {message.text}
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="btn-ink w-full disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Sending…" : "Send message"}
          {!submitting && (
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
