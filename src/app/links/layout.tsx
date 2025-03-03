import Script from "next/script"

export default function linkPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://whiimsy.in/link" />
      <section>
        {children}
      </section>
    </>
  )
}