type PrizeSectionProps = {
    children: any
}

const PrizeSection = ({
    children
}: PrizeSectionProps) => {
    return (
        <div>
            <div style={{height: 0}}/>
            {children}
        </div>
    )
}

export default PrizeSection