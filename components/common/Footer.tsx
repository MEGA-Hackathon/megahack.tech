import GridLines from "./GridLines"
import HeaderFormat from "../layouts/HeaderFormat"
import { useEffect } from "react"

const Footer = () => {

    return (
        <footer>
            <GridLines dark={true} />
            <div className="footer-align">
                <HeaderFormat 
                    subheader="Join Our Team @ MEGA"
                    header="Let's Improve Human Development"
                    buttonText="Register"
                    theme="dark"
                    link={"https://china.megahack.tech"}
                    headerLevel={2}
                    centered={true}
                />
                <div className="footer-extra">
                    <p className="footer-extra-copyright">© 2023 MEGA League. All Rights Reserved <br/> Address: 1345 Easton Avenue, 08873, New Jersey | Email: info@megahack.tech</p>
                    <div style={{height: 150}} />
                    <div className="footer-extra-policies">
                        <a href="https://business-card.mootbing.dev/?event=megaleague&dark" target="_blank" rel="noreferrer">Contact / Partnership Requests</a>
                        {/* <p>•</p>
                        <a href="https://mega-hack-2022-spring.devpost.com/" target="_blank" rel="noreferrer">Privacy Policy</a> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer