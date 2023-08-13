import { ReactComponent as Logo } from '../assets/google-logo.svg';

function GoogleLogo() {
  return (
    <div className="w-[72px] h-[72px] bg-gray-100 rounded-full flex items-center justify-center">
      <Logo className="h-8" />
    </div>
  );
}

export default GoogleLogo;
