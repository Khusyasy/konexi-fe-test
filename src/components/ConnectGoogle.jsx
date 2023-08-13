import GoogleLogo from '../icons/GoogleLogo';

function ConnectGoogle() {
  return (
    <div className="flex flex-row px-4 py-8 gap-6">
      <GoogleLogo />
      <div className="flex flex-col w-full justify-center gap-4">
        <h2 className="font-bold text-xl/[1]">Connect Google Account</h2>
        <p className="font-semibold text-gray-500 text-base/[1]">
          Please connect Google Account to use this block
        </p>
      </div>
    </div>
  );
}

export default ConnectGoogle;
