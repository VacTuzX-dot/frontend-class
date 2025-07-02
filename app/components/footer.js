"use client";
import React from "react";
import Head from "next/head";

export default function Footer() {
  return (
    <>
      {/* วิธีที่ 1: ใช้ Head component */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <footer
        style={{
          textAlign: "center",
          padding: "1rem 0",
          color: "#888",
          fontSize: "0.9rem",
          transition: "all 0.3s ease-in-out",
          backgroundColor: "#000",
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
    </>
  );
}
