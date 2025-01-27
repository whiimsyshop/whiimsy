import Script from "next/script"

export default function givewayPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://whiimsy.in/giveway" />
      <section>
        {children}
      </section>
    </>
  )
}