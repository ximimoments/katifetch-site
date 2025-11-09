// src/components/Header.jsx
import React from "react";
import logo from "../assets/logo.png"; // ruta relativa desde este archivo

export default function Header() {
  return (
    <img src={logo} alt="Katifetch Logo" className="w-24 h-24 rounded-xl" />
  );
}
