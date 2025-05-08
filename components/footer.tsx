const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Live Courses</a></li>
            <li><a href="#" className="hover:text-gray-400">Recorded Sessions</a></li>
            <li><a href="#" className="hover:text-gray-400">1-on-1 Consultation</a></li>
            <li><a href="#" className="hover:text-gray-400">Register for Business</a></li>
          </ul>
        </div>

        {/* Help & Support Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Help & Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
        
      </div>

      {/* Social Media & Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-xl hover:text-gray-400">🔵</a>  {/* Facebook */}
          <a href="#" className="text-xl hover:text-gray-400">🐦</a>  {/* Twitter */}
          <a href="#" className="text-xl hover:text-gray-400">🔗</a>  {/* LinkedIn */}
          <a href="#" className="text-xl hover:text-gray-400">📷</a>  {/* Instagram */}
        </div>
        <p className="text-sm">&copy; 2025 Copyrights. All rights reserved by Metamatch</p>
        <p className="text-xs mt-2 space-x-4">
          <a href="#" className="hover:text-gray-400">Cookie Preference</a> | 
          <a href="#" className="hover:text-gray-400">Privacy</a> | 
          <a href="#" className="hover:text-gray-400">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
