"use client"
import React, { useState } from 'react';

export default function Contact() {
    // State to store form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectBrief: '',
    });

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission

        try {
            // Send form data to an API or server
            const response = await fetch('https://formspree.io/f/xovagepg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success (e.g., show a message or clear the form)
                alert('Thank you for reaching out! We will get back to you soon.');
                setFormData({ name: '', email: '', projectBrief: '' }); // Reset the form
            } else {
                // Handle error
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('An error occurred while submitting the form. Please try again.');
        }
    };

    return (
        <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between lg:py-5">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
                                It’s time to build something exciting!
                            </h2>
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
                                Please share your idea so that I can help you further. If you have any query about my skills, you can also ask. And also you can ask for help in any kind problem.
                            </p>
                            <img
                                className="relative z-10 max-w-xs mx-auto -mb-16 md:hidden"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
                                alt=""
                            />
                            <img
                                className="hidden w-full translate-x-24 translate-y-8 md:block"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                                alt=""
                            />
                        </div>
                        <div className="hidden md:mt-auto md:block">
                            {/* Client Review */}
                            <div className="text-white p-1 font-bold text-4xl">
                                Client Review
                            </div>
                            <div className="flex items-center">
                                {/* Star Ratings */}
                                {[...Array(4)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className="w-6 h-6 text-yellow-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <svg
                                    className="w-6 h-6 text-yellow-600/20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <blockquote className="mt-6">
                                <p className="text-lg leading-relaxed text-white">
                                    You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                                </p>
                            </blockquote>
                            <div className="flex items-center mt-8">
                                <img
                                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                                    alt=""
                                />
                                <div className="ml-4">
                                    <p className="text-base font-semibold text-white">Jenny Wilson</p>
                                    <p className="mt-px text-sm text-gray-400">Product Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:pl-12">
                        <div className="overflow-hidden bg-white rounded-md">
                            <div className="p-6 sm:p-10">
                                <h3 className="text-3xl font-semibold text-black">Get a free Help</h3>
                                <p className="mt-4 text-base text-gray-600">
                                    You can share your idea with me and get help from me here.
                                </p>
                                {/* Form */}
                                <form onSubmit={handleSubmit} className="mt-4">
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="text-base font-medium text-gray-900">
                                                Your name
                                            </label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter your full name"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="text-base font-medium text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter your email address"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="projectBrief" className="text-base font-medium text-gray-900">
                                                Project brief
                                            </label>
                                            <div className="mt-2.5 relative">
                                                <textarea
                                                    name="projectBrief"
                                                    value={formData.projectBrief}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter your project brief"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                                                    rows={4}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600"
                                            >
                                                Get Free Help
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
