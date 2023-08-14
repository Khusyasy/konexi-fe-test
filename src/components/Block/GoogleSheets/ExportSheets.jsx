import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import GoogleSheetsLogo from '../../../icons/GoogleSheetsLogo';
import Dropdown from '../../Dropdown';

function ExportSheets() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'Luthfi Khusyasy',
    },
    {
      id: 2,
      name: 'Account 2',
    },
    {
      id: 3,
      name: 'Account 3',
    },
  ]);
  const [selectedAccount, setSelectedAccount] = useState('');

  const [sheets, setSheets] = useState([
    {
      id: 1,
      name: 'sheetname',
      tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
    },
    {
      id: 2,
      name: 'sheetname 2',
      tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
    },
  ]);
  const [selectedSheet, setSelectedSheet] = useState('');

  return (
    <div className="pt-6">
      <div>
        <label
          htmlFor="account"
          className="block mb-2 font-semibold text-black text-lg"
        >
          Google Account
        </label>
        <Dropdown
          items={accounts}
          selectedItem={selectedAccount}
          setSelectedItem={setSelectedAccount}
        />
      </div>
      <div className="mt-6">
        <label
          htmlFor="file"
          className="block mb-2 font-semibold text-black text-lg"
        >
          File
        </label>
        <Dropdown
          items={sheets}
          selectedItem={selectedSheet}
          setSelectedItem={setSelectedSheet}
          icon={<GoogleSheetsLogo className="h-7" />}
        />
      </div>
    </div>
  );
}

export default ExportSheets;
