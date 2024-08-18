import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-10 lg:py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">OUR STORY</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quo
            commodi esse ab nihil laudantium veniam voluptatem iure sequi neque,
            illum quos ipsam ratione aut fugit sapiente quam quidem consequatur.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">USEFUL LINKS</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Track Your Order
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">CONTACT US</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@nomi.pk" className="hover:underline">
              info@email.pk
            </a>
          </p>
          <p>Phone: +92 315 999999999</p>
          <p>Phone: +92 315 999999999</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaPinterest size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>Nomi.pk @ 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
