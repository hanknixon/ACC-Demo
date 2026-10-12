"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { buildContactMailto } from "@/lib/contact";

export function ContactForm(): React.JSX.Element {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const href = buildContactMailto({
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    setStatus("Your email app will open with your message ready to send.");
    window.location.href = href;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Reach us Quickly</h3>
      <div className="contact-form__fields">
        <label className="sr-only" htmlFor="contact-name">
          Enter Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Enter Name"
          autoComplete="name"
          required
        />
        <label className="sr-only" htmlFor="contact-company">
          Your Company
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          placeholder="Your Company"
          autoComplete="organization"
        />
        <label className="sr-only" htmlFor="contact-email">
          Enter Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="Enter Email"
          autoComplete="email"
          required
        />
        <label className="sr-only" htmlFor="contact-phone">
          Your Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="Your Phone"
          autoComplete="tel"
        />
        <label className="sr-only" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Message"
          rows={5}
          required
        />
      </div>
      <button
        className="button button--primary contact-form__submit"
        type="submit"
      >
        Submit{" "}
        <Image src="/images/arrow-submit.svg" alt="" width={25} height={26} />
      </button>
      <p className="contact-form__status" role="status">
        {status}
      </p>
    </form>
  );
}
