import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { heroImage, categoryImages } from '../assets/foodImages';
import { categories, featuredItems } from '../data';

const BaseURL = import.meta.env.VITE_Base_URL || 'http://localhost:5000';

const Home = () => {
  const { addToCart } = useAppContext();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const visibleCategories = useMemo(
    () => ['All', ...categories.map((category) => category.name)],
    [],
  );

  const filteredItems = useMemo(() => {
    return featuredItems.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 shadow-soft">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-slate-950">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M3 13h2l3 4h10v-4h2l1.5 3 1.5-3h.5v5h-1v3h-2v-3h-14v3h-2v-9zm18 5h.5l-.5 1-.5-1h.5zM4 11V7c0-1.1.9-2 2-2h8v4H6v2H4zm14 2h-2V9h-4V5h2V3h2v2h2v2h2v3z" />
              </svg>
            </span>
            Top rated for fast delivery
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Delicious food delivered to your door.
            </h1>
            <p className="max-w-2xl text-slate-400 sm:text-lg">
              Browse categories, discover featured meals, and add your favorites to the cart with one click.
            </p>
            <div className="grid gap-3 sm:grid-cols-4">
              {[
                { label: 'Pizza', image: categoryImages.pizzas },
                { label: 'Burger', image: categoryImages.burgers },
                { label: 'Drinks', image: categoryImages.drinks },
                { label: 'Salads', image: categoryImages.salads },
              ].map((icon) => (
                <div key={icon.label} className="flex items-center gap-3 rounded-3xl bg-slate-900/80 p-3 shadow-soft transition hover:-translate-y-1 hover:bg-slate-800">
                  <div className="h-14 w-14 overflow-hidden rounded-2xl bg-slate-800">
                    <img src={icon.image} alt={icon.label} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">{icon.label}</p>
                    <p className="text-sm text-slate-400">Fast pick</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/menu" className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-300">
              Order now
            </Link>
            <Link to="/restaurants" className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:bg-slate-950">
              Browse restaurants
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl bg-slate-900/90 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M3 13h2l3 4h10v-4h2l1.5 3 1.5-3h.5v5h-1v3h-2v-3h-14v3h-2v-9zm18 5h.5l-.5 1-.5-1h.5zM4 11V7c0-1.1.9-2 2-2h8v4H6v2H4zm14 2h-2V9h-4V5h2V3h2v2h2v2h2v3z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm uppercase text-slate-400">Delivery</p>
                  <p className="mt-3 text-2xl font-semibold text-white">30 min</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-emerald-300">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm uppercase text-slate-400">Rating</p>
                  <p className="mt-3 text-2xl font-semibold text-white">4.9/5</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-emerald-300">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5 0-1.92 1.04-3.58 2.57-4.47 1.16 1.1 2.63 1.77 4.29 1.93-.24 1.17-.34 2.35-.34 3.54 0 .92.07 1.82.19 2.72-.86.16-1.68.61-2.42 1.28-.75.68-1.18 1.46-1.18 2.21h4c0-.81-.3-1.58-.83-2.22-.54-.65-1.29-1.1-2.17-1.19.06-.53.12-1.06.19-1.6 1.3-.45 2.35-1.4 2.93-2.63 1.05.81 1.78 2 1.78 3.35 0 2.21-1.79 4-4 4z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm uppercase text-slate-400">Cuisine</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Global</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-emerald-300">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 2l2.95 6.09L22 9l-4.8 4.68L18.9 22 12 18.73 5.1 22l1.7-8.32L2 9l7.05-0.91L12 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm uppercase text-slate-400">Promo</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Free delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-soft">
          <img src={heroImage} alt="Fresh meal" className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-6 text-slate-100">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Fresh meals</p>
            <h2 className="mt-2 text-3xl font-semibold">Explore today’s best restaurants</h2>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Categories</p>
            <h2 className="text-3xl font-semibold text-white">Choose your cravings</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {visibleCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? 'bg-emerald-400 text-slate-950'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/menu"
              className="animate-fade-in group overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-soft transition hover:-translate-y-1 hover:bg-slate-800"
            >
              <img src={categoryImages[category.key]} alt={category.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="space-y-2 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{category.name}</p>
                <h3 className="text-xl font-semibold text-white">{category.description}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Featured</p>
            <h2 className="text-3xl font-semibold text-white">Trending food items</h2>
          </div>
          <div className="relative max-w-xl">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-slate-800 bg-slate-900/90 px-5 py-3 text-sm text-slate-200 outline-none transition focus:border-emerald-400"
              placeholder="Search favorite meals"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <article key={item.id} className="animate-fade-in group overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-soft transition hover:-translate-y-1">
              <img src={item.image} alt={item.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">{item.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.name}</h3>
                  </div>
                  <div className="rounded-3xl bg-slate-800 px-4 py-3 text-lg font-semibold text-emerald-300">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
                <p className="text-sm leading-6 text-slate-400">{item.description}</p>
                <button
                  type="button"
                  onClick={() => addToCart(item)}
                  className="w-full rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;

