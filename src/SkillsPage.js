import React from 'react';
import './SkillsPage.css'; // Create this CSS file for styling

const SkillsPage = () => {
    const skillsData = [
        {
            title: 'Software',
            items: ['C', 'C++', 'Python', 'SystemVerilog', 'Assembly', 'MetroScript', 'SQL', 'Java', 'Latex', 'HLS']
        },
        {
            title: 'Data',
            items: ['Pandas', 'Numpy', 'Scipy', 'Qt', 'SQL']
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
                <div className="skills-box" key={index}>
                    <h3>{section.title}</h3>
                    <ul>
                        {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SkillsPage;

