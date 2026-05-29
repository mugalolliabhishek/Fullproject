import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useAppContext();

  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] bg-slate-900/95 p-8 shadow-soft">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Your cart</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Ready to checkout</h1>
          </div>
          <div className="rounded-full bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-[2rem] bg-slate-900/95 p-12 text-center shadow-soft">
          <p className="text-xl font-semibold text-white">Your cart is empty</p>
          <p className="mt-3 text-slate-400">Add meals from the menu to see them here.</p>
          <Link
            to="/menu"
            className="mt-6 inline-flex rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Browse menu
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-800 bg-slate-900/95 p-6 shadow-soft sm:flex-row sm:items-center">
                <img src={item.image} alt={item.name} className="h-32 w-32 rounded-3xl object-cover" />
                <div className="flex-1 space-y-2">
                  <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                  <p className="text-sm leading-7 text-slate-400">{item.description}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                    <span>Quantity: {item.quantity}</span>
                    <span>${item.price.toFixed(2)} each</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-slate-800 p-2 text-sm text-slate-200">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, -1)}
                      className="rounded-full bg-slate-700 px-3 py-2 transition hover:bg-slate-600"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="rounded-full bg-slate-700 px-3 py-2 transition hover:bg-slate-600"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold text-white">${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[2rem] bg-slate-900/95 p-8 shadow-soft">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Order summary</p>
              <h2 className="text-3xl font-semibold text-white">Grand total</h2>
              <p className="text-5xl font-semibold text-emerald-300">${cartTotal.toFixed(2)}</p>
              <p className="text-sm leading-7 text-slate-400">Taxes and delivery fees calculated at checkout.</p>
              <button
                type="button"
                className="w-full rounded-full bg-emerald-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
};

export default Cart;
