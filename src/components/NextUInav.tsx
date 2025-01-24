"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SubnavItem {
  name: string;
  link: string;
}

interface NavItem {
  mainHeading: string;
  subnav?: SubnavItem[];
  link?: string;
}

interface NavbarProps {
  navdata: NavItem[]; // Define the type of the navdata prop
}

const NextUiNavbar: React.FC<NavbarProps> = ({ navdata }) => {
  const direc = ["best-vpn", "famous-vpn", "best-vpn-for-india"];
  const exclude = ["test-vpn", "vpn-page", "de", "in"];
  const specialnav: NavItem[] = [
    {
      mainHeading: "BEST VPN",
      subnav: [
        {
          name: "Popular",
          link: "",
        },
        {
          name: "Best VPN of 2024",
          link: "/best-vpn",
        },
        {
          name: "Best VPN in India",
          link: "/best-vpn-for-india",
        },
        {
          name: "Best free VPN",
          link: "/best-free-vpn",
        },
      ],
    },
    {
      mainHeading: "DEVICE",
      subnav: [
        {
          name: "Best VPN for Android",
          link: "/reviews",
        },
        {
          name: "Best VPN for Iphone",
          link: "/reviews",
        },
        {
          name: "Best VPN for Windows",
          link: "/reviews",
        },
        {
          name: "Best VPN for Mac",
          link: "/reviews",
        },
        {
          name: "Best VPN for Linux",
          link: "/reviews",
        },
      ],
    },
    {
      mainHeading: "About",
      link: "/about",
    },
    {
      mainHeading: "Contact",
      link: "/contact-us",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathname = usePathname();
  const currentPath = pathname?.split("/")[1] || "home";

  const icons = {
    chevron: (
      <ChevronDown
        fill="currentColor"
        size={16}
        height={undefined}
        width={undefined}
      />
    ),
  };

  if (!exclude.includes(currentPath))
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className="W-full">
        <NavbarContent justify="center">
          {/* <NavbarContent className="hidden sm:flex gap-4" justify="center"> */}
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="laptop:hidden"
          />
          <Link href="/" className="text-inherit">
            <NavbarBrand className="max-w-fit">
              <div
                className={`${
                  !(currentPath && direc.includes(currentPath))
                    ? null
                    : "ml-[170px]"
                }`}
              >
                <Image src="/logo.png" alt="logo" height={30} width={30} />
              </div>
              <p className="font-bold text-inherit">VPNs GUIDE</p>
            </NavbarBrand>
          </Link>
          {!(currentPath && direc.includes(currentPath)) ? (
            // general navbar
            <NavbarContent className="hidden laptop:flex gap-3 w-full">
              {navdata.map((item: NavItem, idx: number) =>
                item.subnav && item.subnav.length > 0 ? (
                  <Dropdown key={idx} shouldBlockScroll={false}>
                    <NavbarItem>
                      <DropdownTrigger>
                        <Button
                          disableRipple
                          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                          endContent={icons.chevron}
                          radius="sm"
                          variant="light"
                        >
                          {item.mainHeading}
                        </Button>
                      </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                      aria-label="VPN guide"
                      className="w-[340px]"
                      itemClasses={{
                        base: "gap-5",
                      }}
                    >
                      {item.subnav?.map(
                        (subitem: SubnavItem, subidx: number) => (
                          <DropdownItem
                            key={idx}
                            className={`px-4 mb-2 customNavDesign ${
                              idx == 0 && subidx == 0
                                ? "data-[hover=true]:bg-transparent"
                                : null
                            }`}
                          >
                            {subidx == 5 ? (
                              <Link
                                href={subitem.link}
                                className="px-2 py-1 font-semibold flex justify-start text-[#197BEB]  items-center gap-3 "
                              >
                                click more
                                <FaArrowRight className="" />
                              </Link>
                            ) : (
                              <>
                                {idx == 0 && subidx == 0 ? (
                                  <p
                                    className="text-base w-full font-bold pb-1"
                                    dangerouslySetInnerHTML={{
                                      __html: subitem.name,
                                    }}
                                  ></p>
                                ) : (
                                  <Link
                                    href={subitem.link}
                                    className="px-2 py-1 text-inherit w-full"
                                  >
                                    {subitem.name}
                                  </Link>
                                )}
                              </>
                            )}
                          </DropdownItem>
                        )
                      )}
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <NavbarItem key={idx}>
                    <Link href={item.link}>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                        radius="sm"
                        variant="light"
                      >
                        {item.mainHeading}
                      </Button>
                    </Link>
                  </NavbarItem>
                )
              )}
            </NavbarContent>
          ) : (
            // special navbar
            <NavbarContent className="hidden laptop:flex gap-3 w-full">
              {specialnav.map((item: NavItem, idx: number) =>
                item.subnav && item.subnav.length > 0 ? (
                  <Dropdown key={idx} shouldBlockScroll={false}>
                    <NavbarItem>
                      <DropdownTrigger>
                        <Button
                          disableRipple
                          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                          endContent={icons.chevron}
                          radius="sm"
                          variant="light"
                        >
                          {item.mainHeading}
                        </Button>
                      </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                      aria-label="VPN guide"
                      className="w-[340px]"
                      itemClasses={{
                        base: "gap-5",
                      }}
                    >
                      {item.subnav?.map(
                        (subitem: SubnavItem, subidx: number) => (
                          <DropdownItem
                            key={idx}
                            className={`px-4 mb-2 customNavDesign ${
                              idx == 0 && subidx == 0
                                ? "data-[hover=true]:bg-transparent"
                                : null
                            }`}
                          >
                            {subidx == 5 ? (
                              <Link
                                href={subitem.link}
                                className="px-2 py-1 font-semibold flex justify-start text-[#197BEB]  items-center gap-3 "
                              >
                                click more
                                <FaArrowRight className="" />
                              </Link>
                            ) : (
                              <>
                                {idx == 0 && subidx == 0 ? (
                                  <p
                                    className="text-base w-full font-bold pb-1"
                                    dangerouslySetInnerHTML={{
                                      __html: subitem.name,
                                    }}
                                  ></p>
                                ) : (
                                  <Link
                                    href={subitem.link}
                                    className="px-2 py-1 text-inherit w-full"
                                  >
                                    {subitem.name}
                                  </Link>
                                )}
                              </>
                            )}
                          </DropdownItem>
                        )
                      )}
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <NavbarItem key={idx}>
                    <Link href={item.link}>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                        radius="sm"
                        variant="light"
                      >
                        {item.mainHeading}
                      </Button>
                    </Link>
                  </NavbarItem>
                )
              )}
            </NavbarContent>
          )}
        </NavbarContent>

        {/* mobile view */}
        {!(currentPath && direc.includes(currentPath)) ? (
          <NavbarMenu>
            {navdata.map((itm: NavItem, idx: number) =>
              itm.subnav && itm.subnav.length > 0 ? (
                <Accordion key={idx}>
                  <AccordionItem
                    key={idx}
                    aria-label={itm.mainHeading}
                    title={itm.mainHeading}
                  >
                    {itm.subnav.map((subitm: SubnavItem, subidx: number) => (
                      <div key={subidx}>
                        {subidx == 5 ? (
                          <Link href={subitm.link} className="mb-4">
                            <button>see more</button>
                          </Link>
                        ) : (
                          <>
                            {idx == 0 && subidx == 0 ? (
                              <p className="text-base w-full font-bold pb-1">
                                Popular
                              </p>
                            ) : (
                              <Link
                                href={subitm.link}
                                className="text-inherit mb-4 w-full p-2"
                              >
                                {subitm.name}
                              </Link>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </AccordionItem>
                </Accordion>
              ) : (
                <NavbarItem key={idx}>
                  <Link href={itm.link}>
                    <Button
                      disableRipple
                      className="p-0 px-2 bg-transparent data-[hover=true]:bg-transparent text-[16px] justify-start"
                      radius="sm"
                      variant="light"
                    >
                      {itm.mainHeading}
                    </Button>
                  </Link>
                </NavbarItem>
              )
            )}
          </NavbarMenu>
        ) : (
          <NavbarMenu>
            {specialnav.map((itm: NavItem, idx: number) =>
              itm.subnav && itm.subnav.length > 0 ? (
                <Accordion key={idx}>
                  <AccordionItem
                    key={idx}
                    aria-label={itm.mainHeading}
                    title={itm.mainHeading}
                  >
                    {itm.subnav.map((subitm: SubnavItem, subidx: number) => (
                      <div key={subidx}>
                        {subidx == 5 ? (
                          <Link href={subitm.link} className="mb-4">
                            <button>see more</button>
                          </Link>
                        ) : (
                          <>
                            {idx == 0 && subidx == 0 ? (
                              <p className="text-base w-full font-bold pb-1">
                                Popular
                              </p>
                            ) : (
                              <Link
                                href={subitm.link}
                                className="text-inherit mb-4 w-full p-2"
                              >
                                {subitm.name}
                              </Link>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </AccordionItem>
                </Accordion>
              ) : (
                <NavbarItem key={idx}>
                  <Link href={itm.link}>
                    <Button
                      disableRipple
                      className="p-0 px-2 bg-transparent data-[hover=true]:bg-transparent text-[16px] justify-start"
                      radius="sm"
                      variant="light"
                    >
                      {itm.mainHeading}
                    </Button>
                  </Link>
                </NavbarItem>
              )
            )}
          </NavbarMenu>
        )}
      </Navbar>
    );
};

export default NextUiNavbar;
