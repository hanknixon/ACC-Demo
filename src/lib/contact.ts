export interface ContactDetails {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export const CONTACT_EMAIL = "info@americanchargercorp.com";

export function buildContactMailto(details: ContactDetails): string {
  const subject = `Website inquiry from ${details.name.trim()}`;
  const body = [
    `Name: ${details.name.trim()}`,
    `Company: ${details.company.trim() || "Not provided"}`,
    `Email: ${details.email.trim()}`,
    `Phone: ${details.phone.trim() || "Not provided"}`,
    "",
    details.message.trim(),
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
