import React, { useEffect } from 'react';
import './JobsSection.css'; // Ensure your CSS is imported

const JobsSection = () => {
    const jobs = [
        {
            company: 'Mathworks Lab for Fintech and Quantitative Analytics',
            position: 'Developer for Sectoral Stress',
            duration: 'July 2024 - January 2025',
            description: ''
        },
        {
            company: 'Boston Micromachines Corporation',
            position: 'Engineering COOP',
            duration: 'September 2023 - December 2023',
            description: 'Assisted in the development of internal tools and automation scripts.'
        }
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
            <h2>Jobs</h2>
            {jobs.map((job, index) => (
                <div
                    key={index}
                    className={`job-entry ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
                >
                    <h3>{job.company}</h3>
                    <p><strong>Position:</strong> {job.position}</p>
                    <p><strong>Duration:</strong> {job.duration}</p>
                    <p>{job.description}</p>
                </div>
            ))}
        </div>
    );
};

export default JobsSection;
