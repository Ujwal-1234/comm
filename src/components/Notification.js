// Notification.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineExclamationCircle } from 'react-icons/ai';

// Sample data to simulate server response
const dummyNotifications = [
    {
        id: 1,
        type: 'info',
        message: 'Your order has been shipped!',
        link: '/orders',
    },
    {
        id: 2,
        type: 'warning',
        message: 'Your subscription is about to expire.',
        link: '/subscription',
    },
    {
        id: 3,
        type: 'success',
        message: 'You have a new message.',
        link: '/messages',
    },
    {
        id: 4,
        type: 'error',
        message: 'Failed to update your profile.',
        link: '/profile',
    }
];

export default function Notification() {
    return (
        <div className="bg-[#05363D] text-slate-200 overflow-auto custom-scrollbar p-6 max-h-screen rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <FaBell className="text-2xl text-blue-500 mr-2" />
                <h2 className="text-xl font-bold">Notifications</h2>
            </div>
            <ul>
                {dummyNotifications.map((notification) => (
                    <li key={notification.id} className={`flex w-80 items-center p-3 mb-2 rounded-lg ${getNotificationClass(notification.type)}`}>
                        {getNotificationIcon(notification.type)}
                        <Link to={notification.link} className="ml-3 text-blue-300 hover:text-blue-100">{notification.message}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const getNotificationClass = (type) => {
    switch (type) {
        case 'info':
            return 'border border-white';
        case 'warning':
            return 'bg-yellow-700';
        case 'success':
            return 'bg-green-700';
        case 'error':
            return 'bg-red-700';
        default:
            return '';
    }
};

const getNotificationIcon = (type) => {
    switch (type) {
        case 'info':
            return <AiOutlineCheckCircle className="text-blue-400" />;
        case 'warning':
            return <AiOutlineExclamationCircle className="text-yellow-400" />;
        case 'success':
            return <AiOutlineCheckCircle className="text-green-400" />;
        case 'error':
            return <AiOutlineExclamationCircle className="text-red-400" />;
        default:
            return null;
    }
};
