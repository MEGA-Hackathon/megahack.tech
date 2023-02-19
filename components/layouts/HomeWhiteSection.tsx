type HomeWhiteSectionProps = {
    children: any,
    id?: any
}

const HomeWhiteSection = ({
    children,
    id
}: HomeWhiteSectionProps) => {
    return (
        <div className="home-white-section" id={id && id}>
            {children}
        </div>
    )
}

export default HomeWhiteSection