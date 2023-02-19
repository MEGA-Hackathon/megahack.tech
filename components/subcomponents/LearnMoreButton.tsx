type LearnMoreButtonProps = {
    learnMoreLink: any,
    className: any
}

const LearnMoreButton = ({
    learnMoreLink,
    className
}: LearnMoreButtonProps) => {
    return (
        <a className={`learn-more-button ${className}`} href={learnMoreLink} target="_blank" rel="noreferrer">
            <p>Learn More</p>
            <i className="fa-solid fa-angle-right"></i>
        </a>
    )
}

export default LearnMoreButton