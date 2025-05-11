import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-semibold text-xl">
      {/* <div className="fixed inset-0 bg-white/70 z-10"></div> */}
      <div className="mx-[5%] md:mx-[10%] my-[5%] md:my-[10%] flex flex-col items-center justify-center relative z-20 p-8 rounded-lg bg-white/75">
        <p className="text-3xl md:text-5xl text-red-600 font-extrabold mb-6">
          Worthing Churches Debt Centre CIO
        </p>
        <p className="md:text-2xl font-bold py-4">
          Worthing Churches Debt Centre is currently (May 2025) in the process
          of being incorporated as a CIO. It is not yet operational.
        </p>
        <p className="text-sm md:text-lg py-4">
          The Debt Centre will run as a local partner of{' '}
          <a href="https://capuk.org/about-us" target="_blank">
            the national organisation, CAP
          </a>
          , and as a collaboration and joint endeavour between several different
          local churches in Worthing, West Sussex.
        </p>
        <p className="text-sm md:text-lg py-4">
          If you are strugging financially and need help to sort out debts,{' '}
          <a href="https://capuk.org/get-help/cap-debt-help" target="_blank">
            {' '}
            contact CAP here
          </a>
          .
        </p>
        <p className="text-sm md:text-lg py-4">
          You can contact the local team (for example, to discuss supporting the
          CIO with grant funding) at{' '}
          <span className="font-bold font-mono">
            worthing.churches.debt.centre
          </span>{' '}
          @ Google's normal mail service.
        </p>
      </div>
    </div>
  );
}

export default App;
