// create a footer component for nextjs 14

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Creado por {" "}
          <a
            href="https://github.com/Arielcito"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Ari
          </a>
        </p>
      </footer>
    );
}


