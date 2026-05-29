import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Cart', path: '/cart' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { authToken, cartCount, logout, darkMode, setDarkMode } = useAppContext();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 text-lg font-bold text-slate-950 shadow-soft">
            F
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">FoodDelivery</p>
            <p className="text-sm text-slate-300">Fresh taste, fast delivery</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-emerald-300' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200 transition hover:border-slate-700 hover:text-white"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>

          {authToken ? (
            <>
              <Link
                to="/cart"
                className="inline-flex items-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Cart ({cartCount})
              </Link>
              <button
                type="button"
                onClick={logout}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Signup
              </Link>
            </div>
          )}
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-slate-200 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
              >
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                setDarkMode(!darkMode);
                setOpen(false);
              }}
              className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:border-slate-700 hover:text-white"
            >
              {darkMode ? 'Switch to Light' : 'Switch to Dark'}
            </button>
            {authToken ? (
              <button
                type="button"
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:border-slate-700 hover:text-white"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-300"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
