import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TrainerCardProps {
  name: string;
  title: string;
  image: string;
  linkedinUrl: string;
  email: string;
}

export default function TrainerCard({
  name,
  title,
  image,
  linkedinUrl,
  email
}: TrainerCardProps) {
  return (
    <div className="relative group">
      <div className="relative w-64 h-64 mx-auto perspective animate-flip">
        <div className="relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d">
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </div>
          
          {/* Back */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <div className="text-white text-center p-4">
              <h3 className="text-xl font-bold mb-2">{name}</h3>
              <p className="mb-4">{title}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-blue-200 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
