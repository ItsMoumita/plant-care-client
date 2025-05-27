import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
// import { getAuth, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { createUser, googleSignIn, setUser, updateUser } = useContext(AuthContext);
 
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    // const validatePassword = (pwd) => {
    //     if (!/[A-Z]/.test(pwd)) return "Must include an uppercase letter.";
    //     if (!/[a-z]/.test(pwd)) return "Must include a lowercase letter.";
    //     if (pwd.length < 6) return "Must be at least 6 characters.";
    //     return "";
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const validationError = validatePassword(password);
    //     if (validationError) {
    //         setError(validationError);
    //         return;
    //     }

    //     setError("");
    //     setLoading(true);
    //     try {
    //         const userCredential = await createUser(email, password);
    //         // Update profile with name and photoURL
    //         const auth = getAuth();
    //         await updateProfile(auth.currentUser, {
    //             displayName: name,
    //             photoURL: photoURL,
    //         });
    //         toast.success("Registration successful!");
    //         navigate("/");
    //     } catch (err) {
    //         setError(err.message || "Registration failed.");
    //         toast.error(err.message || "Registration failed.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

//     const handleSubmit = async (e) => {
//   e.preventDefault();
//   const validationError = validatePassword(password);
//   if (validationError) {
//     setError(validationError);
//     return;
//   }

//   setError("");
//   setLoading(true);
//   try {
//     const userCredential = await createUser(email, password, name, photoURL);
//     toast.success("Registration successful!");
//     navigate("/");
//   } catch (err) {
//     setError(err.message || "Registration failed.");
//     toast.error(err.message || "Registration failed.");
//   } finally {
//     setLoading(false);
//   }
// };


const handleSubmit= async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photoURL.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Password must have 6+ characters, with at least one uppercase and one lowercase letter.");
      return;
    } else {
      setPasswordError("");
    }

    try {
      const result = await createUser(email, password);
      await updateUser({ displayName: name, photoURL: photo });
      setUser({ ...result.user, displayName: name, photoURL: photo });
      Swal.fire({
  title: "Success!",
  text: "Registered successfully!",
  icon: "success",
  background: "#FFFBDE",
  color: "#096B68",
  confirmButtonColor: "#129990",
});

      navigate("/");
    } catch (error) {
      Swal.fire({
  title: "Error!",
  text: error.message,
  icon: "error",
  background: "#FFFBDE",
  color: "#096B68",
  confirmButtonColor: "#129990",
});

    }
  };



    const handleGoogleLogin = async () => {
        setError("");
        try {
            await googleSignIn();
            toast.success("Logged in with Google!");
            navigate("/");
        } catch (err) {
            setError(err.message || "Google login failed.");
            toast.error(err.message || "Google login failed.");
        }
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
                {
                    nameError && <div className="text-red-300 text-sm">{nameError}</div>
                }
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
                {passwordError && <div className="text-red-300 text-sm">{passwordError}</div>}
                {error && <div className="text-red-300 text-sm text-center">{error}</div>}

                <button
                    type="submit"
                    className="bg-[#1a5c3a] text-white font-semibold py-2 rounded hover:bg-[#0d3c29] transition-colors disabled:opacity-60"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>

                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="bg-white text-[#06402B] font-semibold py-2 rounded hover:bg-[#e0f5eb] border border-[#1a5c3a] transition-colors"
                >
                    Register with Google
                </button>

                <div className="text-center text-[#b6ffb6] mt-2">
                    Already have an account? <Link to="/login" className="underline hover:text-white">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
