// Subcomponents
import Button from "../subcomponents/Button"
import BigButton from "../subcomponents/BigButton"
import SponsorScroll from "../subcomponents/SponsorScroll"
import InfoSectionCard from "../subcomponents/InfoSectionCard"
import EventCard from "../subcomponents/EventCard"
import FaqCard from "../subcomponents/FaqCard"
import TeamMember from "../subcomponents/TeamMember"


// Layouts
import HeaderFormat from "../layouts/HeaderFormat"
import InfoSection from "../layouts/InfoSection"
import SkewedSection from "../layouts/SkewedSection"
import HomeWhiteSection from "../layouts/HomeWhiteSection"


const Class = () => {

    const classes : Map<string, string> = new Map();

    classes.set("Class 1", "https://www.youtube.com/watch?v=BSCsrFMRjlI");
    classes.set("Class 2", "N/A");
    classes.set("Class 3 (part 1)", "https://www.youtube.com/watch?v=bZJZ0lpJ51Q");
    classes.set("Class 3 (part 2)", "https://www.youtube.com/watch?v=HXxtOYNvw34");
    classes.set("Class 3 (part 3)", "https://www.youtube.com/watch?v=zCviUMNsv38");
    classes.set("Class 4", "https://www.youtube.com/watch?v=aL4Yfu9jGic");
    classes.set("Class 5", "https://www.youtube.com/watch?v=vV1C6u8rSr8");
    classes.set("Class 6 (Part 1)", "https://www.youtube.com/watch?v=q6dZ38Ti1yo");
    classes.set("Class 6 (Part 2)", "https://www.youtube.com/watch?v=xNOZuaDm-Sg");
    classes.set("Class 6 (Part 3)", "https://www.youtube.com/watch?v=CZrTrDLBL2A");
    classes.set("Class 7", "https://www.youtube.com/watch?v=h2GwpAmmMPg");
    classes.set("Class 8", "https://www.youtube.com/watch?v=oQgV1jkUJ_g");

    return (
        <main>
            <img src={"https://cdn.discordapp.com/attachments/1081712754253119508/1089969260916391986/30f5af1c-2d13-43a6-bff6-69d805528b18.jpg"} style={{width: "100%", height: "50vh", objectFit: "cover"}}/>
            <center style={{
                position: "absolute",
                top: "17vh",
                color: "white",
                fontSize: "3rem",
                width: "50px",
                left: "25vw",
                fontWeight: 700,
                fontFamily: "'Poppins', sans-serif",
            }}>
                DIGITAL STORYTELLING WITH ARTIFICIAL INTELLIGENCE
            </center>
            <div style={{marginBottom: "100px"}}/>
            <HomeWhiteSection id="vids">
                <HeaderFormat 
                    subheader="Videos"
                    header="Watch recorded class lectures"
                    description="These videos will prepare you for the hackathon and are those from the course!"
                    headerLevel={2}
                    theme="light"
                    centered={true}
                />
                <div className="home-events-wrapper">
                    {Array.from(classes.keys()).map((key : string, index : number) => {
                        const result : string | null | undefined = classes.get(key);
                        return (
                            <EventCard 
                                key={index}
                                image={"https://i.ytimg.com/vi/" + result?.replace("https://www.youtube.com/watch?v=", "") + "/hqdefault.jpg"}
                                title={""}
                                date=""
                                category=""
                                style={key}
                                description=""
                                learnMoreLink={classes.get(key)}
                                learnMoreHeader={classes.get(key)}
                            />
                        )
                    })}
                </div>
            </HomeWhiteSection>
        </main>
    )
}


export default Class