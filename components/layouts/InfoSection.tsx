type InfoSectionProps = {
    children: any
}

const InfoSection = ({
    children
}: InfoSectionProps) => {
    return (
        <div className="info-section">
            {children}
        </div>
    )
}

export default InfoSection