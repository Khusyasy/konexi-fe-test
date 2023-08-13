import BlockBase from './BlockBase';

import GoogleSheetsLogo from '../../icons/GoogleSheetsLogo';
import ConnectGoogle from '../ConnectGoogle';

function GoogleSheets() {
  return (
    <BlockBase icon={<GoogleSheetsLogo />} title="Export to Google Sheets">
      <ConnectGoogle />
    </BlockBase>
  );
}

export default GoogleSheets;
