export const SITE = {
  name: "Apertech",
  // Production origin, used for canonical URLs, sitemap, robots and structured data.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://apertech.net").replace(/\/$/, ""),
  legalName: "Apertech MMC",
  address: { street: "1/25 Ahmad Rajabli, Chinar Park Business Center", city: "Baku", country: "AZ" },
  email: "inform@apertech.net",
  phone: "+99450 718 10 19",
  facebook: "https://www.facebook.com/Apertech/",
  linkedin: "https://az.linkedin.com/company/apertech1",
  gtmId: "GTM-MWT6QWL2",
  googleSiteVerification: "swOKI7lgQYP1ierkFDME6Has0xN70sJpdf_pRvKu4wo",
} as const;

// EmailJS (public key / ids are meant to be exposed to the browser)
export const EMAILJS = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "tv8MzAwGyUsvzAJfn",
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_8kecrpe",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_mfywhcd",
} as const;

export const NAV_ITEMS = [
  { id: "hero", key: "nav.home", label: "Home" },
  { id: "about", key: "nav.about", label: "About Us" },
  { id: "services", key: "nav.services", label: "Services" },
  { id: "solutions", key: "nav.solutions", label: "Solutions" },
  { id: "clients", key: "nav.clients", label: "Partners & Clients" },
  { id: "contact", key: "nav.contact", label: "Contact Us" },
] as const;

// Headline numbers shown in the hero widgets and the stats strip
export const STATS = { clients: 80, projects: 150, years: 15, workers: 35 } as const;
