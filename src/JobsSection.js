import React, { useEffect } from 'react';
import './JobsSection.css'; // Ensure your CSS is imported

const JobsSection = () => {
    const jobs = [
        {
            company: 'Mathworks Lab for Fintech and Quantitative Analytics',
            position: 'Developer for Sectoral Stress',
            duration: 'July 2024 - January 2025',
            description: [
                'Developed and maintained web applications using React and Node.js.',
                'Collaborated with cross-functional teams to define, design, and ship new features.',
                'Optimized applications for maximum speed and scalability.',
                'Implemented responsive design and ensured cross-browser compatibility.'
            ]
        },
        {
            company: 'Boston Micromachines Corporation',
            position: 'Engineering COOP',
            duration: 'September 2023 - December 2023',
            description: [
                'Automated workflow of Zygo-Verifire interferometer via control using MetroScript that was implemented within the clean room production software.',
                'Optimized production software using QT multi threading through workers for different back-end operations and front-end widgets, significantly accelerating task operation.',
                'Applied Zernike surfaces on deformable mirrors, managing data with SQLite and Numpy/Pandas, speeding production tests.',
                'Enhanced batch reports for the company’s interferometer using SQL Lite, Pandas/Numpy, Matplotlib, html and javascript.',
                'Conducted thermal tests on deformable mirrors, assessing functionality under high-intensity lasers and tested additions to automated programs on important production equipment in the clean room.'
            ]
        },
    ];

    useEffect(() => {
        const jobEntries = document.querySelectorAll('.job-entry');

        const handleScroll = () => {
            jobEntries.forEach((entry) => {
                const rect = entry.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.9) {
                    entry.classList.add('show');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="jobs-section">
            <h2>Work Experience</h2>
            {jobs.map((job, index) => (
                <div
                    key={index}
                    className={`job-entry ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
                >
                    <h3>{job.company}</h3>
                    <p><strong>Position:</strong> {job.position}</p>
                    <p><strong>Duration:</strong> {job.duration}</p>
                    <ul>
                        {job.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default JobsSection;

