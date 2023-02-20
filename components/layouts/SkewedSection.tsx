import GridLines from '../common/GridLines'

type SkewedSectionProps = {
    children: any
}

const SkewedSection = ({
    children
}: SkewedSectionProps) => {
    return (
        <div className="skewed-section">
            <GridLines dark={true} />
            <div className="skewed-section-content-padding">
                <div className="skewed-section-content-margin">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SkewedSection