import Script from "next/script";

// reCAPTCHA v3 is only required by the contact form. Loading it here (instead of
// the root layout) keeps the script off all other ~184 pages, reducing main-thread
// work and improving INP/FCP site-wide. The contact form reads window.grecaptcha.
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6Lf_8-ksAAAAAJt3RbumC-30_Y6CrVfo5u_uvx7f"
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
