import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase = "text-white hover:underline transition";
  const activeLink = "underline decoration-white";
//   const navColor = "rgba(6,64,43,1)";

  return (
     <div className={`top-0 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent" : "bg-[rgba(6,64,43,0.7)]"
      }`}>
         <nav
      className={` w-11/12 mx-auto`}
    >
      <div className=" mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
         <div className="flex items-center justify-center gap-2">
             <img src="https://png.pngtree.com/png-vector/20230518/ourmid/pngtree-green-plant-logo-vector-png-image_7101352.png" className="w-14 h-14" alt="" />
           <div className="text-white text-xl font-bold">PlantApp</div>
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
        <div className="hidden lg:flex gap-3">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-4 py-1 rounded-md font-medium transition ${
                isActive ? "underline decoration-white" : ""
              } bg-[#b6ffb6] text-[rgba(6,64,43,1)] hover:bg-[rgba(6,64,43,1)] hover:text-[#b6ffb6]  hover:rounded-full cursor-pointer`
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
          {["/login", "/register"].map((path, i) => {
            const labels = ["Login", "Register"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `block text-center px-4 py-2 rounded-md font-medium transition ${
                    isActive ? "underline decoration-white" : ""
                  } bg-white text-[rgba(6,64,43,1)] hover:bg-[rgba(6,64,43,1)] hover:text-white hover:border hover:border-white hover:rounded-full cursor-pointer`
                }
                onClick={() => setIsOpen(false)}
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
     </div>
  );
}
