type LearnMoreButtonProps = {
    learnMoreLink: any,
    className: any
    headerOverride? : any
}

const LearnMoreButton = ({
    learnMoreLink,
    className,
    headerOverride
}: LearnMoreButtonProps) => {
    return (
        <a className={`learn-more-button ${className}`} href={learnMoreLink} target="_blank" rel="noreferrer">
            <p>{headerOverride ? headerOverride : "Learn More"}</p>
            <i className="fa-solid fa-angle-right"></i>
        </a>
    )
}

export default LearnMoreButton