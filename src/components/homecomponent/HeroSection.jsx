import React, { useEffect, useState } from "react";
import {
  Cloud,
  Shield,
  Zap,
  Users,
  Search,
  Smartphone,
  FileText,
  Globe,
  Image,
  Video,
  Music,
  Archive,
  
  Star,
  File,
  FolderOpenDot,
  HardDriveUpload
} from "lucide-react";
import {Link} from 'react-router-dom'
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types"; // ✅ Added for prop validation
import Footer from "../Footer/Footer";

const HeroSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      company: "Design Studio Inc",
      content:
        "This file management system has revolutionized how our team collaborates. The intuitive interface and powerful features make organizing our creative assets effortless.",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      company: "Innovation Labs",
      content:
        "The security features are top-notch, and the API integration possibilities are endless. Perfect for our enterprise needs with excellent performance.",
      avatar:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      company: "Global Solutions",
      content:
        "Managing files across multiple projects has never been easier. The organizational tools and collaboration features are exactly what we needed.",
      avatar:
        "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-indigo-600" />,
      title: "Cloud Storage",
      description:
        "Secure cloud storage with 99.9% uptime guarantee. Access your files from anywhere, anytime."
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Secure Environment",
      description:
        "Military-grade encryption and multi-factor authentication keep your data safe."
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "Lightning Fast",
      description:
        "Upload and download files at blazing speeds with our global CDN network."
    },
    {
      icon: <HardDriveUpload  className="w-8 h-8 text-indigo-600" />,
      title: "upload",
      description:
        "upload your File and folders, set permissions, and collaborate seamlessly with your team."
    },
    {
      icon: <FolderOpenDot  className="w-8 h-8 text-indigo-600" />,
      title: "Custome Folder",
      description:
        "Make Custom Folder according to use "
    },{
      icon:<File className="w-8 h-8 text-indigo-600"/>,
      title:"File make",
       description:
        "Make accordingly and save your code or text"
    }
  ];

  const stats = [
    {
      number: "10M+",
      label: "Files Stored",
      icon: <FileText className="w-6 h-6 text-indigo-600" />
    },
    {
      number: "50K+",
      label: "Active Users",
      icon: <Users className="w-6 h-6 text-indigo-600" />
    },
    {
      number: "90.9%",
      label: "Uptime",
      icon: <Shield className="w-6 h-6 text-indigo-600" />
    },
    {
      number: "50+",
      label: "Countries",
      icon: <Globe className="w-6 h-6 text-indigo-600" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Save your <span className="text-indigo-600">Files</span> &{" "}
          <span className="text-indigo-600">Documents</span> Freely
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Upload, manage, and organize your files  in one place. Access
          them anytime, anywhere.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <div className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700">
           <Link  to='/dashboard' className='btn btn-primary ' >Get Started</Link>
          </div>
          <button className="px-6 py-3 bg-gray-100 text-indigo-600 rounded-xl shadow-lg hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </section>

<section className="mt-12 w-full flex justify-center items-center">
  <div className="overflow-hidden relative w-full max-w-4xl">
    
    {/* Gradient overlay for fading edges */}
    <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

    <div className="flex gap-10 animate-scroll text-4xl font-extrabold whitespace-nowrap">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-black  via-black to-black hover:scale-110 transition-transform">
        React.js
      </span>
      <span className="text-transparent bg-clip-text  bg-black hover:scale-110 transition-transform">
        Redux 
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-black  via-black to-black hover:scale-110 transition-transform">
        Firebase
      </span>
       <span className="text-transparent bg-clip-text bg-gradient-to-r from-black  via-black to-black hover:scale-110 transition-transform">
        Node.js
      </span>
      <span className="text-transparent bg-clip-text  bg-black hover:scale-110 transition-transform">
        Express.js
      </span>
      <span className="text-transparent bg-clip-text  bg-gradient-to-r from-black  via-black to-black transition-transform">
        Tailwind CSS
      </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black  via-black to-black hover:scale-110 transition-transform">
        React.js
      </span>
      <span className="text-transparent bg-clip-text  bg-black hover:scale-110 transition-transform">
        Redux
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-black  via-black to-black hover:scale-110 transition-transform">
        Firebase
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-black  via-black to-black hover:scale-110 transition-transform">
        Node.js
      </span>
      <span className="text-transparent bg-clip-text  bg-black hover:scale-110 transition-transform">
        Express.js
      </span>
      <span className="text-transparent bg-clip-text  bg-gradient-to-r from-black  via-black to-black transition-transform">
        Tailwind CSS
      </span>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-16 py-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-500 mt-2">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-50 py-12 px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <h4 className="text-3xl font-bold mt-2">{stat.number}</h4>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        <div className="bg-white max-w-3xl mx-auto p-8 rounded-2xl shadow-lg">
          <img 
            src={testimonials[currentTestimonial].avatar}
            alt={testimonials[currentTestimonial].name}
            className="w-16 h-16 rounded-full mx-auto"
          />
          <p className="mt-4 text-gray-700">{testimonials[currentTestimonial].content}</p>
          <h4 className="mt-4 font-semibold">
            {testimonials[currentTestimonial].name} - {testimonials[currentTestimonial].role},{" "}
            {testimonials[currentTestimonial].company}
          </h4>
          <div className="flex justify-center mt-2">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="text-yellow-500 w-5 h-5" fill="currentColor" />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
       <Footer/>
    </div>
  );
};

export default HeroSection;
    