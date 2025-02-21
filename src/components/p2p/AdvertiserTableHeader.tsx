import React from "react";

const AdvertiserTableHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 grid grid-cols-6 gap-4 items-center text-sm font-medium text-gray-500 sticky top-0">
      <div className="col-span-1">Advertiser</div>
      <div className="col-span-1">Rate</div>
      <div className="col-span-2">Limits</div>
      <div className="col-span-1">Available</div>
      <div className="col-span-1">Payment Method</div>
    </div>
  );
};

export default AdvertiserTableHeader;
