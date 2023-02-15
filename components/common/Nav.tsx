import Link from "next/link"
import Button from "../subcomponents/Button"

const Nav = () => {
    return (
        <nav>
            <img src="/branding/Megahack Logo With Text.png" alt="logo" />
            <ul>
                <li><Link href="/#sponsors">Sponsors</Link></li>
                <li><Link href="/#events">Events</Link></li>
                <li><Link href="/#schedule">Schedule</Link></li>
            </ul>
            <Button 
                text="Join Now" 
                href="https://mega-hack-2022-spring.devpost.com/" 
                newTab={true}
            />
        </nav>
    )
}

export default Nav