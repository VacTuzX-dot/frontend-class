"use client";
import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem 0",
        color: "#888",
        fontSize: "0.9rem",
        borderTop: "1px solid #eee",
        transition: "all 0.3s ease-in-out",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Discord Link */}
      <div style={{ marginBottom: "1rem" }}>
        <a
          href="https://discord.com/users/942687569693528084"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#5865F2",
            fontSize: "1.5rem",
            textDecoration: "none",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#4752C4";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#5865F2";
            e.target.style.transform = "scale(1)";
          }}
          title="ติดต่อผ่าน Discord"
        >
          <i className="fa-brands fa-discord"></i>
        </a>
      </div>

      {/* Copyright */}
      <div>
        © {new Date().getFullYear()} Taweesak Numma. All rights reserved.
      </div>
    </footer>
  );
}
