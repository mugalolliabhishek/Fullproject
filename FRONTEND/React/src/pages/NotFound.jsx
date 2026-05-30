import { Link } from 'react-router-dom';


const NotFound = () => (
  <section className="flex min-h-[60vh] items-center justify-center px-4 py-16">
    <div className="w-full max-w-3xl rounded-[2rem] bg-slate-900/95 p-10 text-center shadow-soft">
      <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Page not found</p>
      <h1 className="mt-6 text-5xl font-semibold text-white">404</h1>
      <p className="mt-4 text-lg leading-8 text-slate-400">
        We couldn’t find the page you were looking for. Return to the homepage and continue exploring.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Go back home
      </Link>
    </div>
  </section>
);

export default NotFound;
