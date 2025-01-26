import Script from "next/script"

export default function aboutPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://whiimsy.in/about" />
      <section>
        {children}
      </section>
    </>
  )
}