"use client";
// import CustomBreadcrumb from "../components/Breadcrumb";
// import TooltipComp from "./TooltipComp";

const TopCard = ({ title }: { title: string }) => {
  return (
    <>
      <div className="bg-gradient-to-b from-sky-200 to-white">
        <div className="mb-2 tablet:pt-[40px] laptop:pl-[50px] px-3">
          {/* <CustomBreadcrumb /> */}
        </div>

        <div className="flex justify-center pt-1 mb-2 px-3 laptop:px-0">
          <p className="text-3xl tablet:text-4xl font-bold">{title}</p>
        </div>
        <div className="flex justify-end pb-4 pr-4 tablet:pr-10">
          {/* <TooltipComp /> */}
        </div>
      </div>
    </>
  );
};

export default TopCard;
