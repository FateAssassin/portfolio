import programmer from '../assets/programmer.svg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main className="flex flex-col md:flex-row items-center justify-center h-screen w-screen md:pt-16 fadeIn z-10 relative">
            
            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 z-0 md:hidden"></div>
            
            <div className="absolute inset-0 bg-[url('.\\assets\\responsive.svg')] bg-center bg-no-repeat bg-cover opacity-10 z-0 md:hidden"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-[90%]">
                <section className="leading-loose text-center md:text-left px-6 md:px-10 md:bg-none backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border border-white/20 rounded-lg p-8 shadow-lg md:shadow-none md:backdrop-blur-none md:bg-transparent md:dark:bg-transparent md:border-none">
                    <header>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">Hi! <br /> I am Muaz</h1>
                        <h2 className="mb-6 text-xl md:text-3xl font-medium">Developer & Freelancer</h2>
                    </header>
                    <p className="mb-6 text-sm md:text-base">
                        Aspiring 18-year-old developer and student based in Austria, <br />
                        passionate about innovative solutions and <br />
                        continuously learning new technologies.
                    </p>
                    <nav className="block sd:flex text-[16px] md:text-[20px] font-semibold space-y-4 md:space-y-0 md:space-x-4">
                        <Link to="/projects" className="block md:inline-block px-4 py-2 bg-blue-800 border-blue-600 text-white rounded-lg hover:bg-blue-800/80 duration-200 dark:bg-blue-950 dark:hover:bg-blue-800">
                            See Projects
                        </Link>
                        <Link to="/resume" className="block md:inline-block px-4 py-2 border border-blue-800/80 rounded-lg hover:bg-blue-800/80 duration-200 hover:text-white">
                            View Resume
                        </Link>
                    </nav>
                </section>
                <img src={programmer} alt="programmer" className="mt-8 md:mt-0 h-48 md:h-64 lg:h-80 xl:h-96 object-contain ml-6 mr-6 hidden md:block" />
            </div>
        </main>
    );
}
