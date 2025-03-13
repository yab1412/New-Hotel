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

interface HeaderProps {
  menu: Menu[];
  logo: Logo;
}

const Header = ({ menu, logo }: HeaderProps) => {
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
                <li>
                  <a href="/link1">Link 1</a>
                </li>
                <li>
                  <a href="/link2">Link 2</a>
                </li>
                <li>
                  <a href="/link3">Link 3</a>
                </li>
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
