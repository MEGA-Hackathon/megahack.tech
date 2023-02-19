import Link from "next/link"

type BigButtonProps = {
    text: String,
    arrow?: Boolean,
    className?: String,
    href: any,
    newTab?: Boolean
}

const BigButton = ({
    text,
    arrow,
    className,
    href,
    newTab
}: BigButtonProps) => {
    return (
        <>
        { newTab ?
            <a href={href} target="_blank" rel="noreferrer">
                <svg width="219" height="56" viewBox="0 0 219 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={`big-button-main ${className}`}>
                    <path d="M7.50633 19.8919C5.33072 21.1999 4 23.5527 4 26.0913V49.1066C4 50.7046 5.29542 52 6.89339 52H182.077C184.193 52 186.268 51.42 188.078 50.3231L211.517 36.1119C213.679 34.8008 215 32.4555 215 29.9265V6.89339C215 5.29542 213.705 4 212.107 4H37.1505C35.0493 4 32.9878 4.572 31.187 5.65465L7.50633 19.8919Z"/>
                    <path d="M4.38904 18.1926C2.28022 19.5157 1 21.8303 1 24.3199V52.1066C1 53.7046 2.29542 55 3.89339 55H184.113C186.304 55 188.45 54.3781 190.302 53.2067L214.634 37.8107C216.73 36.4848 218 34.1778 218 31.6981V3.89339C218 2.29542 216.705 1 215.107 1H35.1207C32.9447 1 30.8128 1.61344 28.9696 2.76993L4.38904 18.1926Z" strokeWidth="2"/>
                    <foreignObject x="0" y="0" className="button-wrapper">
                        <div className="button-align">
                            <p>{text}</p>
                            {   arrow &&
                                <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 7.1413H23.5M23.5 7.1413L18.3587 2M23.5 7.1413L18.3587 12.2826" stroke="#EDE9F3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            }
                        </div>
                    </foreignObject>
                </svg>
            </a>
        :
            <Link href={href}>
                <svg width="219" height="56" viewBox="0 0 219 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={`big-button-main ${className}`}>
                    <path d="M7.50633 19.8919C5.33072 21.1999 4 23.5527 4 26.0913V49.1066C4 50.7046 5.29542 52 6.89339 52H182.077C184.193 52 186.268 51.42 188.078 50.3231L211.517 36.1119C213.679 34.8008 215 32.4555 215 29.9265V6.89339C215 5.29542 213.705 4 212.107 4H37.1505C35.0493 4 32.9878 4.572 31.187 5.65465L7.50633 19.8919Z"/>
                    <path d="M4.38904 18.1926C2.28022 19.5157 1 21.8303 1 24.3199V52.1066C1 53.7046 2.29542 55 3.89339 55H184.113C186.304 55 188.45 54.3781 190.302 53.2067L214.634 37.8107C216.73 36.4848 218 34.1778 218 31.6981V3.89339C218 2.29542 216.705 1 215.107 1H35.1207C32.9447 1 30.8128 1.61344 28.9696 2.76993L4.38904 18.1926Z" strokeWidth="2"/>
                    <foreignObject x="0" y="0" className="button-wrapper">
                        <div className="button-align">
                            <p>{text}</p>
                            {   arrow &&
                                <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 7.1413H23.5M23.5 7.1413L18.3587 2M23.5 7.1413L18.3587 12.2826" stroke="#EDE9F3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            }
                        </div>
                    </foreignObject>
                </svg>
            </Link>
        }
        </>
    )
}

export default BigButton