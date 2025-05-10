import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-[20%] my-[10%] flex flex-col items-center justify-center">
        <h1 className="text-red-500 font-extrabold mb-6">
          Worthing Churches Debt Centre CIO
        </h1>
        <p className="text-xl font-bold py-4">
          Worthing Churches Debt Centre is currently (May 2025) in the process
          of being incorporated as a CIO. It is not yet operational.
        </p>
        <p className="py-4">
          The Debt Centre will run as a local partner of{' '}
          <a href="https://capuk.org/about-us" target="_blank">
            the national organisation, CAP
          </a>
          , and as a collaboration and joint endeavour between several different
          local churches in Worthing, West Sussex.
        </p>
        <p className="py-4">
          If you are strugging financially and need help to sort out debts,{' '}
          <a href="https://capuk.org/get-help/cap-debt-help" target="_blank">
            {' '}
            contact CAP here
          </a>
          .
        </p>
        <p className="py-4">
          You can contact the local team (for example, to discuss supporting the
          CIO with grant funding) at{' '}
          <span className="font-bold font-mono">
            worthing.churches.debt.centre
          </span>{' '}
          @ Google's normal mail service.
        </p>
      </div>
    </>
  );
}

export default App;
