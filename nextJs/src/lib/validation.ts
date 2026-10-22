const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^(\+)?\d{9,14}$/;

export const isValidEmail = (email: string) => EMAIL_RE.test(email);
export const isValidPhone = (phone: string) => PHONE_RE.test(phone);
export const sanitizePhone = (value: string) => value.replace(/[^+\d]/g, "");
