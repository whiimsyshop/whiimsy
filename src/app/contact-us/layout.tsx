import Script from "next/script"

export default function contactPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://whiimsy.in/contact-us" />
      <section>
        {children}
      </section>
    </>
  )
}