import Link from "next/link"

type ButtonProps = {
    text: String,
    arrow?: Boolean,
    className?: String,
    href: any,
    newTab?: Boolean
}

const Button = ({
    text,
    arrow,
    className,
    href,
    newTab
}: ButtonProps) => {
    return (
        <>
            { newTab ?
                <a href={href} target="_blank" rel="noreferrer" className="button-url">
                    <svg width="156" height="44" viewBox="0 0 156 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={`button-main ${className}`}>
                        <path d="M6.29621 16.0239C4.8651 16.9439 4 18.5284 4 20.2298V38C4 39.1046 4.89543 40 6 40H128.81C130.354 40 131.866 39.5529 133.162 38.7128L149.72 27.9782C151.142 27.0564 152 25.4772 152 23.7827V6C152 4.89543 151.105 4 150 4H27.3496C25.8156 4 24.3139 4.44104 23.0236 5.27057L6.29621 16.0239Z"/>
                        <path d="M3.20912 14.2139C1.82816 15.1429 1 16.6981 1 18.3625V41C1 42.1046 1.89543 43 3 43H130.874C132.476 43 134.04 42.5194 135.365 41.6203L152.807 29.7877C154.179 28.8572 155 27.3075 155 25.65V3C155 1.89543 154.105 1 153 1H25.2918C23.701 1 22.1463 1.47427 20.8264 2.36222L3.20912 14.2139Z" strokeWidth="2"/>
                        <foreignObject x="0" y="0" className="button-wrapper" width="100%" height="100%">
                            <div className="button-align" xmlns="http://www.w3.org/1999/xhtml">
                                <p>{text}</p>
                            </div>
                        </foreignObject>
                    </svg>
                </a>
            :
                <Link href={href} className="button-url">
                    <svg width="156" height="44" viewBox="0 0 156 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={`button-main ${className}`}>
                        <path d="M6.29621 16.0239C4.8651 16.9439 4 18.5284 4 20.2298V38C4 39.1046 4.89543 40 6 40H128.81C130.354 40 131.866 39.5529 133.162 38.7128L149.72 27.9782C151.142 27.0564 152 25.4772 152 23.7827V6C152 4.89543 151.105 4 150 4H27.3496C25.8156 4 24.3139 4.44104 23.0236 5.27057L6.29621 16.0239Z"/>
                        <path d="M3.20912 14.2139C1.82816 15.1429 1 16.6981 1 18.3625V41C1 42.1046 1.89543 43 3 43H130.874C132.476 43 134.04 42.5194 135.365 41.6203L152.807 29.7877C154.179 28.8572 155 27.3075 155 25.65V3C155 1.89543 154.105 1 153 1H25.2918C23.701 1 22.1463 1.47427 20.8264 2.36222L3.20912 14.2139Z" strokeWidth="2"/>
                        <foreignObject x="0" y="0" width="100%" height="100%" className="button-wrapper">
                            <div className="button-align" xmlns="http://www.w3.org/1999/xhtml">
                                <p>{text}</p>
                            </div>
                        </foreignObject>
                    </svg>
                </Link>
            }
        </>
    )
}

export default Button