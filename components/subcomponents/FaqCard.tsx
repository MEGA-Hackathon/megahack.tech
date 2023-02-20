import { useState } from "react"

type FaqCardProps = {
    question: String,
    answer: String
}

const FaqCard = ({
    question,
    answer
}: FaqCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className="faq-card" onClick={toggleOpen}>
            <div className="faq-card-question-container">
                <p>{question}</p>
                <p>+</p>
            </div>
            <div className={`faq-card-answer-container ${isOpen && "faq-card-answer-container-open"}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat magna odio, id scelerisque odio eleifend id. Integer eu sagittis purus.
            </div>
        </div>
    )
}

export default FaqCard