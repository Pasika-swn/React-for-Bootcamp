import { useState } from "react";

function App() {
  const [accounts, setAccounts] = useState([{ name: "Google", code: "1" }]);
  return (
    <div className="max-w-[400px] m-auto my-2">
      <div className="flex items-center">
        <h1 className="flex-auto text-3xl font-bold text-fuchsia-950">
          Authenticator
        </h1>
        <button className="btn">New</button>
      </div>
      <ul className="flex flex-col m-0 p-0 list-none">
        {/* 2. replace with the `accounts` state */}
        {accounts.map((item) => (
          <li key={item.code} className="border-b py-4">
            {/* 3. replace the hardcoded value with the account name */}
            <div className="text-lg">{item.name}</div>
            <div className="text-xl text-violet-700 font-medium">181 951</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
