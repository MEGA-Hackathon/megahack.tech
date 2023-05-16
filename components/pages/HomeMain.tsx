// Subcomponents
import Button from "../subcomponents/Button"
import BigButton from "../subcomponents/BigButton"
import SponsorScroll from "../subcomponents/SponsorScroll"
import InfoSectionCard from "../subcomponents/InfoSectionCard"
import EventCard from "../subcomponents/EventCard"
import FaqCard from "../subcomponents/FaqCard"
import TeamMember from "../subcomponents/TeamMember"
import SponsorGallery from "../subcomponents/SponsorGallery"


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
import imageData2023 from "../../utils/data/gallery2023.json"
import PrizeSection from "../layouts/PrizeSection"
import PrizeSectionCard from "../subcomponents/PrizeSectionCard"


const HomeMain = () => {
    const [faqElements1, setFaqElements1] = useState<any>()
    const [faqElements2, setFaqElements2] = useState<any>()
    const [teamMembers, setTeamMembers] = useState<any>()
    const [galleryImages, setGalleryImages] = useState<any>({
        column1: [],
        column2: [],
        column3: []
    })

    const [galleryImages2023, setGalleryImages2023] = useState<any>({
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

        // Our gallery images
        const images2 = imageData2023.map((image: any, index: any) => {
            // console.log(image)
            return (
                <img src={image} alt="image" key={index} />
            )
        })
        
        // Split the images into 3 arrays
        const imageLength2 = images2.length;
        const image12 = images2.slice(0, Math.ceil(imageLength / 3));
        const image22 = images2.slice(Math.ceil(imageLength2 / 3), Math.ceil(imageLength2 / 3) * 2);
        const image32 = images2.slice(Math.ceil(imageLength2 / 3) * 2, imageLength2);

        setGalleryImages2023({
            column1: image12,
            column2: image22,
            column3: image32
        })
    }, [])


    return (
        <main>
            {/* Sorry Kai this is quickfix for liability */}
            <a href="#events" style={{position: "fixed", zIndex: 1000, top: 0, width: "100%", padding: 25, backgroundImage: "linear-gradient(rgba(0, 255, 145, 1), rgba(255, 255, 0, 1))", borderBottomRightRadius: 25, borderBottomLeftRadius: 25, alignSelf: "center", fontFamily: "'Montserrat', sans-serif;"}}>NEW! Check out the new MEGA Events for this summer!</a>
            {/* <a href="https://live.megahack.tech"><img src="https://media.discordapp.net/attachments/857650733233995776/1096850122350010580/3d_gradient_sphere_5k-other_1_1.png" style={{width: "100%"}}/></a> */}
            <section className="home-main">
                <div className="home-main-subheader">MEGA Hackathon MMXXIII</div>
                <h1>What is MEGA?</h1>
                <p className="home-main-description">
                MEGA is a coalition of high-school and college students who host a hybrid hackathon catered to the United Nations&#39; seventeen sustainable development goals.
                Infusing STEM and UN SDGs, the annual MEGA Hackathon raises awareness for global welfare while instilling passion in computer science students. 
                <br/><br/>MEGA Hackathon 2023 has ended. View Summary Below.
                </p>
                <div className="home-button-align">
                    <BigButton 
                        text="View Summary" 
                        arrow={true} 
                        href="https://hack2023.megahack.tech" 
                        newTab={true}
                    />
                </div>
            </section>
            <SponsorGallery 
                sponsors={[
                    "1password.jpeg",
                    "axure.jpeg",
                    "echo3d.jpeg",
                    "gar.png",
                    "gather.png",
                    "hotel_agni.png",
                    "hyper_ex.jpeg",
                    "interview_cake.jpeg",
                    "jet_brains.jpeg",
                    "love_&_future.png",
                    "shawls4shelters.jpg",
                    "startup_brite.jpg",
                    "taskade.png",
                    "TIM.jpg",
                    "twilio.jpeg",
                    "voiceflow.jpeg",
                    "xyz.png",
                    "ycf.png"
                ]}
            />
            {/* <div style={{height: 100}}/> */}
            {/* <HomeWhiteSection>
                <HeaderFormat 
                    subheader="Greetings from Rutgers Prep!"
                    header="From the In-Person Venue @ MEGA Hackathon 2023"
                    // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et aliquet nunc, ut efficitur erat. Fusce elementum, tellus sed fringilla sagittis, massa metus condimentum ligula, sed mattis sapien nunc sed mi."
                    theme="light"
                    centered={true}
                    headerLevel={2}
                />
                <div className="home-gallery-container">
                    <div className="home-gallery-wrapper">{galleryImages2023.column1}</div>
                    <div className="home-gallery-wrapper">{galleryImages2023.column2}</div>
                    <div className="home-gallery-wrapper">{galleryImages2023.column3}</div>
                </div>
            </HomeWhiteSection> */}
            {/* <SkewedSection>
                <HeaderFormat 
                    subheader="MEGA Hackathon 2023"
                    header="Prizes And Awards"
                    theme="dark"
                    headerLevel={2}
                />
                <PrizeSection>
                    <PrizeSectionCard 
                        theme="light" 
                        number={1}
                        header="Grand Winners (3)"
                        description="3 Projects get Opportunity to Pitch to SEED VC Funds for Investment and Partnership Opportunities of $1000!"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={2}
                        header="1st Place"
                        description="$300 Cash Prize & $300 Lifetime Taskade Pro"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={3}
                        header="2nd Place"
                        description="$200 Cash Prize & $300 Lifetime Taskade Pro"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={3}
                        header="3rd Place"
                        description="$100 Cash Prize & $300 Lifetime Taskade Pro"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={3}
                        header="Entrepreneurship Award" 
                        description="HIGHSCHOOLERS ONLY - Fully sponsored opportunity to Pitch project/idea in StartupBrite investor conference & will obtain entry to apply to the inaugural MEGA Entreprenurial Incubator"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={3}
                        header="Entrepreneurial Fellows Program (100)" 
                        description="Opportunity to Intern at a startup associated with our partnered accelerator"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={3}
                        header="Healthcare Category" 
                        description="Internship prize and opportunity to take application further with Medical organization/Coalition"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={3}
                        header="Anti-Corruption/Transparency Category" 
                        description="Supported by the International Transparency Organization Macedonia"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={3}
                        header="Climate Category" 
                        description="Further Project Development and Internship with the Love&Future Organization alongside Columbia PHDs"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={3}
                        header="Robotics/Hardware Category (2)" 
                        description="$226 Goliath Automation and Robotics: Monster Kit"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={3}
                        header="Homelessness/Justice Category" 
                        description="Internship prize and opportunity to take application further with NGOs"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={3}
                        header=" Hospitality/Restaurant Industry Award" 
                        description="Internship prize and opportunity to take application further with leading Hotel/Restaurant Chain"
                    />
                    <PrizeSectionCard 
                        theme="light" 
                        number={3}
                        header="Participation (1,000)" 
                        description="$10 .xyz domain $50 1 Month Voiceflow Team License $228 1 Year Taskade Pro Account $504 1 Year Axure RP Team Edition $99 Echo3d Premium Account $249 Interview Cake Full Coding Interview Course 25% off the first year of 1Password Families"
                    />
                </PrizeSection>
            </SkewedSection> */}
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
                        learnMoreLink="https://live.megahack.tech"
                    />
                    <InfoSectionCard 
                        theme="dark" 
                        number={2}
                        header="Knowledgable & Connected"
                        description="MEGA is backed by a coalition of NGO's, entreprenuers, and tech companies able to provide decades of experiance, guidance, and advice to our members."
                        learnMoreLink="https://live.megahack.tech"
                    />
                    <InfoSectionCard 
                        theme="dark" 
                        number={3}
                        header='Truly "MEGA"'
                        description="Our MEGA Hackathon had 200+ attendees from 20+ countries collaborated with 40+ NGOs and Partners who donated over 50k USD in funding, awards, sponsorships, and internships."
                        learnMoreLink="https://live.megahack.tech"
                    />
                </InfoSection>
            </section>
            {/* <section className="home-participation">
                <SkewedSection>
                    <HeaderFormat 
                        subheader="Why you should"
                        header="Participate in MEGA Hackathon 2023!"
                        headerLevel={2}
                        theme="dark"
                        buttonText="Register"
                    />
                    <InfoSection>
                        <InfoSectionCard 
                            theme="light" 
                            number={1}
                            header="Collaborate with like-minded individuals"
                            description="Collaborate with talented individuals from around the world passionate about creating solutions for the UN's 17 sustainability goals."
                            learnMoreLink="https://live.megahack.tech"
                        />
                        <InfoSectionCard 
                            theme="light" 
                            number={2}
                            header="Win funding, awards and internships"
                            description="Last year, Megahack had awards worth 50K+ USD. This year, we are looking to expand our prizes and awards to help you take your project to the next level."
                            learnMoreLink="https://live.megahack.tech"
                        />
                        <InfoSectionCard 
                            theme="light" 
                            number={3}
                            header="Grow your STEM skills and capabilities"
                            description="Megahack is a great oppurtunity to earn new skills, learn from mentors and professionals, build your portfolio and confidence!"
                            learnMoreLink="https://live.megahack.tech"
                        />
                    </InfoSection>
                </SkewedSection>
            </section> */}
            <div style={{height: 100}}/>
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
                        image="https://media.discordapp.net/attachments/857650733233995776/1101546450921463879/image.png?width=1155&height=662"
                        title="WORK WITH US"
                        date="Now"
                        category="Casual"
                        style="Internship"
                        description="MEGA Hackathon is looking for truly MEGA individuals to help us run MEGA."
                        learnMoreLink="https://opportunities.megahack.tech"
                        learnMoreHeader="Apply Now"
                    />
                    {/* <EventCard 
                        image="https://th.bing.com/th?id=OIF.szTO4bn%2f1cxnvkOmCAMOnw&pid=ImgDet&rs=1"
                        title="MEGA INCUBATOR"
                        date="TBD"
                        category="Startups & Finance"
                        style="Incubator"
                        description="MEGA Hackathon is running a incubator next year to help high-school startups find footing in the ever-changing world and industry."
                        learnMoreLink="https://incubator.megahack.tech"
                        learnMoreHeader="Go To Incubator"
                    /> */}
                    <EventCard 
                        image="https://th.bing.com/th/id/R.e0659da65fe339b3c804a6f0da39e5ba?rik=eVJGrtf3YRn3nw&pid=ImgRaw&r=0"
                        title="MEGA CHINA - 2023 HACKATHON"
                        date="July"
                        category="Competetive"
                        style="Hackathon"
                        description="MEGA Hackathon is running a proxy hackathon in China in the summer of 2023 with a similar theme."
                        learnMoreLink="https://china.megahack.tech"
                        learnMoreHeader="MEGA China Webpage"
                    />
                    <EventCard 
                        image="https://images.unsplash.com/photo-1682100615199-5a90830ccbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                        title="THE MEGA WORLDWIDE DEBATE 2023"
                        date="May 20th - 21st"
                        category="Competetive"
                        style="Debate"
                        description="MEGA Hackathon is running its first annual debate. This debate will focus on the UN SDGs like the hackathon."
                        learnMoreLink="https://worldwidedebate.megahack.tech"
                        learnMoreHeader="Pre-Register"
                    />
                    <EventCard 
                        image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                        title="MEGA Hackathon 2023"
                        date="April 14th; 15th - 16th"
                        category="Competetive"
                        style="Hackathon"
                        description="Like last year, MEGA Hackathon hosted another Hackathon event in 2023 themed on real-world problems."
                        learnMoreLink="https://hack2023.megahack.tech"
                        learnMoreHeader="View Summary"
                    />
                    <EventCard 
                        image="https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                        title="Digital Storytelling using AI"
                        date="Feb - April 2023"
                        category="AI/ML"
                        style="Workshop"
                        description="MEGA teamed up with Columbia PHD students and Professors at Love and Future to educate the youth on the importance of Digital Storytelling through this transfomative course on AI and its impact in climate."
                        learnMoreHeader="Learn More"
                        learnMoreLink="https://megahack.tech/digital-storytelling-class-2023"
                    />
                    <EventCard 
                        image="https://images-ext-2.discordapp.net/external/7aSNtvp2uTD-TslaGZH-LQN7QBm-C4Op6DOfF3oghig/%3Fraw%3Dtrue/https/github.com/MEGA-Hackathon/website-current/blob/main/src/assets/top.png?width=1143&height=857"
                        title="MEGA Hackathon 2022"
                        date="April 1st - 3rd"
                        category="Completed"
                        style="Hackathon"
                        description="Our first annual MEGA Hackathon. It was a blast! Winners took home internships and $50k+ of prizes."
                        learnMoreLink="https://hack2022.megahack.tech"
                        learnMoreHeader="Learn More"
                    />
                </div>
            </HomeWhiteSection>
            {/* <SkewedSection>
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
            </SkewedSection> */}

            <div style={{height: 100}}/>
            <HomeWhiteSection>
                <HeaderFormat 
                    subheader="FAQ's"
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
                    subheader="Summary"
                    header="Look at our past 2023 Hackathon!"
                    // description="View our past MEGA Hackathon 2023."
                    theme="light"
                    centered={true}
                    headerLevel={2}
                />
                <div style={{height: 50}}/>
                <BigButton 
                    text="View Summary"
                    href="https://hack2023.megahack.tech"
                    newTab={true}
                />
                {/* <div className="home-gallery-container">
                    <div className="home-gallery-wrapper">{galleryImages.column1}</div>
                    <div className="home-gallery-wrapper">{galleryImages.column2}</div>
                    <div className="home-gallery-wrapper">{galleryImages.column3}</div>
                </div> */}
            </HomeWhiteSection>
        </main>
    )
}


export default HomeMain