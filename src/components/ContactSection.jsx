import React from "react";
import { User, MessageSquare, Send, Mail } from "lucide-react";

export default function ContactSection({ contactInfo, formData, handleInputChange, handleSubmit, isSending }) {
  return (
    <section id="contact" className="px-4 lg:px-16 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Get In </span>
            <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together. I'm always excited to work on new challenges and help businesses grow through great design.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                Feel free to reach out through any of the following methods. I typically respond within 24 hours.
              </p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:shadow-lg ${info.hoverColor} group`}
                >
                  <div className="flex-shrink-0">
                    <info.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-current transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Why Work With Me?
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span>1+ years of professional experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span>Fast turnaround times</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span>Unlimited revisions</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 lg:p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400/50 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400/50 transition-all duration-300"
                      placeholder="g.email@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400/50 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isSending ? "bg-yellow-400/50 text-gray-900 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-500 text-gray-900 hover:shadow-lg hover:shadow-yellow-400/50"
                }`}
              >
                {isSending ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
