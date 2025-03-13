import React, { useState } from 'react'
import style from "./index.module.scss"

export const Head = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={style.container}>
      <button className={style.buttons} onClick={toggleDropdown}>Menu</button>
      {isDropdownOpen && (
        <ul className={style.list}>
          <li><a href="/link1">Link 1</a></li>
          <li><a href="/link2">Link 2</a></li>
          <li><a href="/link3">Link 3</a></li>
        </ul>
      )}
      
    </div>
  )
}
