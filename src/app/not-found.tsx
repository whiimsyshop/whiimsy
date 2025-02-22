"use client";
import Link from "next/link";
import "./not-found.css"; // Ensure styles are applied

export default function NotFound() {
  return (
    <>
  <a href="/">
    <header className="top-header"></header>
    {/*dust particel*/}
    <div>
      <div className="starsec" />
      <div className="starthird" />
      <div className="starfourth" />
      <div className="starfifth" />
    </div>
    {/*Dust particle end-*/}
    <div className="lamp__wrap">
      <div className="lamp">
        <div className="cable" />
        <div className="cover" />
        <div className="in-cover">
          <div className="bulb" />
        </div>
        <div className="light" />
      </div>
    </div>
    {/* END Lamp */}
  </a>
  <section className="error">
    <a href="/">
      {/* Content */}
    </a>
    <div className="error__content">
      <a href="/">
        <div className="error__message message">
          <h1 className="message__title text-3xl font-bold text-gray-800" >Page Not Found</h1>
          <p className="text-sm text-gray-600 mt-2 message__text whitespace-nowrap">
          Oops! Looks like you’ve wandered into the land of lost candles.
          </p>
          <p className="text-sm text-gray-600 mt-2 message__text">
          But don’t worry, we’ll light the way back!</p>
        </div>
      </a>
      <div className="error__nav e-nav">
        <a href="/"></a>
        <a
          href="/"
          className="e-nav__link"
        />
      </div>
    </div>
    {/* END Content */}
  </section>
</>

  );
}
