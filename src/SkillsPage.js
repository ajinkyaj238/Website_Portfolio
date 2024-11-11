import React, { useEffect, useRef } from 'react';
import './SkillsPage.css'; // Ensure your CSS is imported

const SkillsPage = () => {
    const skillsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            skillsRef.current.forEach((box, index) => {
                if (box && box.getBoundingClientRect().top < window.innerHeight) {
                    setTimeout(() => {
                        box.classList.add('show');
                    }, index * 200); // Delay each box by 200ms
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const skillsData = [
        {
            title: 'Software',
            items: ['C', 'C++', 'Python', 'SystemVerilog', 'Assembly', 'MetroScript', 'Java', 'Latex', 'HLS']
        },
        {
            title: 'Data',
            items: ['Matlab', 'Pandas', 'Numpy', 'Scipy', 'Qt', 'SQL']
        },
        {
            title: 'Tools',
            items: ['React', 'Flask', 'PostgresSQL', 'MongoDB', 'Git']
        },
        {
            title: 'Hardware',
            items: ['Vivado', 'Vitis', 'Oscilloscope', 'Multimeter', 'Function-Generator', 'LTSpice', 'PSpice', 'Soldering','Linux']
        }
    ];

    return (
        <div className="skills-container">
            {skillsData.map((section, index) => (
                <div className="skills-box" key={index} ref={(el) => (skillsRef.current[index] = el)}>
                    <h3 className="skills-title">{section.title}</h3>
                    <ul>{section.items.map((item, i) => (
                            <li className="skills-item" key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );









};

export default SkillsPage;
