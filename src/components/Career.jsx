import React from 'react';
// removed unused useNavigate
import './Career.css';
import { HiLocationMarker, HiClock, HiBriefcase } from 'react-icons/hi';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';

const Career = () => {
  // navigate removed because it was unused

  const jobOpenings = [
    {
      id: 1,
      title: "Analog Circuit Design Intern",
      department: "Hardware Engineering",
      location: "Remote/Hybrid",
      type: "Internship",
      experience: "0-1 years / Freshers",
      description: "Work on analog circuit design projects and gain hands-on experience in semiconductor design.",
      requirements: ["B.E./B.Tech in Electronics/Electrical Engineering", "Basic knowledge of analog circuits", "Eagerness to learn and grow"]
    },
    {
      id: 2,
      title: "RTL Designer",
      department: "Digital Design",
      location: "Remote/Hybrid",
      type: "Full-time",
      experience: "0-1 years / Freshers",
      description: "Design and develop RTL code for digital circuits and participate in verification activities.",
      requirements: ["B.E./B.Tech in Electronics/Electrical Engineering", "Knowledge of Verilog/SystemVerilog", "Understanding of digital design concepts"]
    },
    {
      id: 3,
      title: "Digital Verification Engineer",
      department: "Verification",
      location: "Remote/Hybrid",
      type: "Full-time",
      experience: "0-1 years / Freshers",
      description: "Perform verification of digital designs using industry-standard methodologies and tools.",
      requirements: ["B.E./B.Tech in Electronics/Computer Science", "Knowledge of UVM/SystemVerilog", "Problem-solving skills"]
    },
    {
      id: 4,
      title: "Physical Design Intern",
      department: "Backend Design",
      location: "Remote/Hybrid",
      type: "Internship",
      experience: "0-1 years / Freshers",
      description: "Learn and work on physical design flow including placement, routing, and timing closure.",
      requirements: ["B.E./B.Tech in Electronics/VLSI", "Basic understanding of VLSI design flow", "Willingness to learn new tools"]
    }
  ];

  const benefits = [
    {
      icon: <FaRocket size={32} />,
      title: "Innovation Culture",
      description: "Work on cutting-edge technologies that shape the future of semiconductors"
    },
    {
      icon: <FaGraduationCap size={32} />,
      title: "Learning & Growth",
      description: "Continuous learning opportunities with access to latest tools and training"
    },
    {
      icon: <FaCode size={32} />,
      title: "Technical Excellence",
      description: "Collaborate with world-class engineers and researchers in advanced technologies"
    }
  ];

  const handleApply = (jobTitle) => {
    // In a real application, this would open an application form or redirect to application portal
    alert(`Application process for ${jobTitle} would be initiated here.`);
  };

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>
            Be part of a revolutionary team that's shaping the future of semiconductor technology. 
            We're looking for passionate individuals who want to make a real impact in AI, Quantum Computing, 
            VLSI Design, and Memory Architecture.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-us">
        <div className="container">
          <h2>Why IntegralDesign?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="job-openings">
        <div className="container">
          <h2>Current Openings</h2>
          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-department">{job.department}</span>
                </div>
                
                <div className="job-meta">
                  <div className="job-meta-item">
                    <HiLocationMarker size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="job-meta-item">
                    <HiClock size={16} />
                    <span>{job.type}</span>
                  </div>
                  <div className="job-meta-item">
                    <HiBriefcase size={16} />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-requirements">
                  <h4>Key Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="apply-btn"
                  onClick={() => handleApply(job.title)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="career-cta">
        <div className="container">
          <h2>Don't See Your Role?</h2>
          <p>
            We're always looking for exceptional talent. Send us your resume and tell us 
            how you'd like to contribute to the future of semiconductor innovation.
          </p>
          <button 
            className="cta-btn"
            onClick={() => alert('General application process would be initiated here.')}
          >
            Send Your Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default Career;