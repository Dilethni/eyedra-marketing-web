import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface TeamMember {
    name: string;
    linkedin?: string;
    github?: string;
    image: string;
}

const Team: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            name: 'Ishan Dakshina',
            github: 'https://github.com/IshanD101',
            linkedin: 'https://www.linkedin.com/in/ishan-dakshina-6a0454248',
            image: '/ish.jpg', // Corrected image path
        },
        {
            name: 'Sanjula Lakshan',
            github: 'https://github.com/Sanjula-lakshan',
            linkedin: 'https://www.linkedin.com/in/sanjula-rathnamalala-163643294',
            image: '/sanj.JPG', // Corrected image path
        },
        {
            name: 'Yohan Joshua',
            github: 'https://github.com/Joshu03',
            linkedin: 'https://www.linkedin.com/in/yohan-joshua-b32953351',
            image: '/josh.jpeg', // Corrected image path
        },
        {
            name: 'Dilethni Abeysinghe',
            github: 'https://github.com/Dilethni',
            linkedin: 'https://www.linkedin.com/in/dilethni-abeysinghe-402ba12ab/',
            image: '/dile.jpeg', // Corrected image path
        },
        {
            name: 'Chathnindu Ranasighe',
            github: 'https://github.com/alicedoe',
            linkedin: 'https://www.linkedin.com/in/chathnindu-dilmith-ranasinghe/',
            image: '/chath.jpeg', // Corrected image path
        },
        {
            name: 'Pavithri Pabasara',
            github: 'https://github.com/Pavithripabasara',
            linkedin: 'https://www.linkedin.com/in/pavithri-pabasara-16550a333/?originalSubdomain=lk',
            image: '/pav.jpeg', // Corrected image path
        },
    ];

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-left mt-20 mb-8 font-lobster">Meet Our Team</h1> {/* Added font-lobster */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white p-6 rounded-lg shadow-lg text-center"
                    >
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-48 h-48 object-cover mx-auto mb-4 rounded-lg"
                        />
                        <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                        <div className="flex justify-center gap-4">
                            {member.github && (
                                <a 
                                    href={member.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                            )}
                            {member.linkedin && (
                                <a 
                                    href={member.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Team;