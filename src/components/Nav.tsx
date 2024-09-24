"use client";
import {
  Button,
  Navbar,
  DarkThemeToggle,
  NavbarCollapse,
} from "flowbite-react";
import spiderweb from "/spiderweb.svg?url";

export default function Nav() {
  const lang = "ar";
  return (
    <Navbar fluid>
      <Navbar.Brand href="/">
        <img src={spiderweb} className="mr-3 h-6 sm:h-9" alt="spider web" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Hoda Salim
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 align-middle">
        <Button>Download CV</Button>
        <Navbar.Toggle />
      </div>
      <NavbarCollapse className="md:order-3">
        <div className="flex">
          <DarkThemeToggle className="mx-3 border-2 border-gray-300 rounded" />
          <Button color="gray" className="mx-3">
            {lang == "ar" ? "EN" : "ع"}
          </Button>
        </div>
      </NavbarCollapse>
      <Navbar.Collapse className="items-center">
        <Navbar.Link className="self-center" href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
        <Navbar.Link href="#">About Me</Navbar.Link>
        <Navbar.Link href="#">Projects</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
