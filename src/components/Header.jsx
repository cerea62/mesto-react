import React from 'react';
import headerLogo from '../image/logo.svg';

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип Место"/>
    </div>
  );
}
