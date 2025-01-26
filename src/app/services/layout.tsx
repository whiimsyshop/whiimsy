import Script from "next/script"

export default function servicesPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://whiimsy.in/services" />
      <section>
        {children}
      </section>
    </>
  )
}