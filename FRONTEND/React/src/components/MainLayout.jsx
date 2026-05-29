import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const MainLayout = ({ cartCount }) => {
  return (
    <div className="appShell">
      <header className="siteHeader">
        <div className="brandWrap">
          <div className="logoPulse" />
          <Link to="/home" className="brandLink">
            FOODDELIVERY
          </Link>
        </div>

        <nav className="navLinks">
          <NavLink className={({ isActive }) => (isActive ? 'navLink navActive' : 'navLink')} to="/home">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'navLink navActive' : 'navLink')} to="/restaurants">
            Restaurants
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'navLink navActive' : 'navLink')} to="/cart">
            Cart
          </NavLink>
        </nav>

        <Link to="/cart" className="cartButton" aria-label="View cart">
          Cart
          <span className="cartBadge">{cartCount}</span>
        </Link>
      </header>

      <main className="pageContent">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
