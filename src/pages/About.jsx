import Muazfront from '../assets/muaz-front.jpeg';

export default function About() {
    return (
        <div className="relative flex justify-center items-center min-h-screen p-6 fadeIn z-10">
            <div className="flex flex-col md:flex-row shadow-xl p-8 rounded-lg max-w-4xl w-full dark:bg-gray-800">
            
                <div className="flex flex-col items-center md:items-start text-center md:text-left md:pr-8 ">
                    <img src={Muazfront} alt="Muaz" className="rounded-full border-blue-500 border-4 shadow-md mb-4 dark:border-blue-300 w-40 md:w-auto" />
                    <p className="font-bold text-2xl dark:text-white">Muaz Ugur</p>
                    <p className="font-medium text-blue-500 mb-2 dark:text-blue-300">Developer & Freelancer</p>
                    <p className="flex items-center font-semibold text-gray-600 dark:text-gray-300">
                        <i className="bi bi-pin-angle mr-2"></i> | Austria
                    </p>
                </div>

                {/* About Section */}
                <div className="flex items-center justify-center md:justify-start text-center md:text-left">
                    <div>
                        <p className="text-4xl font-bold text-blue-800 dark:text-blue-300 hidden md:block">About Me</p>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            My name is Muaz, I'm 19 years old, and I am a programmer based in Austria, Innsbruck.
                            I specialize in web development and automation. Besides coding, I'm passionate
                            about learning new technologies and taking on new challenges in the tech world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}