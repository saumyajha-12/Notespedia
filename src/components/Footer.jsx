import React from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  Mail,
  Github,
  Linkedin
} from 'lucide-react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-black">
                Notes<span className="text-blue-400">pedia</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your ultimate study companion. Access thousands of study notes, share your knowledge, and excel in your academic journey.
            </p>
            <div className="flex space-x-6 mt-4">
              <a
                href="mailto:spjha1207@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-1"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/saumyajha-12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-1"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/saumya-prakash-085a01229"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-1"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/browse" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Browse Notes
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Upload Notes
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info (optional, minimal) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: spjha1207@gmail.com</li>
              <li>GitHub: saumyajha-12</li>
              <li>LinkedIn: saumya-prakash</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Notespedia. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Made with ❤️ for students
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


