import { site } from "@/content/site";

export function phoneHref() {
  return `tel:${site.phoneE164}`;
}

export function smsHref() {
  // iOS/macOS uses sms:, Android supports sms: too
  return `sms:${site.phoneE164}`;
}

export function emailHref(subject?: string, body?: string) {
  const s = subject ? encodeURIComponent(subject) : "";
  const b = body ? encodeURIComponent(body) : "";
  const params = [s && `subject=${s}`, b && `body=${b}`]
    .filter(Boolean)
    .join("&");
  return `mailto:${site.email}${params ? `?${params}` : ""}`;
}

export function messageHref() {
  return emailHref(
    "New Project Inquiry - Barsell Electrical Services",
    `Hi Hunter,

I'm interested in an estimate for:
- Address:
- Type of work:
- Timeline:
- Best contact method:

Thanks!`,
  );
}
