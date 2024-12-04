"use client"
import { useState } from 'react';
import Image from 'next/image';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleLogin = () => {
        // Implement Google login functionality
        console.log('Logging in with Google...');
    };

    const handleEmailLogin = () => {
        // Implement email/password login functionality
        console.log('Logging in with email and password...');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-green-500">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <Image src="/worklify-logo.svg" alt="Worklify" width={128} height={128} />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-center">Simplify your day, one task at a time!</h2>
                <p className="text-gray-600 mb-6 text-center">Log in to connect with your next helper</p>
                <button
                    className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md mb-4"
                    onClick={handleGoogleLogin}
                >
                    <Image src="/google-icon.svg" alt="Google" width={24} height={24} className="mr-2" />
                    Log in with Google
                </button>
                <div className="flex items-center justify-center mb-4">
                    <span className="border-b border-gray-300 flex-grow mr-2"></span>
                    <span className="text-gray-500">or</span>
                    <span className="border-b border-gray-300 flex-grow ml-2"></span>
                </div>
                <form onSubmit={handleEmailLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 p-2 rounded-md mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 p-2 rounded-md mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;