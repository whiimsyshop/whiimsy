import Script from "next/script"

export default function freeCandleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://whiimsy.in/free-candle" />
      <section>
        {children}
      </section>
    </>
  )
}