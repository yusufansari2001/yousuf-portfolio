// LandingPage.jsx
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Footer from "./Footer";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
  const [terminalContent, setTerminalContent] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [typing, setTyping] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const codeLines = [
    "// Welcome to My Portfolio",
    "const aboutMe = {",
    "  name: 'Yousuf',",
    "  role: 'Software Engineer',",
    "  skills: ['Java', 'Springboot', 'React', 'Jenkins', 'CI/CD'],",
    "  passions: ['Clean Code', 'Problem Solving', 'Backend dev']",
    "};",
    "",
    "function buildProjects() {",
    "  return ['AI ResumeGenerator', 'Blog Application', 'urlShortener'];",
    "}",
    "",
    "const contact = {",
    "  email: 'yousuf89786@gmail.com',",
    "  github: 'github.com/yusufansari2001'",
    "};",
  ];

  useEffect(() => {
    const terminal = document.getElementById("terminal");
    if (terminal) terminal.scrollTop = terminal.scrollHeight;
  }, [terminalContent]);

  useEffect(() => {
    let timer;

    if (typing) {
      if (currentLine < codeLines.length) {
        if (currentChar < codeLines[currentLine].length) {
          timer = setTimeout(() => {
            setTerminalContent(
              (prev) => prev + codeLines[currentLine].charAt(currentChar)
            );
            setCurrentChar((prev) => prev + 1);
          }, Math.random() * 50 + 30);
        } else {
          timer = setTimeout(() => {
            setTerminalContent((prev) => prev + "\n");
            setCurrentLine((prev) => prev + 1);
            setCurrentChar(0);
          }, 200); // Reduced delay between lines
        }
      } else {
        timer = setTimeout(() => {
          setTyping(false);
        }, 3000); // Longer pause at end
      }
    } else {
      // Clear terminal and restart
      timer = setTimeout(() => {
        setTerminalContent("");
        setCurrentLine(0);
        setCurrentChar(0);
        setTyping(true);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [terminalContent, currentLine, currentChar, typing]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-md border-b border-gray-800 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="group relative">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <span className="opacity-0 group-hover:opacity-100 absolute -left-6 text-teal-400 transition-opacity duration-300">
              //
            </span>
            &lt;Yousuf.Dev /&gt;
            <span className="block h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-500 mt-1"></span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
          <button
            onClick={() =>
              document
                .getElementById("resume")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            My Resume
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 mt-2 p-4 rounded-md shadow-lg md:hidden z-50">
            <a
              href="#projects"
              className="block py-2 text-white hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="block py-2 text-white hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-white hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#resume"
              className="block py-2 text-white hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              My Resume
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Side - Details */}
            <div className="lg:w-1/2 w-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm{" "}
                <div style={{ display: "inline-block" }}>
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #60a5fa, #2dd4bf, #60a5fa)",
                      backgroundSize: "200% 200%",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      animation: "gradientFlow 3s ease infinite",
                    }}
                  >
                    Mohammed Yousuf
                  </span>
                  <style>{`
                      @keyframes gradientFlow {
                      0% { background-position: 0% 50%; }
                      50% { background-position: 100% 50%; }
                      100% { background-position: 0% 50%; }
                        }
                 `}</style>
                </div>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
                Software Engineer
              </h2>
              <p className="text-lg mb-8 text-gray-300 max-w-2xl">
                Results-driven Backend Engineer with 1.5 years of experience
                specializing in Java and Spring Boot. Skilled in developing
                high-performance REST APIs, optimizing database operations, and
                implementing clean, maintainable code using OOP principles.
                Experienced in building microservices and working in Agile
                environments to deliver scalable solutions. Combines strong
                technical problem-solving with effective communication for
                seamless cross-team collaboration.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:bg-opacity-10 transition-colors"
                >
                  Contact Me
                </a>
              </div>
              <div className="mt-8 flex space-x-6">
                <a
                  href="https://github.com/yusufansari2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yousuf897/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com/yusuf.ansari05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </div>

            {/* Right Side - Terminal Animation */}
            <div className="lg:w-1/2 w-full h-96 lg:h-[32rem] bg-black rounded-lg overflow-hidden border border-gray-700 shadow-xl">
              <div className="flex items-center bg-black px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-gray-400">
                  terminal — bash
                </div>
              </div>

              <div
                id="terminal"
                className="p-4 font-mono text-green-400 h-full overflow-auto bg-black"
                style={{ whiteSpace: "pre-wrap" }}
              >
                <span className="text-gray-400">$ </span>
                {terminalContent || "\u00A0"}
                <span className={`${typing ? "animate-pulse" : "invisible"}`}>
                  ▋
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Projects />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
