import { useState } from 'react';

import BlockBase from '../BlockBase';
import ConnectGoogle from './ConnectGoogle';

import Button from '../../Button';

import GoogleSheetsLogo from '../../../icons/GoogleSheetsLogo';
import FlowIcon from '../../../icons/FlowIcon';
import ExportSheets from './ExportSheets';

const STEPS = {
  CONNECT_GOOGLE: 0,
  CONNECT_FLOW: 1,
  EXPORT_SHEET: 2,
};

function Logo() {
  return (
    <div className="w-16 h-16 bg-[#e7f6f1] rounded-lg flex items-center justify-center flex-shrink-0">
      <GoogleSheetsLogo className="h-8" />
    </div>
  );
}

function GoogleSheets() {
  const [step, setStep] = useState(STEPS.CONNECT_GOOGLE);
  const [loading, setLoading] = useState(false);

  function connectGoogleDone() {
    setStep(STEPS.CONNECT_FLOW);
  }

  function connectFlow() {
    setLoading(true);
    setTimeout(() => {
      // mock api call
      setLoading(false);
      setStep(STEPS.EXPORT_SHEET);
    }, 2 * 1000);
  }

  return (
    <BlockBase icon={<Logo />} title="Export to Google Sheets">
      {step === STEPS.CONNECT_GOOGLE && (
        <ConnectGoogle done={connectGoogleDone} />
      )}
      {step === STEPS.CONNECT_FLOW && (
        <div className="pt-6">
          <Button
            full
            rounded
            variant="secondary"
            className="h-16 max-h-16"
            onClick={connectFlow}
            loading={loading}
            disabled={loading}
          >
            <FlowIcon className="text-gray-500" />
            Connect Flow Node to Import to Google Sheets
          </Button>
        </div>
      )}
      {step === STEPS.EXPORT_SHEET && <ExportSheets />}
    </BlockBase>
  );
}

export default GoogleSheets;
