import React from 'react';

const SignUpForm = () => {
    return (
        <div
            className="relative mt-10 mb-8 flex flex-col justify-center items-center"
        >
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dj2edy2rg/image/upload/v1735113318/signup_pvdavn.png')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Opacity Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 p-10 rounded-xl text-center">
                <h1 className="lg:text-3xl md:text-6xl text-white font-bold mb-4">
                    Sign up for our newsletter
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                Get the latest news, updates, and offers straight to your inbox
                </p>
                <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-blue-600 transition">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignUpForm;
