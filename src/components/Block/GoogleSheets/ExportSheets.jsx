import { useEffect, useState } from 'react';
import GoogleSheetsLogo from '../../../icons/GoogleSheetsLogo';
import Dropdown from '../../Dropdown';
import Button from '../../Button';
import SheetsDropdown from './SheetsDropdown';
import dayjs from '../../../plugins/dayjs';

function ExportSheets() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'Luthfi Khusyasy',
    },
    {
      id: 2,
      name: 'Account Name',
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
      name: 'MySheet',
      tabs: ['Work', 'Study', 'Recipes', 'Others'],
    },
    {
      id: 2,
      name: 'sheetname',
      tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
    },
    {
      id: 3,
      name: 'Sheet 3',
      tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
    },
  ]);
  const [selectedSheet, setSelectedSheet] = useState('');

  const [selectedTab, setSelectedTab] = useState('');
  useEffect(() => {
    if (!selectedSheet) {
      return;
    }
    setSelectedTab(selectedSheet.tabs[0]);
  }, [selectedSheet]);

  const [loading, setLoading] = useState(false);
  const [lastExport, setLastExport] = useState('');

  function exportData() {
    setLoading(true);
    setTimeout(() => {
      // mock api call
      setLoading(false);
      setLastExport(Date.now());
    }, 2 * 1000);
  }

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
          disabled={
            selectedAccount === '' ||
            selectedSheet === '' ||
            selectedTab === '' ||
            loading
          }
          loading={loading}
          onClick={exportData}
        >
          Export
        </Button>
      </div>
      {lastExport && (
        <div className="mt-2 text-center text-gray-500 font-semibold">
          Last export {dayjs(lastExport).fromNow()}
        </div>
      )}
    </div>
  );
}

export default ExportSheets;
