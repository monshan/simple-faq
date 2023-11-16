import { useState } from "react"

export default function Question({ question, answer, open = false }) {
    const [isOpen, setIsOpen] = useState(open)

    const handleClick = (e) => setIsOpen(!isOpen)

    return (
        <div 
            className="grid grid-cols-12 gap-2 border-2 border-solid border-black rounded-lg p-4 items-center"
            onClick={handleClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={"w-4 h-4 row-start-1 " + `${isOpen && "rotate-90"}`} >
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
            <p className="row-start-1 justify-self-start col-span-11">{question}</p>
            {isOpen && <p className="text-gray-500 pt-4 col-start-2 col-span-11">{answer}</p>}
        </div>
    )
}