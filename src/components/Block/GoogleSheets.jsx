import BlockBase from './BlockBase';

import GoogleSheetsLogo from '../../icons/GoogleSheetsLogo';
import ConnectGoogle from '../ConnectGoogle';
import { useState } from 'react';

const STEPS = {
  CONNECT_GOOGLE: 0,
  CONNECT_FLOW: 1,
  EXPORT_SHEET: 2,
};

function GoogleSheets() {
  const [step, setStep] = useState(STEPS.CONNECT_GOOGLE);

  function connectGoogleDone() {
    setStep(STEPS.CONNECT_FLOW);
  }

  return (
    <BlockBase icon={<GoogleSheetsLogo />} title="Export to Google Sheets">
      {step === STEPS.CONNECT_GOOGLE && (
        <ConnectGoogle done={connectGoogleDone} />
      )}
      {step === STEPS.CONNECT_FLOW && <div>Connect Flow</div>}
      {step === STEPS.EXPORT_SHEET && <div>Export Sheet</div>}
    </BlockBase>
  );
}

export default GoogleSheets;
