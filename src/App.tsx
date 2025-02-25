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
    description: "🔹 Expert Mentors Learn from industry professionals with real-world experience in Python and Data Science.",
    icon: GraduationCap
  },
  {
    title: "Hands-on Learning",
    description: "💡 Hands-on Learning Work on real datasets, implement machine learning models, and gain practical skills.",
    icon: Lightbulb
  },
  {
    title: "Exciting Prizes",
    description: "🏆 Exciting Challenges Compete in data science challenges, showcase your skills, and win exclusive rewards.",
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
                href="https://drive.google.com/your-materials-link"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Bring Your Ideas to Reality
            </h1>
            <p className="text-xl md:text-2xl mb-12 animate-fade-in-delay">
              Learn. Analyze. Predict. Elevate Your Skills with Python!
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
            <h2 className="text-4xl font-bold text-center mb-12">
              About the Workshop
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Join us for an immersive Python Data Science workshop! Gain hands-on experience with real-world datasets,
                learn from industry experts, and master essential skills in data analysis, visualization, and machine learning.
                Whether you're a beginner or looking to refine your expertise, this workshop will equip you with the tools to turn data 
                into powerful insights. Don't miss this opportunity to level up your data science journey! 🚀
              </p>
            </div>
          </div>
        </section>

        {/* Trainer Section */}
        <section id="trainers" className="py-20 bg-white">
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

{/* Prizes Section */}
<section id="prizes" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-12">Exciting Prizes</h2>
    
    {/* Prize Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
        <h3 className="text-2xl font-bold mb-4">First Prize</h3>
        <p className="text-3xl font-bold text-blue-600 mb-2">1000$💰 WORTH</p>
        <p className="text-gray-600">
          🎓 Personal Mentorship <br />
          📄 Research Paper Training <br />
          🚀 Internship Opportunities <br />
          🌍 Industry Connect
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <Trophy className="w-16 h-16 mx-auto mb-6 text-gray-400" />
        <h3 className="text-2xl font-bold mb-4">Second Prize</h3>
        <p className="text-3xl font-bold text-blue-600 mb-2">500$💰 WORTH</p>
        <p className="text-gray-600">
          🎓 Personal Mentorship <br />
          🚀 Internship Opportunities <br />
          🌍 Industry Connect
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <Trophy className="w-16 h-16 mx-auto mb-6 text-orange-500" />
        <h3 className="text-2xl font-bold mb-4">Third Prize</h3>
        <p className="text-3xl font-bold text-blue-600 mb-2">250$💰 WORTH</p>
        <p className="text-gray-600">
          🎓 Personal Mentorship <br />
          🌍 Industry Connect
        </p>
      </div>
    </div>

    {/* Scrolling Text Section */}
    <div className="relative mt-10 overflow-hidden bg-gray-800 text-white py-2">
      <div className="whitespace-nowrap animate-marquee text-lg font-semibold">
        🚀 Skills get you internships! 🌟 Top 3-10 performers get industry expert guidance! 🎯Top 3 are trained for research paper!🔥Interview Opportunities!
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

              {/* Vertical Timeline */}
              <div className="relative border-l-4 border-blue-500 pl-6">
                {day.events.map((event, i) => (
                  <div key={i} className="mb-8 relative">
                    {/* Dot (Centered on the line) */}
                    <div className="absolute left-[-8px] top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
              
                    {/* Horizontal Connector Line */}
                    <div className="absolute left-[-4px] top-4 w-10 border-t-2 border-blue-500"></div>

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
