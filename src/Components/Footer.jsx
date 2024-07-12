import React from "react";
import logo from "/logo.png";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-8 px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:ml-[114px]">
          <div className="flex flex-col items-center lg:items-start">
            <img src={logo} alt="Logo" className="w-[200px] lg:w-[244px]" />
            <div className="lg:ml-10 mt-4 lg:mt-0">
              <p className="font-bold text-[#143d50d0]">GLOBAL HQ</p>
              <p className="w-full lg:w-[254px] text-[14px] font-[500]">
                6330 South 3000 East Suite 700 Salt Lake City, UT 84121 USA
              </p>
              <div className="mt-4 lg:mt-10 font-semibold text-red-600">
                <p className="flex items-center gap-2 lg:gap-4">
                  CONTACT US <FaArrowRight />
                </p>
                <p className="mt-2 lg:mt-4 flex items-center gap-2 lg:gap-4">
                  800-203-6755 <FaArrowRight />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <h4 className="text-[14px] font-[700] mb-4">
              INSTRUCTURE LEARNING PLATFORM
            </h4>
            <div className="space-y-2">
              <p>Canvas LMS</p>
              <p>Canvas Studio</p>
              <p>Canvas Catalog</p>
              <p>Assessment</p>
              <p>Impact</p>
              <p>LearnPlatform</p>
              <p>Services</p>
              <p>Leadership Development</p>
              <p>All Products</p>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <h4 className="text-[14px] font-[700] mb-4">RESOURCES</h4>
            <div className="space-y-2">
              <p>Articles</p>
              <p>Research</p>
              <p>Infographics</p>
              <p>Guides & e-Books</p>
              <p>Webinars</p>
              <p>Videos</p>
              <p>Case Studies</p>
              <p>CENTERS</p>
              <p>The Study Hall</p>
              <p>Our Community</p>
              <p>Canvas Network</p>
              <p>Integrations</p>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <h4 className="text-[14px] font-[700] mb-4">EVENTS</h4>
            <div className="space-y-2">
              <p>News & Events</p>
              <p>Webinars</p>
              <p>Media Resources</p>
              <p>Press Releases</p>
              <p>CUSTOMERS</p>
              <p>K-12</p>
              <p>Higher Ed</p>
              <p>Professional Ed</p>
              <p>For Our Partners</p>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <h4 className="text-[14px] font-[700] mb-4">ABOUT US</h4>
            <div className="space-y-2">
              <p>Our Story</p>
              <p>Leadership</p>
              <p>Partners</p>
              <p>Careers</p>
              <p>Investor Relations</p>
              <p>Canvas Overview</p>
              <p>Evidence as a Service</p>
              <p>Privacy</p>
              <p>Security</p>
              <p>Accessibility</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 flex justify-center space-x-4 text-sm text-gray-600 flex-wrap">
          <p className="hover:text-red-600 cursor-pointer">Privacy |</p>
          <p className="hover:text-red-600 cursor-pointer">
            California Privacy Notice |
          </p>
          <p className="hover:text-red-600 cursor-pointer">
            Do Not Sell My Personal Information |
          </p>
          <p className="hover:text-red-600 cursor-pointer">
            Modern Slavery Act |
          </p>
          <p className="hover:text-red-600 cursor-pointer">Acceptable Use |</p>
          <p className="hover:text-red-600 cursor-pointer">Data Processing |</p>
          <p className="hover:text-red-600 cursor-pointer">Status |</p>
        </div>
      </footer>
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-600 mt-[-14px]">
        <p>
          Copyright © 2008-2024 Akademai. All rights reserved. Various
          trademarks held by their respective owners.
        </p>
      </div>
    </div>
  );
};

export default Footer;
