import "../styles/navbar.css";
import React, { useState, useEffect } from "react";
import NavbarItems from "./navItems";

export default function Navbar() {
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanShow(true), 1500);
    return () => clearTimeout(timer);
  });

  return <>{canShow ? <NavbarItems /> : <> </>}</>;
}
