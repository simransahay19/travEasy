import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
             <h1 className="text-3xl font-bold mb-4" style={{ color: 'seagreen' }}>Send Us a Message!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Your Name</label>
                            <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Your Email</label>
                            <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
                            <textarea id="message" name="message" rows={5} className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Send Message</button>
                    </form>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                    <p className="mb-2"><span className="font-semibold">Email:</span> travEasy@gmail.com</p>
                    <p className="mb-2"><span className="font-semibold">Phone:</span> 9617359178</p>
                    <p className="mb-2"><span className="font-semibold">Address:</span> 123 Main Street, Ranchi, Jharkhand</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
