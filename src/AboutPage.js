import React, { useEffect, useRef } from 'react';
import './AboutPage.css'; // Ensure your CSS is imported

const AboutPage = () => {
    const aboutMeRef = useRef(null);
    const educationRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const aboutMe = aboutMeRef.current;
            const education = educationRef.current;

            if (aboutMe && aboutMe.getBoundingClientRect().top < window.innerHeight) {
                aboutMe.classList.add('show');
            }

            if (education && education.getBoundingClientRect().top < window.innerHeight) {
                education.classList.add('show');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="about-page">
            <div className="about-me" ref={aboutMeRef}>
                <h2 style={{textAlign: "center"}}>A little more about me:</h2>
                <p style={{textAlign: "justify"}}>
                Growing up in Singapore, I loved playing video games and spent countless hours researching the best CPUs and GPUs to build the ultimate gaming PC. 
                When I finally managed to build it, I realized I was more interested in the process of learning about computer hardware than playing the games. 
                This curiosity led me to pursue Electrical and Computer Engineering at Northeastern University.
                As an ECE major, I have been exposed to many different subfields that require the development of a wide range of skills. 
                These include C/C++ for hardware/software co-design, along with Python and MATLAB for data-driven engineering. Over the years, I have worked on and developed numerous projects that have helped me build a strong foundation in both hardware and software design. 
                You can take a look at some of my skills and projects by scrolling down.
                That said, the most valuable skill I've developed is the ability to quickly learn new technologies and concepts and apply them effectively to any project I undertake. <br /><br />
                <strong>There is no technical skill that I cannot learn and apply to a project. It all comes down to the project that I work on and what would be the most efficient tool I can use to get the job done.</strong>
                </p>
            </div>
            <div className="education" ref={educationRef}>
                <h2 style={{textAlign: "center"}}>Technical stuff:</h2>
                <p style={{textAlign: "justify"}}>
                    <strong>Northeastern University</strong> - Boston, MA<br />
                    <strong>Degree:</strong> BSEE Electrical and Computer Engineering<br />
                    <strong>Graduating:</strong> May, 2025.<br />
                    <strong>Relevant Coursework:</strong> High Performance Computing, HW-SW Codesign for FPGA-Based Systems, Computer Architecture, Digital Design & Computer Organization, Electronic Design, Electronics, Linear Systems, Electromagnetics, Networks, Engineering Algorithms, Embedded Design, Circuits and Signals, and Discrete Structures.<br />
                    <strong>Interests:</strong> Hardware and Software Design, Semiconductors and Micromachining, Signal Processing and Analysis<br />
                    <strong>Extracurriculars:</strong> Northeastern IEEE Treasurer. 
                </p>
                <img src="Images/northeastern_logo.png" alt="" className="education-image" />
            </div>
        </div>
    );
};

export default AboutPage; 

