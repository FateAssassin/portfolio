import { Link } from "react-router-dom";

export default function PageNotFound() {
  const quotes = [
    "The page you are looking for is lost in space.",
    "Looks like you have taken a wrong turn somewhere.",
    "Looks like this page has gone fishing.",
    "How did you end up here anyway?",
    "This page is as existent as an unicorn.",
  ]
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="rounded-lg shadow-md dark:bg-gray-800 p-8 max-w-md w-full text-center items-center">
        <h1 className="text-6xl font-bold text-red-400 hover:animate-pulse cursor-default">Error 404</h1>
        <div>
          <p className="mt-4 text-xl text-gray-400">Looks like this page doesn't exist.</p>
          <p className="mt-1 mb-4 text-sm text-gray-500 opacity-70">{randomQuote}</p>
        </div>
        <Link to="/" className="cursor-pointer text-center flex justify-center items-center p-2 rounded-lg bg-blue-600 text-white hover:opacity-90 transition-opacity">
          Go back Home
        </Link>
      </div>
    </div>
  );
}