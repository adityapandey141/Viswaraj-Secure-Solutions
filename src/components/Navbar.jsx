import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Shield } from "lucide-react";
import { companyInfo } from "../data/companyData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Security Services", path: "/services/security" },
        { name: "Facility Management", path: "/services/facility" },
        { name: "Corporate & Risk", path: "/services/risk" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark shadow-2xl" : "bg-dark/95"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="VSS Logo" className=" h-[70px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center gap-1 px-5 py-2 font-medium text-sm uppercase tracking-wider transition-colors ${
                        isActive(link.path)
                          ? "text-primary"
                          : "text-white hover:text-primary"
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                        servicesOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="bg-dark-100 py-2 min-w-[220px] border-t-2 border-primary">
                        <Link
                          to={link.path}
                          className="block px-5 py-3 text-white hover:bg-dark-200 hover:text-primary transition-colors text-sm"
                        >
                          All Services
                        </Link>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-5 py-3 text-white hover:bg-dark-200 hover:text-primary transition-colors text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-5 py-2 font-medium text-sm uppercase tracking-wider transition-colors ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - CTA & Menu */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:flex btn-primary">
              Get Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-12 h-12 bg-primary flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col pt-4 border-t border-dark-200">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center justify-between w-full px-4 py-3 font-medium text-sm uppercase tracking-wider transition-colors ${
                        isActive(link.path)
                          ? "text-primary"
                          : "text-white hover:text-primary"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 bg-dark-100 ${
                        servicesOpen ? "max-h-48" : "max-h-0"
                      }`}
                    >
                      <Link
                        to={link.path}
                        className="block px-8 py-3 text-gray-400 hover:text-primary transition-colors text-sm"
                      >
                        All Services
                      </Link>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-8 py-3 text-gray-400 hover:text-primary transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 font-medium text-sm uppercase tracking-wider transition-colors ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-primary mx-4 mt-4 text-center">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
