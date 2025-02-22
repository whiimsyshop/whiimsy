import Script from "next/script"

export default function returnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://whiimsy.in/return-and-shipping" />
      <section>
        {children}
      </section>
    </>
  )
}