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
            <p style={{position: "fixed", zIndex: 1000, bottom: 0, width: "100%", padding: 25, backgroundColor: "#afa", borderTopRightRadius: 25, borderTopLeftRadius: 25, alignSelf: "center", fontFamily: "'Montserrat', sans-serif;"}}>Disclaimer: This page will change dynamically throughout MEGA Hackathon 2023, please check this site frequently for updates.</p>
            <section className="home-main">
                <div className="home-main-subheader">Opening Ceremony</div>
                <h1>Guest Speakers</h1>
                <iframe width="560" height="315" src="https://youtu.be/MtJf1waAC4E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  style={{borderRadius: 25, marginTop: 30, marginBottom: 30}} allowFullScreen ></iframe>
                <h1>Opening Ceremony & HyperEx Tutorial</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/m2CqgnospmQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  style={{borderRadius: 25, marginTop: 30, marginBottom: 30}} allowFullScreen></iframe>
                {/* <h2>What Is MEGA?</h2> */}
                {/* <p className="home-main-description">
                MEGA is a coalition of high-school and college students who host a hybrid hackathon catered to the United Nations&#39; seventeen sustainable development goals.
                Infusing STEM and UN SDGs, the annual MEGA Hackathon raises awareness for global welfare while instilling passion in computer science students. 
                <br/><br/>Register today to stay updated on the latest news and announcements for MEGA Hackathon 2023.
                </p> */}
                <div className="home-button-align">
                    <BigButton 
                        text="Register" 
                        arrow={true} 
                        href="https://airtable.com/shr6YRvkQ9geLsnXD" 
                        newTab={true}
                    />
                </div>
                <div style={{marginTop: 50, marginBottom: 15}}/>
                <h1>Schedule</h1>
            </section>
            {/* <section className="home-sponsor-scroll-align" id="sponsors">
                <SponsorScroll />
            </section> */}
            <HomeWhiteSection id="schedule">
                {/* <HeaderFormat 
                    subheader="Schedule"
                    header="MEGA Hackathon 2023 Schedule"
                    description="Reformatting. Check Discord."
                    headerLevel={2}
                    theme="light"
                    centered={true}
                /> */}
                {/* <div className="home-button-align">
                    <BigButton 
                        text="Register" 
                        arrow={true} 
                        href="https://airtable.com/shr6YRvkQ9geLsnXD" 
                        newTab={true}
                    />
                </div> */}
                {/* <img src="/other/Mega Hack Schedule.svg" alt="schedule" className="home-schedule-image" /> */}
<p className="header-format-description">
<h1>Friday</h1>
<br/>
5:00-5:30 p.m. [Opening Ceremony]-Conducted by Agni<br/>
5:30-5:45 p.m. [HyperEx Tutorial], Conducted by Daniel Achacon <br/>
6:00-6:30 p.m. [Rahul Desai, General Manager at Sylva] Moderated by Daniel Achacon<br/>
6:30-7:00 p.m. [Avi Patel, CEO of Nitrility] Moderated by Chul<br/>
7:00-7:30 p.m. [Brian Whaley VP at American Express] Moderated by Agni<br/>
7:30-8:00 p.m. [Chetan Zanwar Product Lead at Tiktok] Moderated by Jason Xu<br/>
8:00-8:30 p.m. [Form Teams!!] Moderated by Daniel Achacon and Max Xiong<br/>
<br/>Saturday<br/><br/>
12:00-12:30 p.m. [NGO Theme Reveals and Sponsor/NGO/Partner networking session] Moderated by Agni<br/>
2:00-2:30 p.m. [ML 101] Conducted by Daniel Tian<br/>
2:30-3:00 p.m. [Web/APP Development] Conducted by Larry Liu<br/>
3:00-3:30 p.m. [Intro to Competitive Programming] Conducted by Max Xiong<br/>
3:30-3:40 p.m. [Intro to CAD] Conducted by Arnav Kalapala from Youth Code Foundation<br/>
6:00-7:00 p.m. [TECH HELP]-All<br/>
9:00-10:00 p.m. [GAME NIGHT]<br/>
<br/>Sunday<br/><br/>
12:00 p.m. [Submissions Due]<br/>
12:00p.m.-12:30p.m.[Submission help]<br/>
1:00 p.m.[Submissions close]<br/>
1:00pm[Closing Ceremony]<br/>
</p>
                <div style={{height: 100}}/>
                <HeaderFormat 
                    subheader="Speakers"
                    header="MEGA Hackathon 2023 Guest Speakers"
                    description=""
                    headerLevel={2}
                    theme="light"
                    centered={true}
                />
                <img src="https://media.discordapp.net/attachments/857650733233995776/1096546475355426928/Frame_1.png" style={{width: "100%"}}/>
            </HomeWhiteSection>
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
            <SkewedSection>
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
            </SkewedSection>
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
                        buttonText="Register"
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
                        image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                        title="MEGA Hackathon 2023"
                        date="April 14th; 15th - 16th"
                        category="Competetive"
                        style="Hackathon"
                        description="Like last year, MEGA Hackathon will host another Hackathon event in 2023 themed on real-world problems."
                        learnMoreLink="https://airtable.com/shr6YRvkQ9geLsnXD"
                        learnMoreHeader="Register"
                    />
                    <EventCard 
                        image="https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                        title="Digital Storytelling using AI"
                        date="Done"
                        category="AI/ML"
                        style="Workshop"
                        description="MEGA teamed up with Columbia PHD students and Professors at Love and Future to educate the youth on the importance of Digital Storytelling through this transfomative course on AI and its impact in climate."
                        learnMoreHeader="Learn More"
                        learnMoreLink="./digital-storytelling-class-2023"
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