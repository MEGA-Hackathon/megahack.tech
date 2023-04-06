import LearnMoreButton from "./LearnMoreButton";

type PrizeSectionCardProps = {
    theme: "dark" | "light",
    learnMoreLink?: any,
    number: Number,
    header: String,
    description: String
}

const PrizeSectionCard = ({
    theme,
    learnMoreLink,
    number,
    header,
    description
}: PrizeSectionCardProps) => {
    const themeClass = theme === "dark" ? "light" : "dark";


    return (
        <div className="prize-section-card">
            <p className={`prize-section-number prize-section-number-${themeClass}`}>0{number.toString()}.</p>
            <p className={`prize-section-header prize-section-header-${themeClass}`}>{header}</p>
            <p className={`prize-section-description prize-section-description-${themeClass}`}>{description}</p>
            {   learnMoreLink &&
                <LearnMoreButton learnMoreLink={learnMoreLink} className="prize-section-button" />
            }
        </div>
    )
}

export default PrizeSectionCard