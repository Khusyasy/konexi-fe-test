import { ReactComponent as Logo } from '../assets/google-sheets-logo.svg';

function GoogleSheetsLogo() {
  return (
    <div className="w-16 h-16 bg-[#e7f6f1] rounded-lg flex items-center justify-center flex-shrink-0">
      <Logo className="h-8" />
    </div>
  );
}

export default GoogleSheetsLogo;
