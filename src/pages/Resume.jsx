import resume from '../assets/resume.pdf';

const Resume = () => {
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='w-full h-full flex justify-center items-center'>
                <iframe 
                    title="Resume"
                    src={resume}
                    className='w-[95%] h-[80%] md:w-[80%] md:h-[70%]' 
                    type='application/pdf'
                >
                    This browser does not support PDFs. Please download the PDF to view it: 
                    <a href={resume}>Download PDF</a>
                </iframe>
            </div>
        </div>
    );
};

export default Resume;