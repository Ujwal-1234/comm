import React, { useState } from 'react'
import Modal from './Modal';
export default function Bill() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState({});

  const handleBillClick = (bill) => {
    setSelectedBill(bill);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const bills = [
    {
      id: 1,
      consumerName: 'ABCd',
      consumerNumber: '123456789',
      billDate: '00/00/0000',
      billNumber: '123456789',
      status: 'PENDING',
      energyConsumption: '4536',
      readingDate: '00/00/0000',
      previousUnits: '2436',
      amount: '520.02',
      paymentStatus: 'COMPLETED',
      outstanding: '45.80',
      time: '05:52:10'
    },
    {
      id: 1,
      consumerName: 'ABCd',
      consumerNumber: '123456789',
      billDate: '00/00/0000',
      billNumber: '123456789',
      status: 'COMPLETED',
      energyConsumption: '4536',
      readingDate: '00/00/0000',
      previousUnits: '2436',
      amount: '520.02',
      paymentStatus: 'PENDING',
      outstanding: '45.80',
      time: '05:52:10'
    }
    // Add other bills here
  ];

  return (
    <div className='overflow-auto w-full max-h-full'>
      <table className="table-auto w-full">
        <thead className=' sticky top-0 bg-slate-400'>
          <tr>
            <th className='p-2 text-center '>Sr. No.</th>
            <th className='p-2 text-center '>Consumer Name</th>
            <th className='p-2 text-center '>Consumer Number</th>
            <th className='p-2 text-center'>Bill Date</th>
            <th className='p-2 text-center'>Bill Number</th>
            <th className='p-2 text-center'>Status</th>
            <th className='p-2 text-center'>Energy Consumption (kWh)</th>
            <th className='p-2 text-center '>Reading Date</th>
            <th className='p-2 text-center '>Previous Units</th>
            <th className='p-2 text-center '>Amount (INR)</th>
            <th className='p-2 text-center '>Payment Status</th>
            <th className='p-2 text-center '>Outstanding</th>
            <th className='p-2 text-center '>Time</th>
          </tr>
        </thead>
        <tbody>
        {bills.map((bill, index) => (
            <tr key={bill.id} onClick={() => handleBillClick(bill)} className="cursor-pointer">
              <td className='p-2 text-center'>{index + 1}</td>
              <td className='p-2 text-center'>{bill.consumerName}</td>
              <td className='p-2 text-center'>{bill.consumerNumber}</td>
              <td className='p-2 text-center'>{bill.billDate}</td>
              <td className='p-2 text-center'>{bill.billNumber}</td>
              <td className={` p-2 text-center  text-white font-semibold`}><span className={`${bill.status === 'COMPLETED' ? 'bg-green-500' : ' bg-red-500'} p-2 rounded-lg`}>{bill.status}</span></td>
              <td className='p-2 text-center'>{bill.energyConsumption}</td>
              <td className='p-2 text-center'>{bill.readingDate}</td>
              <td className='p-2 text-center'>{bill.previousUnits}</td>
              <td className='p-2 text-center'>{bill.amount}</td>
              <td className={`p-2 text-center  text-white font-semibold rounded-lg`}><span className={`${bill.paymentStatus === 'COMPLETED' ? 'bg-green-500' : 'bg-red-500'} p-2 rounded-lg`}>{bill.paymentStatus}</span></td>
              <td className='p-2 text-center'>{bill.outstanding}</td>
              <td className='p-2 text-center'>{bill.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onClose={closeModal} billData={selectedBill} />
    </div>
  );
}