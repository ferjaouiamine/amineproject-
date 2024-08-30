import React from 'react';
import { FiLogOut, FiSettings, FiUsers, FiHome } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">Dashboard</div>
      <nav>
        <ul className="flex space-x-4">
          <li className="flex items-center space-x-2">
            <FiHome className="text-blue-500 text-lg" />
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          </li>
          <li className="flex items-center space-x-2">
            <FiUsers className="text-blue-500 text-lg" />
            <a href="/users" className="text-gray-700 hover:text-blue-600">Users</a>
          </li>
          <li className="flex items-center space-x-2">
            <FiSettings className="text-blue-500 text-lg" />
            <a href="/settings" className="text-gray-700 hover:text-blue-600">Settings</a>
          </li>
        </ul>
      </nav>
      <button className="text-white bg-red-500 px-4 py-2 rounded flex items-center space-x-2 hover:bg-red-600">
        <FiLogOut className="text-lg" />
        <span>Logout</span>
      </button>
    </header>
  );
};

export default Header;
