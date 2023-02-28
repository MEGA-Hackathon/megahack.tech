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
            <section className="home-main">
                <div className="home-main-subheader">Our Mission</div>
                <h1>Empowering a Sustainable Future</h1>
                <p className="home-main-description">Join MEGA&apos;s community of future innovators solving the UN&apos;s 17 development goals. Join the MEGA Hackathon which last year, had 200 attendees from 20 countries, 40+ NGO&apos;s and Partners, and awards worth 50k+</p>
                <div className="home-button-align">
                    <BigButton 
                        text="Join Now" 
                        arrow={true} 
                        href="https://mega-hack-2022-spring.devpost.com/" 
                        newTab={true}
                    />
                </div>
            </section>
            <section className="home-sponsor-scroll-align" id="sponsors">
                <SponsorScroll />
            </section>
            <section className="home-about">
                <HeaderFormat 
                    subheader="About Us"
                    header="A Driven Community Solving Sustainability"
                    headerLevel={2}
                    theme="light"
                />
                <InfoSection>
                    <InfoSectionCard 
                        theme="dark" 
                        number={1}
                        header="A Motivated, Driven Community"
                        description="At the core of MEGA is an amazing community of innovators and problem solvers working passionately about creating solutions for the UN's 17 sustainability goals."
                        learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                    />
                    <InfoSectionCard 
                        theme="dark" 
                        number={2}
                        header="Knowledge Network & Connections"
                        description="MEGA is backed by a coalition of NGO's, entreprenuers, and tech companies able to provide decades of experiance, guidance, and advice to our members."
                        learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                    />
                    <InfoSectionCard 
                        theme="dark" 
                        number={3}
                        header='The Truly "MEGA" Hackathon'
                        description="Our MEGA Hackathon had 200+ attendees from 20+ countries collaborated with 40+ NGOs and Partners who donated over 10k USD in funding, awards, sponsorships, and internships."
                        learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                    />
                </InfoSection>
            </section>
            <section className="home-participation">
                <SkewedSection>
                    <HeaderFormat 
                        subheader="Participation"
                        header="Why You Should Participate in Megahack 2023!"
                        headerLevel={2}
                        theme="dark"
                        buttonText="Join Now"
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
                            header="Grow your coding skills and capabilities"
                            description="Megahack is a great oppurtunity to earn new skills, learn from mentors and professionals, build your portfolio and even help you become more confident!"
                            learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                        />
                    </InfoSection>
                </SkewedSection>
            </section>
            <HomeWhiteSection id="schedule">
                <HeaderFormat 
                    subheader="Schedule"
                    header="The Day Long Schedule for Megahack 2023"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et aliquet nunc, ut efficitur erat. Fusce elementum, tellus sed fringilla sagittis, massa metus condimentum ligula, sed mattis sapien nunc sed mi."
                    headerLevel={2}
                    theme="light"
                    centered={true}
                />
                <img src="/other/Megahack Schedule.svg" alt="schedule" className="home-schedule-image" />
            </HomeWhiteSection>
            <SkewedSection>
                <HeaderFormat 
                    subheader="Information"
                    header="When and Where is Megahack 2023"
                    headerLevel={2}
                    theme="dark"
                />
                <InfoSection>
                    <InfoSectionCard 
                        theme="light" 
                        number={1}
                        header="When is Megahack happening?"
                        description="At the core of our league is a community of innovators and problem solvers working passionate about creating solutions for the UN's 17 sustainability goals."
                    />
                    <InfoSectionCard 
                        theme="light" 
                        number={2}
                        header="Where is Megahack going to be?"
                        description="At the core of our league is a community of innovators and problem solvers working passionate about creating solutions for the UN's 17 sustainability goals."
                    />
                    <InfoSectionCard 
                        theme="light" 
                        number={3}
                        header="Who can attend the hackathon?"
                        description="At the core of our league is a community of innovators and problem solvers working passionate about creating solutions for the UN's 17 sustainability goals."
                    />
                </InfoSection>
            </SkewedSection>
            <HomeWhiteSection id="events">
                <HeaderFormat 
                    subheader="Events"
                    header="Improve Your Skills Through Megahack 2023 Events!"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et aliquet nunc, ut efficitur erat. Fusce elementum, tellus sed fringilla sagittis, massa metus condimentum ligula, sed mattis sapien nunc sed mi."
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
                        learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                    />
                    <EventCard 
                        image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                        title="The Mega Hack 2023"
                        date="April 7th; 8th - 9th"
                        category="Programming"
                        style="Hackathon"
                        description="Like last year, MEGA Hackathon will host another Hackathon event in 2023 to address real-world problems."
                        learnMoreLink="https://mega-hack-2022-spring.devpost.com/"
                    />
                </div>
            </HomeWhiteSection>
            <SkewedSection>
                <HeaderFormat 
                    subheader="Prizes"
                    header="The Available Prizes for Megahack 2023"
                    theme="dark"
                    headerLevel={2}
                />
                <InfoSection>
                    <InfoSectionCard 
                        theme="light" 
                        number={1}
                        header="When is Megahack happening?"
                        description="At the core of our league is a community of innovators and problem solvers working passionate about creating solutions for the UN's 17 sustainability goals."
                    />
                    <InfoSectionCard 
                        theme="light" 
                        number={2}
                        header="When is Megahack happening?"
                        description="At the core of our league is a community of innovators and problem solvers working passionate about creating solutions for the UN's 17 sustainability goals."
                    />
                    <InfoSectionCard 
                        theme="light" 
                        number={3}
                        header="When is Megahack happening?"
                        description="At the core of our league is a community of innovators and problem solvers working passionate about creating solutions for the UN's 17 sustainability goals."
                    />
                </InfoSection>
            </SkewedSection>
            <HomeWhiteSection>
                <HeaderFormat 
                    subheader="FAQ’s"
                    header="All the answers to your many questions!"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et aliquet nunc, ut efficitur erat. Fusce elementum, tellus sed fringilla sagittis, massa metus condimentum ligula, sed mattis sapien nunc sed mi."
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
                    subheader="Prizes"
                    header="The Available Prizes for Megahack 2023"
                    theme="dark"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et aliquet nunc, ut efficitur erat. Fusce elementum, tellus sed fringilla sagittis, massa metus condimentum ligula, sed mattis sapien nunc sed mi."
                    headerLevel={2}
                />
                <div className="home-team-wrapper">
                    {teamMembers}
                </div>
            </SkewedSection>
            <HomeWhiteSection>
                <HeaderFormat 
                    subheader="Gallery"
                    header="A Recollection of Memories from Previous Events!"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et aliquet nunc, ut efficitur erat. Fusce elementum, tellus sed fringilla sagittis, massa metus condimentum ligula, sed mattis sapien nunc sed mi."
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