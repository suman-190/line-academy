import Image from "next/image";
import { Poppins } from "next/font/google";
// import { Facebook, Instagram, Linkedin, Youtube, TikTok } from "lucide-react"; 

import Esewa from "../../public/Payment/download.png";
import PhonePay from "../../public/Payment/fonepay-logo.png";
import ConnectIps from "../../public/Payment/connect_ips.png";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const Footer = () => {
  return (
    <div className={`${poppins.className} p-8`}>
      <footer className="bg-[#1A2E7D] text-white py-10 mt-4 rounded-2xl mb-10">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
              <li><a href="#" className="hover:underline">Our Mission/Vision</a></li>
              <li><a href="#" className="hover:underline">Our Facilities</a></li>
            </ul>
          </div>

          {/* Related Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Related Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Career / Vacancy</a></li>
              <li><a href="#" className="hover:underline">Payment Option</a></li>
              <li><a href="#" className="hover:underline">Help & FAQ</a></li>
              <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="#" className="hover:underline">Our Policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Line Academy</p>
            <p>01-5445555</p>
            <p>info.lineacademy@gmail.com</p>
            <p>Jal Vinayak Marg, Pulchowk, Lalitpur-20</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              {/* <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><TikTok size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Youtube size={24} /></a> */}
            </div>
          </div>

          {/* Payment Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">We accept</h3>
            <div className="flex space-x-3">
              <Image src={PhonePay} alt="FonePay"  height={30} />
              <Image src={Esewa} alt="eSewa" height={30}  />
              <Image src={ConnectIps} alt="ConnectIPS" height={30}  />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-8 border-t border-gray-500 pt-4">
          © 2008 - 2024. Line Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
