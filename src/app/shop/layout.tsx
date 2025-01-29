import Script from "next/script"

export default function shopPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://whiimsy.in/shop" />
      <section>
        {children}
      </section>
    </>
  )
}