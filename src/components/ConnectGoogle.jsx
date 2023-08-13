import { useState } from 'react';
import GoogleLogo from '../icons/GoogleLogo';
import Button from './Button';

function ConnectGoogle({ done }) {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    // mock api call stuff
    setTimeout(() => {
      setLoading(false);
      done();
    }, 3 * 1000);
  }

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
      <Button onClick={handleClick} loading={loading}>
        Connect
      </Button>
    </div>
  );
}

export default ConnectGoogle;
