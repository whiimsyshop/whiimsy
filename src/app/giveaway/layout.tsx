import Script from "next/script"

export default function giveawayPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://whiimsy.in/giveaway" />
      <section>
        {children}
      </section>
    </>
  )
}