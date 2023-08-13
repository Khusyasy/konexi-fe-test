import TrashIcon from '../../icons/TrashIcon';

function BlockBase({ icon, title = 'Block Title', children }) {
  return (
    <div className="w-full max-w-screen-md h-fit bg-[#ffffff] p-8 rounded-xl border-2 border-gray-200">
      <div className="flex justify-between items-center">
        {icon}
        <h1 className="font-bold w-full mx-4 text-xl">{title}</h1>
        <div>
          <TrashIcon className="w-4 h-4" />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default BlockBase;
