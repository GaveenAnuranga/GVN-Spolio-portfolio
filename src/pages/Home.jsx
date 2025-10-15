
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ServicesBanner from "../components/ServicesBanner";
import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

import pp from '../image/ppp.PNG';
import ppj from '../image/ppj.PNG';
import bot from '../image/bot.png';
import tution from '../image/tution.jpeg';

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSending, setIsSending] = useState(false);

  const categories = ["All", "Web", "Embedded system"];

  // Typing animation moved into Hero component

  // Initialize EmailJS once on mount if keys are present
  useEffect(() => {
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    try {
      if (PUBLIC_KEY && typeof emailjs.init === "function") {
        emailjs.init(PUBLIC_KEY);
        console.log("EmailJS initialized");
      }
    } catch (err) {
      console.warn("Failed to initialize EmailJS:", err);
    }
    // Debug: log whether Vite env vars are available (masked)
    try {
      const svc = !!import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const tpl = !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const pub = !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      console.debug("EmailJS env availability -> service:", svc, "template:", tpl, "public:", pub);
    } catch (e) {
      console.debug("Unable to read import.meta.env for EmailJS vars", e);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic input validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (formData.message.length > 1000) {
      toast.error("Message is too long. Please keep it under 1000 characters.");
      return;
    }
    if (formData.name.trim().length < 2) {
      toast.error("Please enter a valid name (at least 2 characters).");
      return;
    }
    if (formData.subject.trim().length < 3) {
      toast.error("Please enter a valid subject (at least 3 characters).");
      return;
    }

    // Use Vite environment variables (must be set in .env as VITE_EMAILJS_...)
    const SERVICE_ID = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VREACT_APP_EMAILJS_USER_ID;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error(
        "Email service is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your .env file."
      );
      return;
    }

    setIsSending(true);

    // initialize emailjs (safe to call multiple times)
    try {
      if (typeof emailjs.init === "function") emailjs.init(PUBLIC_KEY);
    } catch (initErr) {
      // non-fatal, continue to send
      console.warn("emailjs init warning:", initErr);
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast.success("Thank you for your message! I'll get back to you soon.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send the message. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  const services = [
    { title: "UI/UX Designer", icon: "🎨" },
    { title: "Web Developer", icon: "💻" },
    { title: "System Developer", icon: "⚙" },
    { title: "AI Enthusiast", icon: "🤖" },
    { title: "Embedded Systems & IoT Development", icon: "🧩" },
  ];

  const skillCards = [
    { title: "UI/UX Designing" },
    { title: "Web Development" },
    { title: "CI/CD Pipelines" },   
    { title: "DevOps Engineering" },
    { title: "Linux" },
    { title: "Version Control (Git/GitHub)" },
    { title: "Embedded Systems" },
    { title: "IoT" },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Part time job management system",
      category: "Web",
      image: ppj,
      description: "I design and develop intuitive, user-friendly interfaces for the Part-Time Job Management System. The platform includes clean, responsive layouts for job seekers and employers, making it easy to post, browse, and apply for part-time opportunities. From dynamic dashboards to application tracking and messaging features, every screen is optimized for clarity and performance to ensure a smooth and professional user experience across devices.",
      technologies: ["react", "node js", "firebase"],
      liveUrl: "#",
      githubUrl: "https://github.com/KJRMalshan/test.git"
    },
    {
      id: 2,
      title: "ZapBot - The fast line follow robot",
      category: "Embedded system",
      image: bot,
      description: "I designed and developed a high-speed line-following robot for the DEXTRON Line Following Robot Competition, organized by the Institute of Technology, University of Moratuwa. The robot was engineered for precision and speed, using IR sensors, PID control algorithms, and efficient motor control to navigate complex tracks smoothly. Built with optimized hardware and embedded programming, it was tailored for competitive performance, showcasing my skills in robotics, electronics, and real-time automation.",
      technologies: ["C++", "PID"],
      liveUrl: "https://www.linkedin.com/posts/ndt-dextron_dextron2024-ndtroboticclub-ndtstudentunion-ugcPost-7268854128922054656-A_pF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3dpiABbr9OjSg3HSWewWV6r-9wMMNsPWc",
      githubUrl: "https://github.com/GaveenAnuranga/fastLineFollow.git"
    },
    {
      id: 3,
      title: "ZeroWait : Prublic transports tracking system.",
      category: "Web",
      image: tution,
      description: "Track and show the location real time and ticket booking. Webbasedsystem, mobile app and IOT devises. Findexacty where is the vehicle(train or bus) and calculate the time that arrive the given location.",
      technologies: ["react", "node js", "mongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
  ];

  // filteredPortfolioItems moved into PortfolioSection component

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "gvn.020601@gmail.com",
      link: "mailto:gvn.020601@gmail.com",
      hoverColor: "hover:text-blue-400 hover:shadow-blue-400/50"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+94 786979104",
      link: "tel:+94786979104",
      hoverColor: "hover:text-green-400 hover:shadow-green-400/50"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Diyagama, Homagama, Sri Lanka",
      link: "https://maps.app.goo.gl/mVfX6M314oPMXLUD8",
      hoverColor: "hover:text-red-400 hover:shadow-red-400/50"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ToastContainer />
      <Header />
      {/* Sections (now split into components) */}
      <Hero onContactClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })} />
      <ServicesBanner services={services} />
      <SkillsSection skillCards={skillCards} />
      <PortfolioSection
        portfolioItems={portfolioItems}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ContactSection
        contactInfo={contactInfo}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isSending={isSending}
      />

      <Footer />
    </div>
  );
}

export default Home;
