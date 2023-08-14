import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import classNames from 'classnames';

function defaultChildren(item) {
  return item.name;
}

function Dropdown({
  items,
  selectedItem,
  setSelectedItem,
  placeholder = 'Select an item',
  icon = null,
  children = defaultChildren,
}) {
  const btnClass = classNames(
    'block relative bg-white border border-gray-300 text-black text-left text-base/1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 w-full p-3 h-12 overflow-hidden',
    {
      'pl-12': icon,
      'text-gray-500': !selectedItem,
    }
  );
  return (
    <Listbox value={selectedItem} onChange={setSelectedItem}>
      <div className="relative mt-2">
        <Listbox.Button id="account" className={btnClass}>
          {icon && (
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0.5">
              {icon}
            </span>
          )}
          {selectedItem ? children(selectedItem) : placeholder}
          {selectedItem ? (
            <span
              className="absolute inset-y-0 right-0 flex items-center px-2.5 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                setSelectedItem('');
              }}
            >
              <XMarkIcon className="h-5 w-5 text-black" aria-hidden="true" />
            </span>
          ) : (
            <span className="absolute inset-y-0 right-0 flex items-center px-2.5">
              <ChevronDownIcon
                className="h-5 w-5 text-black"
                aria-hidden="true"
              />
            </span>
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
            {items.map((item, itemIdx) => (
              <Listbox.Option
                key={itemIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active ? 'bg-blue-100 text-gray-800' : 'text-black'
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-semibold' : 'font-normal'
                      }`}
                    >
                      {item.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-700">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

export default Dropdown;
