import { useState } from "react";
import "../styles/alert.css";

export default function Alert({ message, type }) {
    const [show, setShow] = useState(true);

    if (show === true) {
        setTimeout(() => {
            setShow(false);
        }, 3000);
    }
    return (
        <div className={`${show===true ? "show" : "fade-out"}`}>
            <div className={`alert ${type}`}>
                <p>{message}</p>
            </div>
        </div>
    );
}