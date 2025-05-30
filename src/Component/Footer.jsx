
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';


const Footer = () => {
  return (
    <footer className="bg-[#0d3c29]/80 dark:bg-[#0d3c29] text-[#e6ffe6] pt-10 pb-0 border-t border-[#1a5c3a]">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-0 md:gap-0">
        {/* Left: Brand & Contact */}
        <div className="md:w-1/3 w-full px-4 pb-8 md:pb-0 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-[#1a5c3a]">
          <div className="flex items-center gap-3 mt-2">
            <img src="https://png.pngtree.com/png-vector/20230518/ourmid/pngtree-green-plant-logo-vector-png-image_7101352.png" className="w-16 h-16" alt="PlantCare Logo" />
            <div>
              <span className="text-[#b6ffb6] text-2xl font-serif font-bold">PlantCare</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-[#e6ffe6] text-sm mt-2">
            <div className="flex items-center gap-2">
              <span className="material-icons text-[#b6ffb6] text-base">email</span>
              <a href="mailto:greenola.care@email.com" className="hover:underline text-[#b6ffb6]">plant.care@email.com</a>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 px-4 py-6 md:py-0">
            <div className="text-[#b6ffb6] text-lg font-semibold mb-3">Our Services</div>
            <div className="flex flex-col gap-2">
                
              <Link>Garden Care        </Link>
              <Link>Landscape Design   </Link>
              <Link>Commercial Planting</Link>
              <Link>Seed Harvesting    </Link>
              <Link>Lawn Maintenance   </Link>
              <Link>Rooftop Gardening  </Link>
    
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 py-6 md:py-0">
            <div className="text-[#b6ffb6] text-lg font-semibold mb-3">Links</div>
             <div className="flex flex-col gap-2">
            
              <Link to="/" className="hover:underline">Home </Link>
              <Link to="all-plants" className="hover:underline">All Plants </Link>
              <Link to="add-plant" className="hover:underline">Add Plant </Link>
              <Link to="my-plants" className="hover:underline">  My Plants </Link>
           
             </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#1a5c3a] mt-6 flex flex-col md:flex-row items-center justify-between px-4 py-4 w-full max-w-7xl mx-auto">
        <div className="text-[#e6ffe6] text-sm text-center md:text-left">
          Copyright &copy; {new Date().getFullYear()} <span className="text-[#b6ffb6] font-semibold">PlantCare</span> | All Right Reserved
        </div>
        <div className="flex gap-2 mt-3 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-[#1a5c3a] hover:bg-[#b6ffb6] hover:text-[#0d3c29] p-2 rounded transition-colors" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-[#1a5c3a] hover:bg-[#b6ffb6] hover:text-[#0d3c29] p-2 rounded transition-colors" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-[#1a5c3a] hover:bg-[#b6ffb6] hover:text-[#0d3c29] p-2 rounded transition-colors" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="bg-[#1a5c3a] hover:bg-[#b6ffb6] hover:text-[#0d3c29] p-2 rounded transition-colors" aria-label="Pinterest">
            <FaPinterestP />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="bg-[#1a5c3a] hover:bg-[#b6ffb6] hover:text-[#0d3c29] p-2 rounded transition-colors" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
      {/* Material Icons CDN for icons */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </footer>
  );
};

export default Footer;