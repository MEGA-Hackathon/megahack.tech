// Utilities
import Link from "next/link"


// Subcomponents
import Button from "../subcomponents/Button"
import BigButton from "../subcomponents/BigButton"


// Hooks
import { useState } from "react"

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function changeMenu() {
        setIsMenuOpen(!isMenuOpen)
    }


    if (typeof window !== "undefined") {
        isMenuOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "initial"
        isMenuOpen ? document.body.style.height = "100vh" : document.body.style.height = "initial"
    }


    return (
        <>
            <nav>
                <img src="/branding/Megahack Logo With Text.png" alt="logo" />
                <ul>
                    <li><Link href="/#sponsors" scroll={false}>Sponsors</Link></li>
                    <li><Link href="/#events" scroll={false}>Events</Link></li>
                    <li><Link href="/#schedule" scroll={false}>Schedule</Link></li>
                </ul>
                <Button 
                    text="Register" 
                    href="https://airtable.com/shr6YRvkQ9geLsnXD" 
                    newTab={true}
                />
                {/* Hamburger menu */}
                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={isMenuOpen ? "nav-hamburger nav-hamburger-open" : "nav-hamburger"} onClick={changeMenu}>
                    <rect width="27" height="4" rx="2" fill="#181818"/>
                    <rect y="18" width="27" height="4" rx="2" fill="#181818"/>
                    <rect x="11" y="9" width="16" height="4" rx="2" fill="#181818"/>
                </svg>
            </nav>
            <div className={isMenuOpen ? "nav-dropdown nav-dropdown-open" : "nav-dropdown"}>
                <ul className="nav-dropdown-content">
                    <li onClick={changeMenu}><Link href="/#sponsors" scroll={false}>Sponsors</Link></li>
                    <li onClick={changeMenu}><Link href="/#events" scroll={false}>Events</Link></li>
                    <li onClick={changeMenu}><Link href="/#schedule" scroll={false}>Schedule</Link></li>
                </ul>
                <BigButton 
                    text="Pre-Register"
                    href="https://mega-hack-2022-spring.devpost.com/"
                    newTab={true}
                    className="nav-dropdown-button"
                    arrow={true}
                />
            </div>
        </>
    )
}

export default Nav