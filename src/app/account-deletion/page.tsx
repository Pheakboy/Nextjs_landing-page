'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import FooterComponent from '@/components/footer/FooterCompoent';

export default function AccountDeletionForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleDeleteAccount = () => {
    if (phoneNumber.trim() === '') {
      setError('Phone number is required.');
      setSuccess('');
      return;
    }
    
    if (phoneNumber.length < 8 || phoneNumber.length > 10 || isNaN(Number(phoneNumber))) {
      setError('Invalid phone number. Must be 8-10 digits.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Account deleted successfully.');
    console.log('Phone Number:', phoneNumber);
    
    setPhoneNumber('');
  };

  return (
    <div className="max-w-3xl mx-auto py-5 text-gray-700">
      <header className="w-full py-4 flex justify-center relative">
        <Link href="/">
          <Image
            src="/image/instaFood_logo.jpg"
            alt="InstaFoodKH Logo"
            width={124}
            height={124}
          />
        </Link>
      </header>

      <div className="p-6 w-full">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Manage your account
        </h2>

        <p className="text-gray-700 mb-4">Deleting your account will:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Delete your account info and profile photo</li>
          <li>Delete your order history</li>
          <li>Delete your delivery addresses</li>
        </ul>

        <p className="font-semibold text-gray-800">
          Enter your phone number to confirm you want to delete your account.
        </p>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Phone number</label>
          <div className="flex items-center border max-w-sm p-3 mt-1 rounded-lg bg-gray-100">
            <span className="text-gray-700 font-semibold mr-4">+855</span>
            <input
              type="text"
              placeholder="Your phone number"
              className="bg-transparent outline-none w-full text-gray-900"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
          {success && <p className="text-green-600 text-sm mt-1">{success}</p>}
        </div>

        <button
          className="mt-6 bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700"
          onClick={handleDeleteAccount}
        >
          Delete My Account
        </button>
      </div>
      <FooterComponent />
    </div>
  );
}
