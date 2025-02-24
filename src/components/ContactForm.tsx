import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const email = "sujayvk.btech23@rvu.edu.in";
  const subject = encodeURIComponent(formData.subject);
  const body = encodeURIComponent(formData.message);
  
  // Correct the Gmail link with backticks
  const gmailLink = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=${subject}&to=${email}&body=${body}`;
  
  // Open the Gmail link
  window.location.href = gmailLink;
  setConfirmationMessage('Your email client has been opened. Please send your message.');
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-indigo-600 mt-1 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">sujayvk.btech23@rvu.edu.in</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-indigo-600 mt-1 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">+91 93801 42763</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-indigo-600 mt-1 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                <p className="text-gray-600">RV University </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
          {confirmationMessage && <p className="text-green-500 mt-4">{confirmationMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;