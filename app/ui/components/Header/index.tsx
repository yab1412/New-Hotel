"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

interface Menu {
  title: string;
  path: string;
}

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface DropDown {
  Links: Menu[];
}

interface HeaderProps {
  menu: Menu[];
  logo: Logo;
  dropDown: DropDown[];
}

const Header = ({ menu, logo, dropDown }: HeaderProps) => {
  const [isSticky, setIsSticky] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.container} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </Link>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.navigation}>
            <input type="checkbox" className={styles.toggle} />
            <div className={styles.humberger}> </div>
            <ul className={styles.menu}>
              {Object.keys(menu).map((key, index) => {
                const menuIndex = Number(key);
                return (
                  <li
                    key={menuIndex}
                    className={styles.menus}
                    style={{ "--index": index } as React.CSSProperties}
                  >
                    <Link href={menu[menuIndex].path}>
                      {menu[menuIndex].title}
                    </Link>
                  </li>
                );
              })}
              <button className={styles.buttons} onClick={toggleDropdown}>
                Menu
              </button>
              {isDropdownOpen && (
                <ul className={styles.list}>
                  {Object.keys(dropDown).map((key) => {
                    const pageIndex = Number(key);
                    return (
                      <li key={pageIndex}>
                        {dropDown[pageIndex].Links.map((link, linkIndex) => (
                          <Link key={linkIndex} href={link.path}>
                            {link.title}
                          </Link>
                        ))}
                      </li>
                    );
                  })}
                </ul>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
