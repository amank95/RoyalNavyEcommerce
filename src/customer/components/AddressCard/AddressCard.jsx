import React from "react";

const AddressCard = ({address}) => {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">
          {`${address?.firstName} ${address?.lastName}`}
        {/* AMAN KANOJIYA */}
        </p>

        <p>
          {`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`}
        {/* Shree samarth welfare society ,Rathodi village MarveRD */}
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>
          {/* 9874563210 */}
            {address?.mobile}
            </p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
