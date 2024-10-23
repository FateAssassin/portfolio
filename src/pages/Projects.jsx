import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import todo from '../assets/projects/todo.png';
import reconnect from '../assets/projects/reconnect.png';
import github from '../assets/projects/github.jpg';

const ProjectCard = ({ project, onSelect }) => (
    <motion.li
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1 }}
        className="bg-gray-200/10 hover:bg-gray-500/10 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl flex flex-col justify-between"
    >
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {project.name}
            </h2>
            <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.shortDescription || project.description}
            </p>
        </div>
        <button
            className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            onClick={() => onSelect(project)}
        >
            View Details
        </button>
    </motion.li>
);

const ProjectModal = ({ project, onClose }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto"
        onClick={onClose}
    >
        <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
        >
            <button
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                onClick={onClose}
                aria-label="Close Modal"
            >
                &times;
            </button>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {project.name}
            </h2>
            <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover rounded-md mb-6"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-6">
                {project.description}
            </p>
            {project.repoLink && (
                <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
                >
                    {project.buttonText}
                </a>
            )}
        </motion.div>
    </motion.div>
);

const Projects = () => {
    const [projects] = useState([
        {
            name: 'To-Do List App',
            description:
                'My selfmade To-Do List App using React has a simple and clean design. It allows you to add and delete tasks. The To-Do List is stored in the local storage of your browser and therefore reduces loading time.',
            shortDescription:
                'A selfmade To-Do List App using React and local storage.',
            image: todo,
            buttonText: 'View Project',
            repoLink: 'https://to-do-app-ten-beige.vercel.app/',
        },
        {
            name: 'Reconnect',
            description:
                'Reconnect offers a wide range of services on Discord. This includes a Discord-Bot and a Discord-Server. The designs of the services are modern and user-friendly. The services are also easy to use, understand, and the prices are fair.',
            shortDescription: 'Provides a wide range of services on Discord.',
            image: reconnect,
            buttonText: 'Learn more',
            repoLink: 'https://discord.gg/NpAU73vCFz',
        },
        {
            name: 'GitHub Profile',
            description:
                'You may see more of my projects on my GitHub profile. Feel free to explore and contribute!',
            image: github,
            buttonText: 'View Profile',
            repoLink: 'https://github.com/fateassassin/',
        },
    ]);

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 fadeIn">
            <div className="max-w-7xl">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onSelect={setSelectedProject}
                        />
                    ))}
                </ul>
            </div>
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
