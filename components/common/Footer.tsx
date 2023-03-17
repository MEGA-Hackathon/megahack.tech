import GridLines from "./GridLines"
import HeaderFormat from "../layouts/HeaderFormat"

const Footer = () => {
    return (
        <footer>
            <GridLines dark={true} />
            <div className="footer-align">
                <HeaderFormat 
                    subheader="Join Now"
                    header="Let's Improve Human Development"
                    buttonText="Register"
                    theme="dark"
                    headerLevel={2}
                    centered={true}
                />
                <div className="footer-extra">
                    <p className="footer-extra-copyright">© 2023 MEGA League. All Rights Reserved</p>
                    {/* <div className="footer-extra-policies">
                        <a href="https://mega-hack-2022-spring.devpost.com/" target="_blank" rel="noreferrer">Terms</a>
                        <p>•</p>
                        <a href="https://mega-hack-2022-spring.devpost.com/" target="_blank" rel="noreferrer">Privacy Policy</a>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer