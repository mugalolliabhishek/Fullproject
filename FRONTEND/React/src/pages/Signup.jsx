import { useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import { useAppContext } from '../context/AppContext';
import Loader from '../components/Loader';
const BaseURL = import.meta.env.VITE_URL || 'http://localhost:5000';

const Signup = () => {
  const navigate = useNavigate();
  const { login, showToast } = useAppContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  

  const canSubmit = useMemo(
    () => name.trim().length > 0 && email.trim().length > 0 && password.trim().length >= 6,
    [name, email, password],
  );

  const handleSignup = async () => {
    if (!canSubmit) return;
    setError('');
    setLoading(true);

    try {
      const response = await api.post(`${BaseURL}/signup`, { name, email, password });
      const token = response?.data?.token || response?.data?.accessToken;

      if (!token) {
        showToast('Account created. Please log in.', 'success');
        navigate('/login');
        return;
      }

      login(token);
      showToast('Signup successful', 'success');
      navigate('/signup');
    } catch (err) {
      const message = err?.response?.data?.message || err?.message || 'Unable to create account';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-100px)] max-w-6xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid w-full gap-8 rounded-[2rem] bg-slate-900/95 p-8 shadow-soft sm:grid-cols-2 sm:p-10" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' },{backgroundImage: 'url(https://wallpapers.com/images/hd/food-delivery-grey-poster-3tfjgxqha3o38h3t.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="space-y-6 border-r border-slate-800 pr-6 text-slate-100 sm:border-r-0 sm:pr-0 sm:pb-0 ">
       
        </div>

        <div className="rounded-[1.75rem] bg-slate-950/95 p-8 shadow-soft" >
          <h2 className="text-2xl font-semibold text-white">Sign up for FoodDelivery</h2>
          <p className="mt-2 text-sm text-slate-400">
            Fill in your details to create an account.
          </p>

          <div className="mt-8 space-y-5">
            <label className="block text-sm font-medium text-slate-300">
              Full name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400"
                placeholder="Enter your name"
              />
            </label>
            <label className="block text-sm font-medium text-slate-300">
              Email address
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400"
                placeholder="you@example.com"
              />
            </label>
            <label className="block text-sm font-medium text-slate-300">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400"
                placeholder="Minimum 6 characters"
              />
            </label>

            {error ? <div className="rounded-3xl bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{error}</div> : null}

            <button
              type="button"
              onClick={handleSignup}
              disabled={loading}
              className="flex w-full items-center justify-center rounded-full bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? <Loader /> : 'Create account'}
            </button>

            <div className="text-center text-sm text-slate-400">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-white hover:text-emerald-300">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
