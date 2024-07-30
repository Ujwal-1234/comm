import React from 'react';

const Modal = ({ show, onClose, billData }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-white p-5 rounded shadow-lg w-11/12 max-w-2xl max-h-full overflow-auto">
        <h2 className="text-2xl mb-4">Bill Details</h2>
        <div className="space-y-2">
          <p><strong>Bill Number:</strong> {billData.billNumber}</p>
          <p><strong>Consumer Name:</strong> {billData.consumerName}</p>
          <p><strong>Bill Date:</strong> {billData.billDate}</p>
          <p><strong>Amount:</strong> {billData.amount}</p>
          <p><strong>Consumer Number:</strong> {billData.consumerNumber}</p>
          <p><strong>Status:</strong> {billData.status}</p>
          <p><strong>Energy Consumption (kWh):</strong> {billData.energyConsumption}</p>
          <p><strong>Reading Date:</strong> {billData.readingDate}</p>
          <p><strong>Previous Units:</strong> {billData.previousUnits}</p>
          <p><strong>Payment Status:</strong> {billData.paymentStatus}</p>
          <p><strong>Outstanding:</strong> {billData.outstanding}</p>
          <p><strong>Time:</strong> {billData.time}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
