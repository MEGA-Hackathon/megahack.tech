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


// States
import { useState, useEffect } from "react"


// Data
import faqData from "../../utils/data/faq.json"
import teamData from "../../utils/data/team.json"
import imageData from "../../utils/data/gallery.json"


const HomeMain = () => {
    const [faqElements1, setFaqElements1] = useState<any>()
    const [faqElements2, setFaqElements2] = useState<any>()
    const [teamMembers, setTeamMembers] = useState<any>()
    const [galleryImages, setGalleryImages] = useState<any>({
        column1: [],
        column2: [],
        column3: []
    })

    useEffect(() => {
        // Our faq elements
        const faqElements = faqData.map((faq: any, index: any) => {
            return (
                <FaqCard 
                    question={faq.question}
                    answer={faq.answer}
                    key={index}
                />
            )
        })

        const faqLength = faqElements.length;

        // Split the faq elements into two arrays
        setFaqElements1(faqElements.slice(0, Math.ceil(faqLength / 2)));
        setFaqElements2(faqElements.slice(Math.ceil(faqLength / 2), faqLength));


        // Our team members
        setTeamMembers(
            teamData.map((member: any, index: any) => {
                return (
                    <TeamMember
                        name={member.name}
                        role={member.role}
                        image={member.image}
                        key={index}
                    />
                )
            })
        )


        // Our gallery images
        const images = imageData.map((image: any, index: any) => {
            return (
                <img src={image} alt="image" key={index} />
            )
        })
        
        // Split the images into 3 arrays
        const imageLength = images.length;
        const image1 = images.slice(0, Math.ceil(imageLength / 3));
        const image2 = images.slice(Math.ceil(imageLength / 3), Math.ceil(imageLength / 3) * 2);
        const image3 = images.slice(Math.ceil(imageLength / 3) * 2, imageLength);

        setGalleryImages({
            column1: image1,
            column2: image2,
            column3: image3
        })
    }, [])


    return (
        <main>
            {/* Sorry Kai this is quickfix for liability */}
            <p style={{position: "fixed", zIndex: 1000, bottom: 0, width: "100%", padding: 25, backgroundColor: "#faf8b6", borderTopRightRadius: 25, borderTopLeftRadius: 25, alignSelf: "center", fontFamily: "'Montserrat', sans-serif;"}}>Disclaimer: Anything on this page is subject to change without notice as we finalize our plans for MEGA Hackathon 2023.</p>
            <section className="home-main">
                <div className="home-main-subheader">MEGA Hackathon MMXXIII</div>
                <h1>What is MEGA?</h1>
                <p className="home-main-description">
                MEGA is a coalition of high-school and college students who host a hybrid hackathon catered to the United Nations&#39; seventeen sustainable development goals.
                Infusing STEM and UN SDGs, the annual MEGA Hackathon raises awareness for global welfare while instilling passion in computer science students. 
                <br/><br/>Pre-register today to stay updated on the latest news and announcements for MEGA Hackathon 2023.
                </p>
                <div className="home-button-align">
                    <BigButton 
                        text="Pre-Register" 
                        arrow={true} 
                        href="https://airtable.com/embed/shrumYvaiK4au1KQS?backgroundColor=black" 
                        newTab={true}
                    />
                </div>
            </section>
            <section className="home-sponsor-scroll-align" id="sponsors">
                <SponsorScroll />
            </section>
            <section className="home-about">
                <HeaderFormat 
                    subheader="Meet our"
                    header="Community"
                    headerLevel={2}
                    theme="light"
                />
                <InfoSection>
                    <InfoSectionCard 
                        theme="dark" 
                        number={1}
                        header="Motivated & Driven"
                        description="At the core of MEGA is an amazing community of innovators and problem solvers working passionately about creating solutions for the UN's 17 sustainability goals."
                        learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                    />
                    <InfoSectionCard 
                        theme="dark" 
                        number={2}
                        header="Knowledgable & Connected"
                        description="MEGA is backed by a coalition of NGO's, entreprenuers, and tech companies able to provide decades of experiance, guidance, and advice to our members."
                        learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                    />
                    <InfoSectionCard 
                        theme="dark" 
                        number={3}
                        header='Truly "MEGA"'
                        description="Our MEGA Hackathon had 200+ attendees from 20+ countries collaborated with 40+ NGOs and Partners who donated over 50k USD in funding, awards, sponsorships, and internships."
                        learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                    />
                </InfoSection>
            </section>
            <section className="home-participation">
                <SkewedSection>
                    <HeaderFormat 
                        subheader="Why you should"
                        header="Participate in MEGA Hackathon 2023!"
                        headerLevel={2}
                        theme="dark"
                        buttonText="Pre-Register"
                    />
                    <InfoSection>
                        <InfoSectionCard 
                            theme="light" 
                            number={1}
                            header="Collaborate with like-minded individuals"
                            description="Collaborate with talented individuals from around the world passionate about creating solutions for the UN's 17 sustainability goals."
                            learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                        />
                        <InfoSectionCard 
                            theme="light" 
                            number={2}
                            header="Win funding, awards and internships"
                            description="Last year, Megahack had awards worth 50K+ USD. This year, we are looking to expand our prizes and awards to help you take your project to the next level."
                            learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                        />
                        <InfoSectionCard 
                            theme="light" 
                            number={3}
                            header="Grow your STEM skills and capabilities"
                            description="Megahack is a great oppurtunity to earn new skills, learn from mentors and professionals, build your portfolio and confidence!"
                            learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                        />
                    </InfoSection>
                </SkewedSection>
            </section>
            <HomeWhiteSection id="events">
                <HeaderFormat 
                    subheader="Events"
                    header="Improve Your Skills Through Megahack 2023 Events!"
                    description="Can't wait to get started? We have a few hand-crafted resources and classes for you to get started and prepared."
                    headerLevel={2}
                    theme="light"
                    centered={true}
                />
                <div className="home-events-wrapper">
                    <EventCard 
                        image="https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                        title="Digital Storytelling using AI"
                        date="Feburary - April"
                        category="AI/ML"
                        style="Workshop"
                        description="MEGA is teaming up with Columbia PHD students and Professors at Love and Future to educate the youth on the importance of Digital Storytelling"
                        learnMoreLink="https://airtable.com/embed/shrdwnRcqXJgSz8AA?backgroundColor=black"
                        learnMoreHeader="Sign Up"
                    />
                    <EventCard 
                        image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                        title="MEGA Hackathon 2023"
                        date="April 14th; 15th - 16th"
                        category="Competetive"
                        style="Hackathon"
                        description="Like last year, MEGA Hackathon will host another Hackathon event in 2023 themed on real-world problems."
                        learnMoreLink="https://airtable.com/embed/shrumYvaiK4au1KQS?backgroundColor=black"
                        learnMoreHeader="Pre-Register"
                    />
                    <EventCard 
                        image="https://images-ext-2.discordapp.net/external/7aSNtvp2uTD-TslaGZH-LQN7QBm-C4Op6DOfF3oghig/%3Fraw%3Dtrue/https/github.com/MEGA-Hackathon/website-current/blob/main/src/assets/top.png?width=1143&height=857"
                        title="MEGA Hackathon 2022"
                        date="April 1st - 3rd"
                        category="Completed"
                        style="Hackathon"
                        description="Our first annual MEGA Hackathon. It was a blast! Winners took home internships and $50k+ of prizes."
                        learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                        learnMoreHeader="Learn More"
                    />
                </div>
            </HomeWhiteSection>
            <SkewedSection>
                <HeaderFormat 
                    subheader="Information on"
                    header="When and Where is MEGA Hackathon 2023"
                    headerLevel={2}
                    theme="dark"
                />
                <InfoSection>
                    <InfoSectionCard 
                        theme="light" 
                        number={1}
                        header="When is MEGA Hackathon 2023 happening?"
                        description="MEGA Hackathon 2023 is from April 14-16, 2023. "
                    />
                    <InfoSectionCard 
                        theme="light" 
                        number={2}
                        header="Where is MEGA Hackathon 2023?"
                        description="Feel free to attend virtually, but if you are in New Jersey we encourage you to attend in person at a venue (TBA)!"
                    />
                    <InfoSectionCard 
                        theme="light" 
                        number={3}
                        header="Who can attend the hackathon?"
                        description="Everyone! There is no cost to attend, and we welcome all skill levels. Workshops are also offered before the Hackathon!"
                    />
                </InfoSection>
            </SkewedSection>
            
            <HomeWhiteSection id="schedule">
                <HeaderFormat 
                    subheader="Schedule"
                    header="MEGA Hackathon 2023 Schedule"
                    description="TBA - Stay Tuned :). Hackathon dates for 2023 are will be April 14-16, 2023. You will be amongst the first to recieve event updates if you pre-register!"
                    headerLevel={2}
                    theme="light"
                    centered={true}
                />
                <div className="home-button-align">
                    <BigButton 
                        text="Pre-Register" 
                        arrow={true} 
                        href="https://airtable.com/embed/shrumYvaiK4au1KQS?backgroundColor=black" 
                        newTab={true}
                    />
                </div>
                {/* <img src="/other/Megahack Schedule.svg" alt="schedule" className="home-schedule-image" /> */}
            </HomeWhiteSection>
            <SkewedSection>
                <HeaderFormat 
                    subheader="MEGA Hackathon 2023"
                    header="Prizes And Awards"
                    theme="dark"
                    headerLevel={2}
                />
                <InfoSection>
                    <InfoSectionCard 
                        theme="light" 
                        number={1}
                        header="TBD"
                        description="Pre-Register to be the first to know!"
                    />
                    {/* <InfoSectionCard 
                        theme="light" 
                        number={2}
                        header="2nd Place"
                        description="$200 Cash Prize"
                    />
                    <InfoSectionCard 
                        theme="light" 
                        number={3}
                        header="3rd Place"
                        description="$100 Cash Prize"
                    /> */}
                </InfoSection>
            </SkewedSection>
            <HomeWhiteSection>
                <HeaderFormat 
                    subheader="FAQ’s"
                    header="All the answers to your many questions!"
                    // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et aliquet nunc, ut efficitur erat. Fusce elementum, tellus sed fringilla sagittis, massa metus condimentum ligula, sed mattis sapien nunc sed mi."
                    theme="light"
                    centered={true}
                    headerLevel={2}
                />
                <div className="home-faq-main">
                    <div className="home-faq-wrapper">
                        {faqElements1}
                    </div>
                    <div className="home-faq-wrapper">
                        {faqElements2}
                    </div>
                </div>
            </HomeWhiteSection>
            <SkewedSection>
                <HeaderFormat 
                    subheader="Meet our"
                    header="MEGA Team"
                    theme="dark"
                    // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et aliquet nunc, ut efficitur erat. Fusce elementum, tellus sed fringilla sagittis, massa metus condimentum ligula, sed mattis sapien nunc sed mi."
                    headerLevel={2}
                />
                <div className="home-team-wrapper">
                    {teamMembers}
                </div>
            </SkewedSection>
            <HomeWhiteSection>
                <HeaderFormat 
                    subheader="Gallery"
                    header="A Recollection of MEGA Hackathon 2022!"
                    // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et aliquet nunc, ut efficitur erat. Fusce elementum, tellus sed fringilla sagittis, massa metus condimentum ligula, sed mattis sapien nunc sed mi."
                    theme="light"
                    centered={true}
                    headerLevel={2}
                />
                <div className="home-gallery-container">
                    <div className="home-gallery-wrapper">{galleryImages.column1}</div>
                    <div className="home-gallery-wrapper">{galleryImages.column2}</div>
                    <div className="home-gallery-wrapper">{galleryImages.column3}</div>
                </div>
            </HomeWhiteSection>
        </main>
    )
}


export default HomeMain