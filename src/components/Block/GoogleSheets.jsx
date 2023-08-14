import { useState } from 'react';

import BlockBase from './BlockBase';
import ConnectGoogle from '../ConnectGoogle';

import Button from '../Button';

import GoogleSheetsLogo from '../../icons/GoogleSheetsLogo';
import FlowIcon from '../../icons/FlowIcon';

const STEPS = {
  CONNECT_GOOGLE: 0,
  CONNECT_FLOW: 1,
  EXPORT_SHEET: 2,
};

function GoogleSheets() {
  // const [step, setStep] = useState(STEPS.CONNECT_GOOGLE);
  const [step, setStep] = useState(STEPS.CONNECT_FLOW);
  const [loading, setLoading] = useState(false);

  function connectGoogleDone() {
    setStep(STEPS.CONNECT_FLOW);
  }

  function connectFlow() {
    setLoading(true);
    setTimeout(() => {
      // mock api call stuff
      setLoading(false);
      setStep(STEPS.EXPORT_SHEET);
    }, 3 * 1000);
  }

  return (
    <BlockBase icon={<GoogleSheetsLogo />} title="Export to Google Sheets">
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
          >
            <FlowIcon className="text-gray-500" />
            Connect Flow Node to Import to Google Sheets
          </Button>
        </div>
      )}
      {step === STEPS.EXPORT_SHEET && <div>Export Sheet</div>}
    </BlockBase>
  );
}

export default GoogleSheets;
