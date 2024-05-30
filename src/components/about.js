import "../styles/about.css"
import muaz from "../assets/muaz.jpeg"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/Vienna', hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/Vienna', hour: '2-digit', minute: '2-digit' }));
        }, 30000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="center appearanimate">
            <div className="card">
                <div className="card-background">
                    Developer & Freelancer
                </div>
                <div className="card-picture">
                    <img 
                        src={muaz}
                        alt="Muaz"
                    />
                </div>
                <div className="card-header">
                    <div className="card-name">
                        <p className="realname">Muaz Ugur</p>
                        <p className="username">@fateassassin</p>
                    </div>
                    <div className="card-contact">
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="card-content">
                    <p>Skilled developer proficient in multiple programming languages taking on different challenges.</p>
                </div>
                <div className="card-stats">
                    <p><span className="numberHighlight">10+</span> customers</p>
                    <p><span className="numberHighlight">40+</span> works done</p>
                </div>
                <div className="card-buttons">
                    <div><i className="bi bi-geo"></i> Tyrol, Austria</div>
                    <div><i className="bi bi-clock"></i> {currentTime}</div>
                    <a href="https://github.com/fateassassin"><i className="bi bi-github"></i> Github</a>
                </div>
            </div>
        </div>
    );
}
