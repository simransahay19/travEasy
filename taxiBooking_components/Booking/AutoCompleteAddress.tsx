import React from 'react';

function AutoCompleteAddress() {
  return (
    <div className="mt-5 space-y-3">
      <div>
        <label htmlFor="fromAddress" className="block text-gray-400">Where From?</label>
        <input
          type="text"
          id="fromAddress"
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
          placeholder="Enter starting address"
        />
        <br></br>
        <br></br>
      </div>

      <div>
        <label htmlFor="toAddress" className="block text-gray-400">Where To?</label>
        <input
          type="text"
          id="toAddress"
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
          placeholder="Enter destination address"
        />
      </div>
    </div>

  );
}

export default AutoCompleteAddress;
