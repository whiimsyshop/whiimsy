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
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./Icons.jsx";
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
  navdata: NavItem[];
}

const NextUiNavbar: React.FC<NavbarProps> = ({ navdata }) => {
  const direc = ["best", "famous"];
  const exclude = ["de", "in"];
  const specialnav: NavItem[] = [
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
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  const renderNavItems = (items: NavItem[]) =>
    items.map((item: NavItem, idx: number) =>
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
          <DropdownMenu aria-label="Dropdown menu">
            {item.subnav.map((subitem: SubnavItem, subidx: number) => (
              <DropdownItem key={subidx}>
                <Link href={subitem.link} className="px-2 py-1 text-inherit w-full">
                  {subitem.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      ) : (
        <NavbarItem key={idx}>
          <Link href={item.link || "#"}>
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
    );

  const renderMobileMenu = (items: NavItem[]) => (
    <NavbarMenu>
      {items.map((item: NavItem, idx: number) => (
        <NavbarMenuItem key={idx}>
          {item.subnav && item.subnav.length > 0 ? (
            <Dropdown>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  radius="sm"
                  variant="light"
                >
                  {item.mainHeading}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Mobile dropdown menu">
                {item.subnav.map((subitem: SubnavItem, subidx: number) => (
                  <DropdownItem key={subidx}>
                    <Link href={subitem.link} className="px-2 py-1 text-inherit w-full">
                      {subitem.name}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Link href={item.link || "#"}>{item.mainHeading}</Link>
          )}
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );

  if (!exclude.includes(currentPath)) {
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className="w-full">
        <NavbarContent justify="center">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="laptop:hidden" />
          <Link href="/" className="text-inherit">
            <NavbarBrand>
              <Image src="/logo.png" alt="logo" height={30} width={30} />
              <p className="font-bold text-inherit">Whiimsy</p>
            </NavbarBrand>
          </Link>
          <NavbarContent className="hidden laptop:flex gap-3 w-full" style={{ paddingLeft: "20em" }}>
            {navdata.map((item) =>
              item.mainHeading === "SHOP NOW" ? (
                <a
                  key={item.link}
                  className="shop-now-button"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d6c2af")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e8d6c5")}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  {item.mainHeading}
                </a>
              ) : (
                <a
                  key={item.link}
                  href={item.link}
                  className="text-gray-800 hover:text-gray-600"
                  style={{ paddingRight: "1rem" }}
                >
                  {item.mainHeading}
                </a>
              )
            )}
          </NavbarContent>
        </NavbarContent>
        <div className="laptop:hidden">{renderMobileMenu(navdata)}</div>
      </Navbar>
    );
  } else {
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className="w-full">
        <NavbarContent justify="center">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="laptop:hidden" />
          <Link href="/" className="text-inherit">
            <NavbarBrand>
              <Image src="/logo.png" alt="logo" height={30} width={30} />
              <p className="font-bold text-inherit">VPNs GUIDE</p>
            </NavbarBrand>
          </Link>
          <NavbarContent className="hidden laptop:flex gap-3 w-full">{renderNavItems(specialnav)}</NavbarContent>
        </NavbarContent>
        <div className="laptop:hidden">{renderMobileMenu(specialnav)}</div>
      </Navbar>
    );
  }
};

export default NextUiNavbar;
