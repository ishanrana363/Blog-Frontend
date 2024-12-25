import React, { useState } from 'react';
import contactImage from '../../assets/blogs/contact-animation.gif';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="lg:text-4xl font-bold text-center mt-14">Get In Touch</h1>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-10">
                {/* Image Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <img src={contactImage} alt="Contact Animation" className="mx-auto lg:mx-0" />
                    <h1 className="font-bold text-3xl mt-6">Contact Information</h1>
                    <p className="my-4">
                        Feel free to reach out to us through the form or the contact information below:
                    </p>
                    <p>
                        <span className="text-[18px] font-bold">Email:</span> info@example.com
                    </p>
                    <p className="my-4">
                        <span className="text-[18px] font-bold">Phone:</span> +1 (123) 456-7890
                    </p>
                    <p>
                        <span className="text-[18px] font-bold">Address:</span> 1234 Street Name, City, Country
                    </p>
                </div>

                {/* Form Section */}
                <div className="lg:w-1/2 bg-white shadow-lg border rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                                rows="4"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full px-6 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
