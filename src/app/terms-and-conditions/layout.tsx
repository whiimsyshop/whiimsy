import Script from "next/script"

export default function termsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://whiimsy.in/terms-conditions" />
      <section>
        {children}
      </section>
    </>
  )
}