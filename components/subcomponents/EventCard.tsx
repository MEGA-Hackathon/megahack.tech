import LearnMoreButton from "./LearnMoreButton"

type EventCardProps = {
    image: any,
    category: String,
    date: String,
    title: String,
    description: String,
    learnMoreLink: String,
    style: String
}

const EventCard = ({
    image,
    category,
    date,
    title,
    description,
    learnMoreLink,
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
                <LearnMoreButton learnMoreLink="https://mega-hack-2022-spring.devpost.com/" className="event-card-button"/>
            </div>
        </div>
    )
}

export default EventCard