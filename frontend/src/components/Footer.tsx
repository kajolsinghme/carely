import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div>
        <div className="grid grid-cols-3">
            <div>
                <h3 className="text-2xl font-semibold text-white">Carely</h3>
                <p className="mt-4 text-sm text-gray-400">Carely helps you find trusted doctors, book appointments,
              and consult online with ease.</p>
            </div>

            <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm"> 
                    <li><a href="/" className="hover:text-white transition">About Us</a></li>
                    <li><a href="/" className="hover:text-white transition">Careers</a></li>
                    <li><a href="/" className="hover:text-white transition">Blog</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="/" className="hover:text-white transition">Find Doctors</a></li>
                    <li><a href="/" className="hover:text-white transition">Consult Online</a></li>
                    <li><a href="/" className="hover:text-white transition">For Doctors</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                <div className="flex gap-4">
                    <a href="/" className="hover:text-white transition">
                        <Facebook size={20}/>
                    </a>
                    <a href="/" className="hover:text-white transition">
                        <Twitter size={20}/>
                    </a>
                    <a href="/" className="hover:text-white transition">
                        <Instagram size={20}/>
                    </a>
                    <a href="/" className="hover:text-white transition">
                        <Linkedin size={20}/>
                    </a>
                </div>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
