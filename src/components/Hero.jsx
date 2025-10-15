import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import pp from "../image/ppp.png";

export default function Hero({ onContactClick }) {
  const roles = ["devops engineer", "fullstack developer"];
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 80;

  useEffect(() => {
    let timeout;
    const current = roles[roleIndex];

    if (!isDeleting && typedText.length < current.length) {
      timeout = setTimeout(() => setTypedText(current.slice(0, typedText.length + 1)), typingSpeed);
    } else if (isDeleting && typedText.length > 0) {
      timeout = setTimeout(() => setTypedText(current.slice(0, typedText.length - 1)), typingSpeed / 2);
    } else {
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      } else {
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="px-4 lg:px-16 py-12 lg:py-20 pt-32 lg:pt-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">HEY, I'M </span>
              <span className="text-yellow-400">Gaveen</span>
              <span className="text-gray-900 dark:text-white">, A<br />
                <span className="inline-block">
                  <span className="text-yellow-400 capitalize">{typedText}</span>
                  <span className="text-yellow-400 ml-1 animate-pulse">|</span>
                </span>
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed max-w-2xl">
              Hello, I'm Gaveen Anuranga, a DevOps Engineer from Sri Lanka. I have about one year of experience in building and optimizing CI/CD pipelines, automating infrastructure, and ensuring system reliability. I've earned certifications from Google and have hands-on experience deploying, monitoring, and improving web applications and cloud-based systems independently.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); onContactClick && onContactClick(); }}
              className="inline-flex items-center bg-gray-600 hover:bg-yellow-400 hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 group"
            >
              Contact Me
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          <div className="relative flex justify-center lg:justify-end top-0">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-yellow-400 rounded-3xl rotate-45 dark:opacity-20 opacity-70 hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-4 bg-gray-200 dark:bg-gray-800 rounded-3xl rotate-0 border-4 border-gray-900 dark:border-white hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500"></div>
              <div className="relative top-6 left-12 lg:top-1 lg:left-8"><img src={pp} alt="Profile" className=" lg:w-80 w-56" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
