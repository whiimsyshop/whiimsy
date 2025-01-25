import React from "react";

type CardProps = {
  name: string;
  description: string;
  duration?: string;
  link?: string;
};

type TableProps = {
  heading1: string;
  heading2: string;
  heading3: string;
  cookies: CardProps[];
};

const Table: React.FC<TableProps> = ({
  heading1,
  heading2,
  heading3,
  cookies,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-t border-blue-600">
        <thead>
          <tr className="">
            <th className="p-4   text-left">{heading1}</th>
            <th className="p-4   text-left">{heading2}</th>
            <th className="p-4  text-left">{heading3}</th>
          </tr>
        </thead>
        <tbody>
          {cookies.map((cookie:CardProps, index:number) => (
            <tr key={index} className="hover:bg-[#f8f8f8]">
              <td className="p-4 border-gray-300">{cookie.name}</td>
              <td className="p-4 border-gray-300">
                {cookie.description}
                {cookie.link && (
                  <a
                    href={cookie.link}
                    className="text-blue-600 ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                )}
              </td>
              {cookie.duration && (
                <td className="p-4 border-gray-300">{cookie.duration}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;