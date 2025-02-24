const HeaderBox = ({ title, className, style }: { title: string; className?: string; style?: React.CSSProperties }) => {
  return (
    <header
      className={`mx-2 my-5 flex justify-center rounded-xl bg-[#165B33] py-6 text-2xl text-white md:mx-16 md:text-3xl md:font-semibold lg:mx-32 lg:py-6 lg:text-4xl ${className}`}
      style={style}
    >
      {title}
    </header>
  );
};

export default HeaderBox;
