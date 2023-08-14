import { useState } from 'react';
import GoogleSheetsLogo from '../../../icons/GoogleSheetsLogo';
import Dropdown from '../../Dropdown';
import Button from '../../Button';
import SheetsDropdown from './SheetsDropdown';

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
  const [selectedSheet, setSelectedSheet] = useState(sheets[0]);

  const [selectedTab, setSelectedTab] = useState(sheets[0].tabs[0]);

  return (
    <div className="pt-6">
      <div>
        <label
          htmlFor="account"
          className="block mb-3 font-semibold text-black text-xl"
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
          className="block mb-3 font-semibold text-black text-xl"
        >
          File
        </label>
        <div className="relative">
          <Dropdown
            items={sheets}
            selectedItem={selectedSheet}
            setSelectedItem={setSelectedSheet}
            icon={<GoogleSheetsLogo className="h-10" />}
          />
          {selectedSheet?.tabs && (
            <span className="absolute inset-y-0 right-0 flex items-center mr-14">
              <SheetsDropdown
                items={selectedSheet.tabs}
                selectedItem={selectedTab}
                setSelectedItem={setSelectedTab}
              />
            </span>
          )}
        </div>
      </div>
      <div className="mt-6">
        <Button
          full
          className="h-16 max-h-16"
          disabled={selectedAccount === '' || selectedSheet === ''}
        >
          Export
        </Button>
      </div>
    </div>
  );
}

export default ExportSheets;
