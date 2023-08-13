import classNames from 'classnames';

function IconButton({ rounded = false, ...props }) {
  const btnClass = classNames({
    'w-12 h-12 flex-shrink-0 flex flex-row justify-center items-center bg-[#f0f0f0] hover:bg-[#e2e2e2] hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50': true,
    'rounded-full': rounded,
    'rounded-lg': !rounded,
  });
  return <button {...props} className={btnClass}></button>;
}

export default IconButton;
