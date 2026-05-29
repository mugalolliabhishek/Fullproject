import { useAppContext } from '../context/AppContext';

const Toast = () => {
  const { toast } = useAppContext();

  if (!toast) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <div
        className={`max-w-xl rounded-3xl border border-slate-800 px-5 py-4 text-sm shadow-soft transition-all duration-300 ${
          toast.type === 'success'
            ? 'bg-emerald-500 text-slate-950'
            : toast.type === 'error'
            ? 'bg-rose-500 text-white'
            : 'bg-slate-800 text-slate-100'
        }`}
      >
        {toast.message}
      </div>
    </div>
  );
};

export default Toast;
