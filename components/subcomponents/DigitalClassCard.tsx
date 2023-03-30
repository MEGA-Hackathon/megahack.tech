import LearnMoreButton from "./LearnMoreButton"

type EventCardProps = {
    videoLink?: String,
    learnMoreLink?: String,
    name?: String
}

const DigitalClassCard = ({
    videoLink = "",
    learnMoreLink = "",
    name = ""
}: EventCardProps) => {
    return (
        <div className="event-card">
            <div className="event-card-image" style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#000",
                borderRadius: 25,
                backgroundImage: "url('https://i.pinimg.com/originals/a3/94/84/a394841d08da55f893616b74e07f00a5.jpg')",
            }}>
                {videoLink != "N/A" && <iframe style={{borderRadius: 25, height: "100%", width: "100%"
                }} src={"https://www.youtube.com/embed/" + videoLink} title="Player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />}
                {videoLink == "N/A" && <p style={{
                    fontSize: 25,
                    fontFamily: "Poppins",
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(10px)",
                    padding: 25,
                }}>No video for {name}</p>}
            </div>
            <div className="event-card-content">
                { (learnMoreLink && videoLink != "N/A") && <LearnMoreButton headerOverride={name} learnMoreLink={learnMoreLink} className="event-card-button"/>}
            </div>
        </div>
    )
}

export default DigitalClassCard