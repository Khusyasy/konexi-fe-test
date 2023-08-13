import classNames from 'classnames';

function Button({ full = false, rounded = false, ...props }) {
  const btnClass = classNames({
    'flex flex-row gap-2 px-5 py-3.5 max-h-12 bg-[#2284f3] text-white text-xl/[1] font-bold hover:bg-[#1e6ab3] hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50': true,
    'w-full': full,
    'rounded-full': rounded,
    'rounded-lg': !rounded,
  });
  return <button {...props} className={btnClass}></button>;
}

export default Button;
