import Script from "next/script";

// The audit form posts to the same reCAPTCHA-protected /api/contact backend, so
// reCAPTCHA v3 must load on this route (it was removed from the root layout).
export default function AuditLayout({ children }: { children: React.ReactNode }) {
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
