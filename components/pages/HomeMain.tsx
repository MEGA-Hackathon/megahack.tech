import Button from "../subcomponents/Button"
import BigButton from "../subcomponents/BigButton"
import SponsorScroll from "../subcomponents/SponsorScroll"

const HomeMain = () => {
    return (
        <main>
            <section className="home-main">
                <div className="home-main-subheader">Introduction</div>
                <h1>Empowering a Sustainable Future</h1>
                <p className="home-main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis felis quis erat consectetur, faucibus venenatis dolor mollis. Duis felis nisl, lobortis vitae erat semper, congue sagittis tellus felis nisl.</p>
                <div className="home-button-align">
                    <BigButton 
                        text="Join Now" 
                        arrow={true} 
                        href="https://mega-hack-2022-spring.devpost.com/" 
                        newTab={true}
                    />
                </div>
            </section>
            <div className="home-sponsor-scroll-align">
                <SponsorScroll />
            </div>
        </main>
    )
}


export default HomeMain