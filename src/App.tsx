import React, { useState, useRef } from 'react';
import { Mail, Linkedin } from "lucide-react";
import logo from "../logo.jpg";
import sujayProfile from "../image/sujayvkulkarni.jpg";
import adityaProfile from "../image/adityasmaller.jpg";
import anirudhProfile from "../image/anirudh.jpg";
import bruhatProfile from "../image/bruhat.jpg";
import benProfile from "../image/ben.jpg";
import ananthProfile from "../image/ananthpullur.jpg";
import { Clock, MapPin } from "lucide-react";
import MaskedAbout from "./components/MaskedAbout";
import { Briefcase, GraduationCap, Rocket, BarChart, Users, CheckCircle } from "lucide-react";

import {
  Menu,
  X,
  ChevronDown,
  Mail,
  MapPin,
  Calendar,
  Clock,
  BookOpen,
  Users,
  Trophy,
  Lightbulb,
  GraduationCap,
  Target
} from 'lucide-react';
import { TeamMember, NavItem, ScheduleItem, WhyJoinItem } from './types';
import ContactForm from './components/ContactForm';
import TrainerCard from './components/TrainerCard';

const teamMembers: TeamMember[] = [
  {
    name: "Sujay V Kulkarni",
    role: "President",
    image: sujayProfile
  },
  {
    name: "Aditya S Maller",
    role: "Vice President",
    image: adityaProfile
  },
  {
    name: "Anirudh",
    role: "Tech Team",
    image: anirudhProfile
  },
  {
    name: "Bruhat B Kulkarni",
    role: "Tech Team",
    image: bruhatProfile
  },
  {
    name: "Benedict Antony S",
    role: "Tech Team",
    image: benProfile
  }
];

const eventDays = [
  {
    day: "Day 1-28th Feb",
    events: [
      { time: "02:00 to 03:00 PM", title: "Slot 1", speaker: "Ananth Pullur", location: "Satyajit Ray Hall" },
      { time: "03:10 to 05:30 PM", title: "Slot 2", speaker: "Ananth Pullur", location: "Workshop Room A" }
    ]
  },
  {
    day: "Day 2-1st March",
    events: [
      { time: "08:45 to 10:30 AM", title: "Slot 3", speaker: "Ananth Pullur", location: "Satyajit Ray Hall" },
      { time: "11:00 to 1:30 PM", title: "Slot 4", speaker: "Industry Experts", location: "Satyajit Ray Hall" },
      { time: "02:30 to 4:30 PM", title: "Slot 5", speaker: "Ananth Pullur", location: "Satyajit Ray Hall" },
      { time: "04:45 to 6:30 PM", title: "Slot 6", speaker: "Various Leaders", location: "Satyajit Ray Hall" }
    ]
  },
  {
    day: "Day 3-7th March",
    events: [
      { time: "02:00 to 03:00 PM", title: "Project Presentation", speaker: "Guest Panel", location: "Satyajit Ray Hall" },
      { time: "05:00 PM", title: "Final Awards", speaker: "Ananth Pullur", location: "Satyajit Ray Hall" }
    ]
  }
];

const whyJoinItems: WhyJoinItem[] = [
  {
    title: "Expert Mentors",
    description: "🔹Exclusive mentorship from industry professionals. Top participants present projects to experts. Standout performers may get internship or interview opportunities..",
    icon: GraduationCap
  },
  {
    title: "Hands-on Learning",
    description: "💡 Learn Flask, Data Analysis, and real-world ML workflows. Work on live GitHub projects and gain practical skills. Build and deploy applications with industry tools.",
    icon: Lightbulb
  },
  {
    title: "Exciting Prizes",
    description: "🏆 Win internship opportunities with top companies. Get research paper training and certification. Showcase your skills and earn exclusive rewards.",
    icon: Trophy
  }
];

const navItems: NavItem[] = [
  {
    label: "About",
    dropdown: [
      { label: "About Workshop", href: "#about" },
      { label: "Trainers", href: "#trainers" },
      { label: "Prizes", href: "#prizes" }
    ]
  },
  { label: "Schedule", href: "#schedule" },
  { label: "Navigate", href: "#navigate" },
  { label: "Course Materials", href: "#materials" }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="Indasp Masterclass Logo" className="h-14 w-14 object-cover rounded-full" />
              <span className="ml-2 text-xl font-bold">Indasp Masterclass</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                  className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  About
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2">
                    <button
                      onClick={() => scrollToSection('about')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      About Workshop
                    </button>
                    <button
                      onClick={() => scrollToSection('trainers')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      Trainers
                    </button>
                    <button
                      onClick={() => scrollToSection('prizes')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      Prizes
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('schedule')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Schedule
              </button>

              <button
                onClick={() => scrollToSection('navigate')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Navigate
              </button>

              <a
                href="https://drive.google.com/drive/folders/1Bf5PHpahCzffSup4FO8sIEGiOuFb0_Rb?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Course Materials
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQ-Zvzg7NBqr8tfzHnoy3QOP0tJM8Kt48ZH7RL3Vk89KcGoQ/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Register Here
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="space-y-1">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50"
                >
                  About Workshop
                </button>
                <button
                  onClick={() => scrollToSection('trainers')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50"
                >
                  Trainers
                </button>
                <button
                  onClick={() => scrollToSection('prizes')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50"
                >
                  Prizes
                </button>
              </div>
              <button
                onClick={() => scrollToSection('schedule')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50"
              >
                Schedule
              </button>
              <button
                onClick={() => scrollToSection('navigate')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50"
              >
                Navigate
              </button>
              <a
                href="https://drive.google.com/your-materials-link"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50"
              >
                Course Materials
              </a>
             <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQ-Zvzg7NBqr8tfzHnoy3QOP0tJM8Kt48ZH7RL3Vk89KcGoQ/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Register Here
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-1000 text-white py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-b from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
  Introduction to Data Science With Python!
</h1>
<p className="text-xl md:text-2xl mb-12 text-gray-800 animate-fade-in-delay">
  Opportunities await you!
</p>


            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdQ-Zvzg7NBqr8tfzHnoy3QOP0tJM8Kt48ZH7RL3Vk89KcGoQ/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors animate-bounce"
            >
              Register Now
            </a>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">
              Why Join Our Workshop?
            </h2>
            {/* Scrolling Text Section */}
    <div className="relative mt-10 overflow-hidden bg-gray-50 text-black py-2">
      <div className="whitespace-nowrap animate-marquee text-lg font-semibold">
        🚀 Skills get you internships! 🌟 Top 3-10 performers get industry expert guidance! 🎯Top 3 are trained for research paper!🔥Interview Opportunities!
      </div>
    </div>
            <div className="grid md:grid-cols-3 gap-12">
              {whyJoinItems.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow"
                >
                  <item.icon className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Workshop Section */}
<section id="about" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
      About the Workshop
    </h2>

    {/* Grid Layout for Sections */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Why Are We Doing This? */}
      <div className="p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
        <div className="flex items-center space-x-3">
          <Rocket className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-semibold text-gray-800">Why Are We Doing This?</h3>
        </div>
        <p className="text-gray-600 mt-4">
          RUDRA was established just a year ago, but we’ve already made a massive impact in Data Science & Tech.
        </p>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>🎯 Hosted two major Ideathons with 250+ participants</li>
          <li>🤝 Built hiring pipelines with top companies</li>
          <li>🎓 Mentored by professionals from Cisco, Goldman Sachs & more</li>
          <li>📈 Helped 500+ students gain internships & research roles</li>
        </ul>
      </div>

      {/* What You'll Learn */}
      <div className="p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
        <div className="flex items-center space-x-3">
          <BarChart className="w-8 h-8 text-green-600" />
          <h3 className="text-2xl font-semibold text-gray-800">What You’ll Learn</h3>
        </div>
        <ul className="text-gray-600 mt-4 space-y-2">
          <li>✅ Python Basics & Data Structures</li>
          <li>📊 Data Analysis & Visualization with Pandas & Matplotlib</li>
          <li>🌐 Flask & Web Deployment for real-world projects</li>
          <li>🛠 GitHub & Version Control for industry collaboration</li>
          <li>🎯 Internship & Career Preparation</li>
        </ul>
      </div>

      {/* Who Is This For? */}
      <div className="p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
        <div className="flex items-center space-x-3">
          <Users className="w-8 h-8 text-purple-600" />
          <h3 className="text-2xl font-semibold text-gray-800">Who Is This For?</h3>
        </div>
        <p className="text-gray-600 mt-4">
          This workshop is perfect for beginners and first-year engineering students who:
        </p>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>🔹 Want to start Data Science but don’t know where to begin</li>
          <li>🔹 Are looking for internships but lack experience</li>
          <li>🔹 Want to build real projects and showcase them to industry professionals</li>
          <li>🔹 Aim to publish research papers and build a strong academic profile</li>
        </ul>
      </div>

      {/* Workshop Outcomes */}
      <div className="p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-8 h-8 text-orange-600" />
          <h3 className="text-2xl font-semibold text-gray-800">Outcome of the Workshop</h3>
        </div>
        <ul className="text-gray-600 mt-4 space-y-2">
          <li>💡 Build real-world projects & add them to your portfolio</li>
          <li>🎓 Internship & research paper opportunities for top performers</li>
          <li>📢 Industry interactions & expert mentorship</li>
          <li>📜 Certificate of Completion to boost your career</li>
          <li>🏆 Prizes & Recognition for outstanding contributions</li>
        </ul>
      </div>
    </div>
  </div>
</section>





        
        {/* Trainer Section */}
        <section id="trainers" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Meet Your Trainer
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <TrainerCard
                  name="Ananth Pullur"
                  title="Patent Attorney & Innovation Expert"
                  image = {ananthProfile}
                  linkedinUrl="https://www.linkedin.com/in/ananth-pullur-a325471b7/"
                  email="ananthp.btech23@rvu.edu.in"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Ananth Pullur</h3>
                <p className="text-gray-600">
                  Ananth Pullur is an aspiring data science professional and contributor to a textbook in the field. 
                  He co-developed 9 Keys, an award-winning project that integrates health monitoring with IoT to 
                  support individuals with partial paralysis.
                </p>
                <p className="text-gray-600">
                  With experience in TypeScript, Python, Go, Rust, and C, Ananth works at the intersection of data 
                  science and full-stack development. His notable projects include a LaTeX template for IB students and 
                  contributions to open-source initiatives. As a mentor, he shares practical insights from both academic
                  and applied data science.
                </p>
                <div className="flex space-x-4">
                  {/* LinkedIn Icon */}
  <a
    href="https://www.linkedin.com/in/ananth-pullur-a325471b7/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800"
  >
    <Linkedin className="h-6 w-6" />
  </a>

  {/* Mail Icon */}
  <a
    href="mailto:ananthp.btech23@rvu.edu.in"
    className="text-blue-600 hover:text-blue-800"
  >
    <Mail className="h-6 w-6" />
  </a>
                </div>
              </div>
            </div>
          </div>
        </section>



        
        {/* Schedule Section */}
        <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Event Schedule</h2>

        {/* Horizontal Flex Container for Days */}
        <div className="flex justify-between gap-8">
          {eventDays.map((day, index) => (
            <div key={index} className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-center mb-6">{day.day}</h3>

                {day.events.map((event, i) => (
                  <div key={i} className="mb-8 relative">

                    {/* Time & Details */}
                    <div className="flex items-start">
                      {/* Time */}
                      <div className="text-blue-600 font-semibold flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      {/* Event Info */}
                      <div className="ml-6">
                        <h4 className="text-lg font-bold">{event.title}</h4>
                        <p className="text-gray-600">{event.speaker}</p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          ))}
        </div>
      </div>
    </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <BookOpen className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">Indasp RUDRA</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Users className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Calendar className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
