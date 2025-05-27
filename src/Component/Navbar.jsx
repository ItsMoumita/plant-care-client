import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider"; // adjust path if needed
import { toast } from "react-toastify";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logOut} = useContext(AuthContext);
 
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const linkBase = "text-white hover:underline transition";
  const activeLink = "underline decoration-white";

  return (
    <div
      className={`top-0 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[rgba(6,64,43,0.5)]" : "bg-[rgba(6,64,43,0.7)]"
      }`}
    >
      <nav className="w-11/12 mx-auto">
        <div className="mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
           <div className="flex items-center gap-3 mt-2">
            <img src="https://png.pngtree.com/png-vector/20230518/ourmid/pngtree-green-plant-logo-vector-png-image_7101352.png" className="w-14 h-12" alt="PlantCare Logo" />
            <div>
              <span className="text-[#b6ffb6] text-2xl font-serif font-bold">PlantCare</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-center gap-6 text-md">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all-plants"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              All Plants
            </NavLink>
            <NavLink
              to="/add-plant"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              Add Plant
            </NavLink>
            <NavLink
              to="/my-plants"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              My Plants
            </NavLink>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-3 items-center">
            {!user ? (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `px-4 py-1 rounded-md font-medium transition ${
                      isActive ? "underline decoration-white" : ""
                    } bg-[#b6ffb6] text-[rgba(6,64,43,1)] hover:bg-[rgba(6,64,43,1)] hover:text-[#b6ffb6] hover:rounded-full cursor-pointer`
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `px-4 py-1 rounded-md font-medium transition ${
                      isActive ? "underline decoration-white" : ""
                    } bg-[#b6ffb6] text-[rgba(6,64,43,1)] hover:bg-[rgba(6,64,43,1)] hover:text-[#b6ffb6] hover:rounded-full cursor-pointer`
                  }
                >
                  Register
                </NavLink>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 text-white">
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-8 h-8 rounded-full border"
                    title={user.displayName}
                  />
                  <button
                    onClick={handleLogout}
                    className="px-4 py-1 rounded-md font-medium bg-white text-[rgba(6,64,43,1)] hover:bg-[rgba(6,64,43,1)] hover:text-white border hover:border-white transition"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[rgba(6,64,43,0.9)] text-white px-4 pb-4 space-y-3">
            {["/", "/all-plants", "/add-plant", "/my-plants"].map((path, i) => {
              const labels = ["Home", "All Plants", "Add Plant", "My Plants"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `block ${linkBase} ${isActive ? activeLink : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {labels[i]}
                </NavLink>
              );
            })}
            {!user ? (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block text-center px-4 py-2 rounded-md font-medium transition ${
                      isActive ? "underline decoration-white" : ""
                    } bg-white text-[rgba(6,64,43,1)] hover:bg-[rgba(6,64,43,1)] hover:text-white hover:border hover:border-white hover:rounded-full cursor-pointer`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `block text-center px-4 py-2 rounded-md font-medium transition ${
                      isActive ? "underline decoration-white" : ""
                    } bg-white text-[rgba(6,64,43,1)] hover:bg-[rgba(6,64,43,1)] hover:text-white hover:border hover:border-white hover:rounded-full cursor-pointer`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </NavLink>
              </>
            ) : (
              <div className="text-sm text-white space-y-2 mt-4 border-t pt-3">
                <div className="flex items-center gap-2">
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-8 h-8 rounded-full border"
                  />
                  <div>
                    <p className="font-medium">{user.displayName}</p>
                    <p className="text-xs">{user.email}</p>
                  </div>
                </div>
        
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full text-center px-4 py-2 mt-1 rounded-md font-medium transition bg-white text-[rgba(6,64,43,1)] hover:bg-[rgba(6,64,43,1)] hover:text-white border hover:border-white hover:rounded-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}
