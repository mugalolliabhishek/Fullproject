import { Link } from 'react-router-dom';
import { restaurants } from '../data';

const Restaurants = () => (
  <section className="space-y-10">
    <div className="rounded-[2rem] bg-slate-900/95 p-8 shadow-soft">
      <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Restaurants</p>
      <h1 className="mt-2 text-3xl font-semibold text-white">Local kitchens ready to serve you</h1>
      <p className="mt-4 max-w-2xl text-slate-400">
        Discover hand-picked restaurant partners with rated menus, fast delivery estimates, and chef favorites.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {restaurants.map((restaurant) => (
        <article key={restaurant.id} className="rounded-[1.75rem] bg-slate-900/95 shadow-soft transition hover:-translate-y-1">
          <img src={restaurant.image} alt={restaurant.name} className="h-64 w-full object-cover" />
          <div className="space-y-4 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">{restaurant.category}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{restaurant.name}</h2>
              </div>
              <div className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-200">⭐ {restaurant.rating}</div>
            </div>
            <p className="text-sm leading-7 text-slate-400">{restaurant.description}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>{restaurant.eta}</span>
              <span>{restaurant.menu.length} items</span>
            </div>
            <Link
              to="/menu"
              className="inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              View menu
            </Link>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Restaurants;
