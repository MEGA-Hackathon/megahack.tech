// Our states
import { useState, useEffect } from 'react';


// Our data
import sponsors from "../../utils/data/sponsors.json"


const SponsorScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [sponsorElements, changeSponsorElements] = useState<any>()
    const sponsorScrollPositionMath = parseInt(`-${scrollPosition}`)


    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });


        changeSponsorElements(
            sponsors.map((sponsor, index) => {
                return (
                    <img src={sponsor.src} key={index} alt={`Sponsor ${index}`}/>
                )
            })
        )


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    return (
        <div className="sponsor-scroll" style={{left: sponsorScrollPositionMath}}>
            {sponsorElements}
        </div>
    )
}


export default SponsorScroll