import { Fragment, useMemo, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  CheckIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';

function defaultChildren(item) {
  return item;
}

function SearchInput({ value, onChange }) {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center px-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 z-20" />
      </span>
      <input
        type="text"
        className="w-full h-12 block relative p-4 pl-10 bg-white border border-gray-300 text-black text-left text-base/[1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        value={value}
        onChange={onChange}
        placeholder="Search"
      />
    </div>
  );
}

function SheetsDropdown({
  items,
  selectedItem,
  setSelectedItem,
  children = defaultChildren,
}) {
  const [search, setSearch] = useState('');
  const filteredItems = useMemo(() => {
    if (!search) {
      return items;
    }
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  return (
    <Listbox value={selectedItem} onChange={setSelectedItem}>
      <div className="relative">
        <Listbox.Button
          id="account"
          className="block relative py-2 pl-6 pr-10 h-12 bg-[#f0f0f0] text-gray-500 text-lg/[1] font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          {children(selectedItem)}
          <span className="absolute inset-y-0 right-0 flex items-center px-4">
            <ChevronDownIcon
              className="h-4 w-4 text-black"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-2 w-64 max-h-64 min-w-full overflow-auto rounded-lg bg-white py-1 text-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 pt-[72px]">
            <div className="absolute inset-0 p-3">
              <SearchInput
                value={search}
                onChange={(e) => {
                  e.preventDefault();
                  setSearch(e.target.value);
                }}
              />
            </div>
            {filteredItems.map((item, itemIdx) => (
              <Listbox.Option
                key={itemIdx}
                className={({ active }) =>
                  `relative cursor-default select-none p-4 ${
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
                      {item}
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

export default SheetsDropdown;
