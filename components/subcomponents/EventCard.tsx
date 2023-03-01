import LearnMoreButton from "./LearnMoreButton"

type EventCardProps = {
    image: any,
    category: String,
    date: String,
    title: String,
    description: String,
    learnMoreLink: String,
    learnMoreHeader: String,
    style: String
}

const EventCard = ({
    image,
    category,
    date,
    title,
    description,
    learnMoreLink,
    learnMoreHeader,
    style
}: EventCardProps) => {
    return (
        <div className="event-card">
            <div className="event-card-image" style={{background: `url("${image}")`}}>
                <div className="event-card-image-overlay">
                    <div>
                        <p className="event-card-style">{style}</p>
                        <p className="event-card-date">{date}</p>
                    </div>
                    <p className="event-card-category">{category}</p>
                </div>
            </div>
            <div className="event-card-content">
                <p className="event-card-header">{title}</p>
                <p className="event-card-description">{description}</p>
                <LearnMoreButton headerOverride={learnMoreHeader} learnMoreLink={learnMoreLink} className="event-card-button"/>
            </div>
        </div>
    )
}

export default EventCard