import React, { useState, useRef } from 'react';
import sujayProfile from "../image/sujayvkulkarni.jpg";
import adityaProfile from "../image/adityasmaller.jpg";
import anirudhProfile from "../image/anirudh.jpg";
import bruhatProfile from "../image/bruhat.jpg";
import benProfile from "../image/ben.jpg";
import ananthProfile from "../image/ananthpullur.jpg";
import Registration from "./components/Registration";


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

const schedule: ScheduleItem[] = [
  {
    time: "09:00 AM",
    title: "Opening Keynote",
    speaker: "Dr. Sarah Wilson",
    location: "Main Hall"
  },
  {
    time: "10:30 AM",
    title: "Patent Drafting Workshop",
    speaker: "Prof. James Anderson",
    location: "Workshop Room A"
  },
  {
    time: "02:00 PM",
    title: "Industry Panel Discussion",
    speaker: "Various Industry Leaders",
    location: "Conference Room"
  }
];

const whyJoinItems: WhyJoinItem[] = [
  {
    title: "Expert Mentors",
    description: "Learn from seasoned professionals",
    icon: GraduationCap
  },
  {
    title: "Hands-on Learning",
    description: "Practical patent drafting guidance",
    icon: Lightbulb
  },
  {
    title: "Exciting Prizes",
    description: "Win up to ₹2.1 LAKH and gain global recognition",
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
              <BookOpen className="h-8 w-8 text-blue-600" />
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
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
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
              Join us for an immersive workshop on patent drafting and innovation
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
                Join us for an intensive workshop on patent drafting and innovation.
                Learn from industry experts, gain practical experience, and take your
                first steps towards becoming a patent professional.
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
                  <a
                    href="https://www.linkedin.com/in/ananth-pullur-a325471b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
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
            <h2 className="text-4xl font-bold text-center mb-12">
              Exciting Prizes
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
                <h3 className="text-2xl font-bold mb-4">First Prize</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">₹1</p>
                <p className="text-gray-600">Plus Global Recognition</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Trophy className="w-16 h-16 mx-auto mb-6 text-gray-400" />
                <h3 className="text-2xl font-bold mb-4">Second Prize</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">₹7</p>
                <p className="text-gray-600">Plus Mentorship</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Trophy className="w-16 h-16 mx-auto mb-6 text-orange-500" />
                <h3 className="text-2xl font-bold mb-4">Third Prize</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">₹4</p>
                <p className="text-gray-600">Plus Industry Connect</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Event Schedule</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {schedule.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold">{item.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.speaker}</p>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigate Section */}
        <section id="navigate" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">How to Reach</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Location Details</h3>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Workshop Venue</p>
                    <p className="text-gray-600">
                      RV University
                      <br />
                      RV Vidyanikethan Post
                      <br />
                      8th Mile, Mysuru Road
                      <br />
                      Bengaluru - 560059
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
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
              <span className="ml-2 text-xl font-bold">Tech Seminar 2024</span>
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
