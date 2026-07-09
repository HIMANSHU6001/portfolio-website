"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, RocketLaunch, Star } from "./Illustrations";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import toast from "react-hot-toast";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in every field so I can write back!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("That email looks a little off - mind double-checking?");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setForm(initialFormState);
      toast.custom((t) => (
        <div
          data-testid="contact-success"
          className={`${t.visible ? 'animate-enter' : 'animate-leave'} flex items-center gap-3 bg-white border-[3px] border-[#1C1917] rounded-2xl px-5 py-4 shadow-[6px_6px_0_0_var(--mint)] max-w-sm`}
        >
          <div className="w-8 h-8 rounded-full bg-mint border-[2px] border-[#1C1917] flex items-center justify-center flex-shrink-0">
            <Star size={16} fill="#1C1917" />
          </div>
          <p className="text-[15px] text-[#1C1917] leading-tight">
            Message on its way! I&apos;ll be in touch soon ✿
          </p>
        </div>
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-end gap-4 mb-10">
          <span className="bg-sun border-[3px] font-inter border-[#1C1917] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest shadow-[3px_3px_0_0_#1C1917]">
            05 · Say hi
          </span>
          <div className="hidden md:block flex-1 h-0.75 bg-[#1C1917] opacity-20 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="relative">
            <h2 data-testid="contact-heading" className="font-display font-black text-4xl md:text-5xl leading-none">
              Got a <span className="hl-pink">wild idea</span>?
              <br />
              Let&apos;s build it.
            </h2>
            <p className="mt-5 text-lg text-[#44403C] font-medium max-w-md">
              Drop me a note.
            </p>

            <div className="mt-8 flex flex-col gap-3 max-w-sm">
              <a
                href="mailto:hk9797592893@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-gmail"
                className="sticker-sm bg-cream border-[3px] border-[#1C1917] rounded-2xl px-4 py-3 font-bold flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <SiGmail size={18} />
                  <span>hk9797592893@gmail.com</span>
                </div>
                <ArrowRight size={16} />
              </a>
              <a
                href="https://github.com/HIMANSHU6001"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-github"
                className="sticker-sm bg-mint border-[3px] border-[#1C1917] rounded-2xl px-4 py-3 font-bold flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <FaGithub size={18} />
                  <span>HIMANSHU6001</span>
                </div>
                <ArrowRight size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/himanshu-kaushik-aa2003280/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-linkedin"
                className="sticker-sm bg-pink border-[3px] border-[#1C1917] rounded-2xl px-4 py-3 font-bold flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <FaLinkedin size={18} />
                  <span>himanshu-kaushik</span>
                </div>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="absolute -top-6 -left-35 rotate-[25deg] hidden md:block">
              <RocketLaunch size={140} className="animate-bob" />
            </div>
          </div>

          <form
            data-testid="contact-form"
            onSubmit={onSubmit}
            className="sticker bg-cream border-4 border-[#1C1917] rounded-4xl p-6 md:p-8 relative"
          >
            <div className="absolute -top-4 -left-4 rotate-[-8deg] hidden md:block">
              <Star size={38} fill="var(--sun)" />
            </div>
            <label className="block font-extrabold text-sm uppercase tracking-widest mb-2">Your name</label>
            <input
              data-testid="contact-name-input"
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Jhon Doe"
              className="w-full bg-white border-[3px] border-[#1C1917] rounded-xl px-4 py-3 font-semibold outline-none focus:shadow-[4px_4px_0_0_var(--mint)] transition-shadow mb-5"
            />

            <label className="block font-extrabold text-sm uppercase tracking-widest mb-2">Email</label>
            <input
              data-testid="contact-email-input"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="jhon@compute.co"
              className="w-full bg-white border-[3px] border-[#1C1917] rounded-xl px-4 py-3 font-semibold outline-none focus:shadow-[4px_4px_0_0_var(--pink)] transition-shadow mb-5"
            />

            <label className="block font-extrabold text-sm uppercase tracking-widest mb-2">Message</label>
            <textarea
              data-testid="contact-message-input"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Tell me about your project, timeline, and dreams..."
              rows={5}
              className="w-full bg-white border-[3px] border-[#1C1917] rounded-xl px-4 py-3 font-semibold outline-none focus:shadow-[4px_4px_0_0_var(--sun)] transition-shadow mb-4 resize-none"
            />

            {error ? (
              <p
                data-testid="contact-error"
                className="mb-3 text-sm font-bold text-[#B44] bg-pink border-2 border-[#1C1917] rounded-xl px-3 py-2"
              >
                {error}
              </p>
            ) : null}

            <button
              data-testid="contact-submit-button"
              type="submit"
              disabled={loading}
              className={`press sticker inline-flex items-center gap-2 bg-[#1C1917] text-cream border-[3px] border-[#1C1917] rounded-full px-7 py-3.5 font-extrabold text-sm uppercase tracking-wider ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? "Sending..." : <>Send message <ArrowRight size={18} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}