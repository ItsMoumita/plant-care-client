import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    const validatePassword = (pwd) => {
        return /[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && pwd.length >= 6;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if (!validatePassword(password)) {
            setError("Password must contain uppercase, lowercase, and be at least 6 characters long.");
            return;
        }
        setLoading(true);
        // Dummy registration logic
        setTimeout(() => {
            setLoading(false);
            // navigate("/");
            alert("Registration successful! (Demo)");
        }, 1200);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-[#f6fff9] py-10">
            <form
                onSubmit={handleSubmit}
                className="bg-[#06402B] rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6"
            >
                <h2 className="text-2xl font-bold text-white text-center mb-2">Register for PlantCare</h2>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-white font-medium">Name</label>
                    <input
                        id="name"
                        type="text"
                        className="rounded px-3 py-2 bg-[#e6ffe6] text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        autoComplete="name"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white font-medium">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="rounded px-3 py-2 bg-[#e6ffe6] text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="photoURL" className="text-white font-medium">Photo URL</label>
                    <input
                        id="photoURL"
                        type="url"
                        className="rounded px-3 py-2 bg-[#e6ffe6] text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
                        value={photoURL}
                        onChange={e => setPhotoURL(e.target.value)}
                        required
                        autoComplete="photo"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-white font-medium">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="rounded px-3 py-2 bg-[#e6ffe6] text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        autoComplete="new-password"
                    />
                </div>
                {error && <div className="text-red-300 text-sm text-center">{error}</div>}
                <button
                    type="submit"
                    className="bg-[#1a5c3a] text-white font-semibold py-2 rounded hover:bg-[#0d3c29] transition-colors disabled:opacity-60"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>
                <div className="text-center text-[#b6ffb6] mt-2">
                    Already have an account? <a href="/login" className="underline hover:text-white">Login</a>
                </div>
            </form>
        </div>
    );
};

export default Register;