import GoogleLogo from '../icons/GoogleLogo';
import Button from './Button';

function ConnectGoogle() {
  return (
    <div className="p-12 pb-2">
      <div className="flex flex-row gap-6 mb-6">
        <GoogleLogo />
        <div className="flex flex-col w-full justify-center gap-4">
          <h2 className="font-bold text-xl/[1]">Connect Google Account</h2>
          <p className="font-semibold text-gray-500 text-base/[1]">
            Please connect Google Account to use this block
          </p>
        </div>
      </div>
      <Button>Connect</Button>
    </div>
  );
}

export default ConnectGoogle;
