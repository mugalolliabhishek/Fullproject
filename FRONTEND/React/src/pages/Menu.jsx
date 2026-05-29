import { useMemo, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { categories, foodItems } from '../data';

const Menu = () => {
  const { addToCart } = useAppContext();
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const menu = useMemo(() => {
    return foodItems.filter((item) => {
      const categoryMatch = category === 'All' || item.category === category;
      const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-4 rounded-[2rem] bg-slate-900/95 p-8 shadow-soft sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Our menu</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Explore dishes from all categories</h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-full border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-slate-200 outline-none focus:border-emerald-400"
          >
            <option value="All">All categories</option>
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>{cat.name}</option>
            ))}
          </select>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search meals"
            className="rounded-full border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-slate-200 outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {menu.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-soft transition hover:-translate-y-1">
            <img
              src={item.image}
              alt={item.name}
              className="h-72 w-full object-cover transition duration-500 hover:scale-105"
            />
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">{item.category}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{item.name}</h2>
                </div>
                <div className="rounded-3xl bg-slate-800 px-4 py-3 text-lg font-semibold text-emerald-300">${item.price.toFixed(2)}</div>
              </div>
              <p className="text-sm leading-7 text-slate-400">{item.description}</p>
              <button
                type="button"
                onClick={() => addToCart(item)}
                className="w-full rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Menu;
