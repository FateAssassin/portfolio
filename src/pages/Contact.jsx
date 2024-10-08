import { set, useForm} from "react-hook-form";
import { useEffect, useState } from "react";
import Alert from "./Alert";

export default function Contact() {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onSubmit = async (data) => {
        const webhookUrl = "https://discord.com/api/webhooks/1209632042585686106/WDI21cthzB4NDhewMIgL3kzuIXszNrSou8s4__taB2HUC-lDxU2igVQaym8E5ByBxLNm";

        const payload = {
            content: "<@452570376577220608>", 
            embeds: [
                {
                    title: "New message from portfolio!",
                    fields: [
                        {
                            name: "Name",
                            value: data.name
                        },
                        {
                            name: "Email",
                            value: data.email
                        },
                        {
                            name: "Message",
                            value: data.message
                        }
                    ],
                    color: 0x5865F2
                }
            ],
        };

        try {
            await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            setSuccess(true);
            setValue("name", "");
            setValue("email", "");
            setValue("message", "");
        } catch (error) {
            console.error("Error sending message:", error);
            setError(true);
            setValue("name", "");
            setValue("email", "");
            setValue("message", "");
        }
    };

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                setSuccess(false);
            }, 4100);
        }
        else if (error) {
            setTimeout(() => {
                setError(false);
            }, 4100);
        }
    }, [success, error]);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            {success && <Alert success />}
            {error && <Alert error />}
            <div className="flex flex-col shadow-xl py-8 rounded-lg max-w-2xl w-full dark:bg-gray-800 justify-between">
                <p className="text-2xl text-center pb-10">Contact me!</p>
                <div className="flex flex-col md:flex-row justify-between w-full px-5 md:px-10">
                    <div className="flex flex-col items-center md:items-start w-full md:w-1/2 space-y-4 mb-8 md:mb-0">
                        <a href="https://instagram.com/muazugur" className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:opacity-90 transition-opacity w-full justify-center">
                            <i className="bi bi-instagram text-lg"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="https://discord.com/users/452570376577220608" className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:opacity-90 transition-opacity w-full justify-center">
                            <i className="bi bi-discord text-lg"></i>
                            <span>Discord</span>
                        </a>
                        <a href="mailto:muazugur@gmail.com" className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-700 text-white hover:opacity-90 transition-opacity w-full justify-center">
                            <i className="bi bi-envelope text-lg"></i>
                            <span>muazugur@gmail.com</span>
                        </a>
                    </div>

                    <div className="hidden md:block border border-gray-300 dark:border-gray-700 mx-5"></div>
                    <hr  className="md:hidden mb-5 border-gray-500/50"/>

                    <div className="w-full md:w-1/2">
                        <form className="flex flex-col space-y-4 text-black" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Name" {...register("name", { required: true })} className="p-2 rounded-lg border border-gray-300 dark:border-gray-700" />
                            {errors.name && <span className="text-red-500 leading-[1px]">Name is required</span>}
                            <input type="email" placeholder="Email" {...register("email", { required: true })} className="p-2 rounded-lg border border-gray-300 dark:border-gray-700" />
                            {errors.email && <span className="text-red-500 leading-[1px]">Email is required</span>}
                            <textarea placeholder="Message" {...register("message", { required: true })} className="p-2 rounded-lg border border-gray-300 dark:border-gray-700"></textarea>
                            {errors.message && <span className="text-red-500 leading-[1px]">Message is required</span>}
                            <button type="submit" className="p-2 rounded-lg bg-blue-600 text-white hover:opacity-90 transition-opacity">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

