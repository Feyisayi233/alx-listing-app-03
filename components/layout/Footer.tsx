import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-8 text-center text-gray-600 text-sm">
      <div>
        &copy; {new Date().getFullYear()} ListingApp. All rights reserved.
      </div>
      <div className="mt-2">
        <a href="#" className="mx-2 hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="mx-2 hover:underline">
          Terms of Service
        </a>
        <a href="#" className="mx-2 hover:underline">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
