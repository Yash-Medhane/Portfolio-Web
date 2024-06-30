import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/send', formData); // replace 'your_backend_endpoint' with your actual backend endpoint
            console.log('SUCCESS!', response.status, response.data);
            alert('Message sent successfully!');
        } catch (error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <div id='contact' className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-200 min-h-screen p-6 md:p-12">
            <div className="container flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
                <div className="contact-image flex-1 flex justify-between items-center mb-8 md:mb-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.3876159836377!2d73.81968647500271!3d20.01359138139366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebab15555555%3A0xdb01367e9d5cf969!2sKKWIEER!5e1!3m2!1sen!2sin!4v1719718570433!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="map"
                    ></iframe>
                </div>

                <div className="contact-form flex-1 bg-gray-800 dark:bg-gray-700 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                    <header className="contact-form-header mb-8 text-center">
                        <h1 className="text-3xl font-bold text-teal-400 dark:text-coral-400">Contact Me</h1>
                    </header>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <label className="flex flex-col">
                            <span className="text-lg font-semibold">Name:</span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-2 p-3 bg-gray-900 dark:bg-gray-600 border border-gray-700 dark:border-gray-500 rounded-lg focus:outline-none focus:border-teal-500 dark:focus:border-coral-400"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-lg font-semibold">Email:</span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-2 p-3 bg-gray-900 dark:bg-gray-600 border border-gray-700 dark:border-gray-500 rounded-lg focus:outline-none focus:border-teal-500 dark:focus:border-coral-400"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-lg font-semibold">Message:</span>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-2 p-3 bg-gray-900 dark:bg-gray-600 border border-gray-700 dark:border-gray-500 rounded-lg focus:outline-none focus:border-teal-500 dark:focus:border-coral-400"
                            />
                        </label>
                        <button
                            type="submit"
                            className="py-3 px-6 text-lg bg-teal-500 dark:bg-coral-400 text-white rounded-lg hover:bg-teal-400 dark:hover:bg-coral-300 transition-colors duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
