import Script from "next/script"

export default function galleryPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* canonical tag */}
    <link rel="canonical" href="https://whiimsy.in/gallery" />
      <section>
        {children}
      </section>
    </>
  )
}