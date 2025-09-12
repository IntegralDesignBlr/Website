import React from 'react';
import './Team.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GiMicrochip } from 'react-icons/gi';
import { MdOutlineIntegrationInstructions } from 'react-icons/md';
import { AiOutlineCode } from 'react-icons/ai';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    role: "Founder & CEO",
    expertise: "Analog Design",
    bio: "Former Principal Engineer at Intel with over 15 years of experience in high-speed SerDes design.",
    image: "/New_Web/images/team/team1.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CTO",
    expertise: "Mixed-Signal",
    bio: "Expert in mixed-signal architectures with previous experience at Texas Instruments and Qualcomm.",
    image: "/New_Web/images/team/team2.jpg"
  },
  {
    id: 3,
    name: "Michael Chang",
    role: "Principal Designer",
    expertise: "RF & Wireless",
    bio: "Specialized in RF front-end design with 10+ patents in wireless communication technologies.",
    image: "/New_Web/images/team/team3.jpg"
  },
  {
    id: 4,
    name: "Lisa Rodriguez",
    role: "Lead Engineer",
    expertise: "Digital Integration",
    bio: "RISC-V expert with extensive background in SoC design and hardware verification.",
    image: "/New_Web/images/team/team4.jpg"
  }
];

// Expertise areas
const expertiseAreas = [
  {
    icon: <GiMicrochip size={40} />,
    title: "Analog & Mixed-Signal",
    description: "High-precision data converters, amplifiers, power management"
  },
  {
    icon: <MdOutlineIntegrationInstructions size={40} />,
    title: "System Integration",
    description: "Complete SoC design, hardware-software co-design"
  },
  {
    icon: <AiOutlineCode size={40} />,
    title: "FPGA & Verification",
    description: "FPGA prototyping, UVM verification, silicon validation"
  }
];

export default function Team() {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="team-header">
          <h2>Our Expert Team</h2>
          <div className="section-divider"></div>
          <p className="team-intro">
            Our team brings together industry veterans with decades of combined expertise in 
            semiconductor design and innovation. With backgrounds from leading tech companies, 
            we deliver cutting-edge solutions across various domains.
          </p>
        </div>
        
        <div className="expertise-areas">
          {expertiseAreas.map((area, index) => (
            <div className="expertise-card" key={index}>
              <div className="expertise-icon">
                {area.icon}
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
        
        <div className="team-members">
          {teamMembers.map(member => (
            <div className="team-card" key={member.id}>
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <span className="member-role">{member.role}</span>
              <span className="member-expertise">{member.expertise}</span>
              <p className="member-bio">{member.bio}</p>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn profile"><FaLinkedin /></a>
                <a href="#" aria-label="GitHub profile"><FaGithub /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
