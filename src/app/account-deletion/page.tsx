'use client';
import { useState } from "react";

export default function AccountDeletionForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Your account deletion request has been submitted. Our team will contact you soon.");
  };

  return (
    <div className="max-w-lg mx-auto mt-16 p-8 bg-white shadow-2xl rounded-xl border border-gray-300">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Request Account Deletion</h2>
      <p className="text-gray-600 text-center mb-8">Enter your registered phone number below to request account deletion. Our support team will reach out to confirm your request.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <input 
              type="tel" 
              className="w-full px-4 py-3 outline-none focus:ring-0" 
              placeholder="Enter your phone number" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
              required 
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition shadow-md">
          Submit Request
        </button>
      </form>
      
      {message && <p className="mt-6 text-green-600 text-center font-medium">{message}</p>}
    </div>
  );
}
