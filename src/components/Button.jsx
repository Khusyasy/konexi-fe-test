import classNames from 'classnames';
import Spinner from './Spinner';

function Button({
  full = false,
  rounded = false,
  loading = false,
  children,
  ...props
}) {
  const btnClass = classNames({
    'flex flex-row gap-2 justify-center items-center px-5 py-2 h-12 max-h-12" bg-[#2284f3] text-white text-xl/[1] font-bold hover:bg-[#1e6ab3] hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition-all': true,
    'w-full': full,
    'w-32': !full,
    'rounded-full': rounded,
    'rounded-lg': !rounded,
  });

  return (
    <button {...props} className={btnClass}>
      {loading ? <Spinner /> : children}
    </button>
  );
}

export default Button;
