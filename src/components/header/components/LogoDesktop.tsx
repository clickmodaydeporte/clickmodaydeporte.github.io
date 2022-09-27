import Link from "next/link";
import React from "react";
import { LogoDesktopProps } from "../../../interfaces";

const LogoDesktop: React.FC<LogoDesktopProps> = ({ logo }) => {
  return (
    <div className="logo">
      <Link href="/">
        <a>
          <img
            width={160}
            height={75}
            src={logo}
            alt="Logo del sitio de Click"
          />
        </a>
      </Link>
    </div>
  );
};

export default LogoDesktop;
