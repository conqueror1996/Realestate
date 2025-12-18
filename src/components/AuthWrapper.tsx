import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

interface AuthWrapperProps {
    children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Check if already authenticated (stored in sessionStorage)
    useEffect(() => {
        const authToken = sessionStorage.getItem('admin_auth');
        if (authToken === 'authenticated') {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Change this password to your desired admin password
        const ADMIN_PASSWORD = 'admin@2025'; // ⚠️ CHANGE THIS!

        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            sessionStorage.setItem('admin_auth', 'authenticated');
            setError('');
        } else {
            setError('Incorrect password. Please try again.');
            setPassword('');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('admin_auth');
        setPassword('');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-gray-600">Loading...</div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A71B7] rounded-full mb-4">
                            <Lock className="text-white" size={32} />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">Admin Access</h1>
                        <p className="text-gray-600 mt-2">Enter password to continue</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A71B7] focus:border-transparent outline-none transition-all"
                                placeholder="Enter admin password"
                                autoFocus
                                required
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-[#1A71B7] text-white py-3 rounded-lg font-semibold hover:bg-[#155a93] transition-colors shadow-lg"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-center text-xs text-gray-500">
                        <p>Protected Admin Panel</p>
                        <p className="mt-1">Session expires when browser closes</p>
                    </div>
                </div>
            </div>
        );
    }

    // Render children with logout button
    return (
        <div className="relative">
            {/* Logout button */}
            <button
                onClick={handleLogout}
                className="fixed top-4 right-4 z-50 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-lg flex items-center gap-2"
            >
                <Lock size={16} />
                Logout
            </button>
            {children}
        </div>
    );
};

export default AuthWrapper;
