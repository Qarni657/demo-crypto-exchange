import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ name: 'Qarni', balance: 1000, holdings: { BTC: 0.01, ETH: 0.5 } });
  };

  return (
    <div className="p-4 text-center">
      {!user ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Login to Crypto Exchange</h1>
          <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-2">Welcome, {user.name}</h2>
          <p>Balance: ${user.balance}</p>
          <div className="mt-4">
            <h3 className="font-bold">Holdings:</h3>
            <ul>
              <li>BTC: {user.holdings.BTC}</li>
              <li>ETH: {user.holdings.ETH}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}