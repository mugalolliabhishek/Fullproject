import { useAppContext } from '../context/AppContext';

const Profile = () => {
  const { authToken, cartCount, logout } = useAppContext();

  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] bg-slate-900/95 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Profile</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Your account</h1>
        <p className="mt-3 max-w-2xl text-slate-400">Manage your login, view cart activity, and logout securely.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] bg-slate-900/95 p-8 shadow-soft">
          <div className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Account token</p>
              <p className="mt-2 break-words text-slate-300">{authToken || 'Not logged in'}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Current cart</p>
              <p className="mt-2 text-slate-300">{cartCount} item{cartCount !== 1 ? 's' : ''} in your cart</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-900/95 p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Security</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Logout and clear session</h2>
          <p className="mt-4 text-slate-400">
            Click the button below to end your session and clear cached cart data.
          </p>
          <button
            type="button"
            onClick={logout}
            className="mt-6 rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-400"
          >
            Logout now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
