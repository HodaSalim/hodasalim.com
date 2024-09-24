"use client";

import { Footer } from "flowbite-react";

export default function Foot() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="❤️ Hoda Salim" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
