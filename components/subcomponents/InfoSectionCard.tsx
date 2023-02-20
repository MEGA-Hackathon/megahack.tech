import LearnMoreButton from "./LearnMoreButton";

type InfoSectionCardProps = {
    theme: "dark" | "light",
    learnMoreLink?: any,
    number: Number,
    header: String,
    description: String
}

const InfoSectionCard = ({
    theme,
    learnMoreLink,
    number,
    header,
    description
}: InfoSectionCardProps) => {
    const themeClass = theme === "dark" ? "light" : "dark";


    return (
        <div className="info-section-card">
            <p className={`info-section-number info-section-number-${themeClass}`}>0{number.toString()}.</p>
            <p className={`info-section-header info-section-header-${themeClass}`}>{header}</p>
            <p className={`info-section-description info-section-description-${themeClass}`}>{description}</p>
            {   learnMoreLink &&
                <LearnMoreButton learnMoreLink={learnMoreLink} className="info-section-button" />
            }
        </div>
    )
}

export default InfoSectionCard