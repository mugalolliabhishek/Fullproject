import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="border-t border-slate-800 bg-slate-950/95 py-10 text-slate-400">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
      <div>
        <h3 className="text-xl font-semibold text-white">FoodDelivery</h3>
        <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
          Fresh meals delivered fast. Browse menus, add your favorites, and enjoy our modern food delivery experience.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/menu"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            <span>Order Now</span>
          </a>
          <a
            href="/restaurants"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-600 hover:text-white"
          >
            <span>See restaurants</span>
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Quick links</h4>
        <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
          <Link to="/" className="inline-flex items-center gap-2 transition hover:text-white">
            <span className="text-emerald-300">•</span> Home
          </Link>
          <Link to="/menu" className="inline-flex items-center gap-2 transition hover:text-white">
            <span className="text-emerald-300">•</span> Menu
          </Link>
          <Link to="/cart" className="inline-flex items-center gap-2 transition hover:text-white">
            <span className="text-emerald-300">•</span> Cart
          </Link>
       
        </nav>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Contact</h4>
        <div className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
          <a
            href="mailto:mugalolliabhishek@gmail.com"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <span className="text-emerald-300">✉</span> mugalolliabhishek@gmail.com
          </a>
          <a
            href="phone:9611347225"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <span className="text-emerald-300">☎</span> 9611347225
          </a>
          <div className="inline-flex items-center gap-2 text-slate-400">
            <span className="text-emerald-300">📍</span> 123 Flavor Street, Food City
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Follow us</h4>
        <div className="mt-4 flex flex-wrap gap-3 text-slate-400">
          <a
            href=" https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=kol44s2"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-3 py-2 text-sm transition hover:bg-slate-800"
          >
            <span>📸</span> Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-3 py-2 text-sm transition hover:bg-slate-800"
          >
            <span>🐦</span> Twitter
          </a>
          <a
            href="https://www.facebook.com/share/18VZHtQywo/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-3 py-2 text-sm transition hover:bg-slate-800"
          >
            <span>👍</span> Facebook
          </a>
        </div>
      </div>
    </div>

    <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
      <p>Secure payment • Live order tracking • 24/7 support</p>
      <p className="mt-4">© {new Date().getFullYear()} FoodDelivery. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
