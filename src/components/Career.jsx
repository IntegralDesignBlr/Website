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
      title: "Senior VLSI Design Engineer",
      department: "Hardware Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead analog and mixed-signal IC design projects from concept to tape-out.",
      requirements: ["M.S./Ph.D in Electrical Engineering", "Experience with Cadence tools", "Analog circuit design expertise"]
    },
    {
      id: 2,
      title: "AI/ML Research Scientist",
      department: "Research & Development",
      location: "Remote/Hybrid",
      type: "Full-time",
      experience: "3-6 years",
      description: "Develop cutting-edge machine learning algorithms for semiconductor applications.",
      requirements: ["Ph.D in Computer Science/AI", "Python, TensorFlow expertise", "Published research papers"]
    },
    {
      id: 3,
      title: "Quantum Computing Engineer",
      department: "Quantum Systems",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-5 years",
      description: "Design and implement quantum algorithms for computational applications.",
      requirements: ["M.S./Ph.D in Physics/Computer Science", "Quantum programming experience", "Knowledge of quantum hardware"]
    },
    {
      id: 4,
      title: "Memory Architecture Designer",
      department: "Memory Solutions",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4-7 years",
      description: "Design high-performance, low-power memory architectures for next-gen applications.",
      requirements: ["B.S./M.S. in Electrical Engineering", "SRAM/Flash memory design", "RTL design skills"]
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