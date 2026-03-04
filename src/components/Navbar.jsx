import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/project" },
    { name: "Contact", link: "/contact" },
  ];

  const colors = darkMode
    ? {
        navBg: "bg-black/80 backdrop-blur-xl",
        mobileBg: "bg-[#0b0f19]",
        textPrimary: "text-white",
        textSecondary: "text-gray-400",
        textActive: "text-cyan-400",
        indicator: "from-cyan-400 to-purple-500",
        button: "from-cyan-400 to-purple-600",
        divider: "border-gray-800",
        menuButton: "bg-gray-800 text-cyan-400",
      }
    : {
        navBg: "bg-white/80 backdrop-blur-xl",
        mobileBg: "bg-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-500",
        textActive: "text-rose-500",
        indicator: "from-rose-400 to-orange-400",
        button: "from-rose-400 to-orange-500",
        divider: "border-gray-200",
        menuButton: "bg-gray-100 text-gray-700",
      };

  const handleNavClick = (itemName, sectionId, link) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);

    // scroll ke section
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });

    // update URL tanpa reload
    window.history.pushState(null, "", link);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut", staggerChildren: 0.06 },
    },
    exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.18, ease: "easeIn" } },
  };

  const menuItemVariants = { hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.2 } } };

  return (
    <div className="flex flex-col items-center w-full fixed z-50 mt-4 px-4">
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg w-full max-w-3xl`}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
          {/* Logo */}
          <motion.a whileHover={{ scale: 1.05 }} className="flex items-center space-x-2" href="/">
            <span className={`text-xl font-bold ${colors.textPrimary}`}>Portofolio</span>
            <span className="text-orange-500">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name, item.name.toLowerCase(), item.link)}
                className="relative font-medium transition-colors duration-300"
              >
                <span
                  className={`${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : `${colors.textSecondary} hover:text-orange-500`
                  }`}
                >
                  {item.name}
                </span>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Dark mode & mobile menu */}
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} transition-colors`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </motion.button>

            {/* Hire Me */}
            {/* <motion.button className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}>
              Hire Me
            </motion.button> */}

            {/* Mobile Menu Button */}
            <motion.button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden p-2 rounded-full ${colors.menuButton}`}>
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`lg:hidden mt-2 w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden ${colors.mobileBg} backdrop-blur-lg`}
          >
            <div className="flex flex-col py-3 px-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.name, item.name.toLowerCase(), item.link)}
                  variants={menuItemVariants}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl my-0.5 font-medium transition-colors duration-200 ${
                    activeSection === item.name.toLowerCase()
                      ? `${colors.textActive} ${darkMode ? "bg-gray-800" : "bg-orange-50"}`
                      : `${colors.textSecondary} ${darkMode ? "hover:bg-gray-800" : "hover:bg-orange-50"}`
                  }`}
                >
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;