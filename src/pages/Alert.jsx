export default function Alert(prop){
    if (prop.success){
        return (
            <div className="bg-white dark:bg-gray-700 rounded-lg dark:border-l-lime-700 dark:border-gray-700 shadow-xl absolute top-44 border px-5 py-2 border-l-lime-600 border-l-[10px] fadeInOut">
                <p>Message sent</p>
                <p className="text-gray-400 text-xs">Keep an eye out for emails in the next hours!</p>
            </div>
        );
    } else if (prop.error){
        return (
            <div className="bg-white dark:bg-gray-700 rounded-lg dark:border-l-red-700 dark:border-gray-700 shadow-xl absolute top-44 border px-5 py-2 border-l-red-600 border-l-[10px] fadeInOut dark:border-0">
                <p>Error sending message</p>
                <p className="text-gray-400 text-xs">Please try again later</p>
            </div>
        );
    }
}