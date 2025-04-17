const Footer = () => {
    return (
        <footer className="bg-gradient-to-tr from-gray-900 to-gray-800 text-white py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Services */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Travel Services</h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white">Custom Tour Packages</a></li>
                        <li><a href="#" className="hover:text-white">Flight & Hotel Booking</a></li>
                        <li><a href="#" className="hover:text-white">Travel Insurance</a></li>
                        <li><a href="#" className="hover:text-white">Visa Assistance</a></li>
                        <li><a href="#" className="hover:text-white">Local Tour Guides</a></li>
                    </ul>
                </div>


                {/* Company */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Company</h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Subscribe to Newsletter</h2>
                    <p className="text-sm text-gray-300 mb-4">Get our weekly updates and offers directly to your inbox.</p>
                    <div className="flex items-center space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-3 py-2 w-full rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none"
                        />
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>&copy; 2025 Skypath. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Facebook</a>
                    <a href="#" className="hover:text-white">Twitter</a>
                    <a href="#" className="hover:text-white">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
