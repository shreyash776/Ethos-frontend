import { ArrowRightIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
const scriptURL = import.meta.env.VITE_APP_SCRIPT_URL;

// Deployment Id : AKfycbzww5VS6dYDlSF6aIo9vtRP0jedXLvCjmIdkhFQLtSpQoINns4-SU6PAhVxW8nXg1oe
// https://script.google.com/macros/s/AKfycbzww5VS6dYDlSF6aIo9vtRP0jedXLvCjmIdkhFQLtSpQoINns4-SU6PAhVxW8nXg1oe/exec

const JoinWaitlistForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        console.log(scriptURL);

        // Simulating an API call
        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            setSubmitMessage('Thank you for joining our waitlist!');
            setFormData({ name: '', email: '' });
        } catch (error) {
            setSubmitMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">


            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Join the PixelFace Waitlist
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Be the first to experience our revolutionary face reconstruction technology
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md px-2 py-2 border"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md px-2 py-2 border"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    'Submitting...'
                                ) : (
                                    <>
                                        Join Waitlist
                                        <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {submitMessage && (
                        <div className={`mt-4 text-sm ${submitMessage.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
                            {submitMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JoinWaitlistForm;

