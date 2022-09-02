import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoDesktopProps {
  logo: string;
}

const LogoDesktop: React.FC<LogoDesktopProps> = ({ logo }) => {
  return (
    <div className="logo">
      <Link href="/">
        <a>
          <Image
            width={150}
            height={70}
            src={logo}
            alt="Logo del sitio de Click"
          />
        </a>
      </Link>
    </div>
  );
};

export default LogoDesktop;
