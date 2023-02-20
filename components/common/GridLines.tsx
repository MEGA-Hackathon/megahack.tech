type GridLines = {
    dark?: boolean
}

const GridLines = ({
    dark
}: GridLines) => {

    const darkMode: any = {"borderLeft": dark ? "1px dotted #2B2A2E" : "1px dotted #EDE9F3"}

    return (
        <div className="grid-lines-alignment">
            <div className="grid-lines">
                <div className="grid-line" style={darkMode}></div>
                <div className="grid-line" style={darkMode}></div>
                <div className="grid-line" style={darkMode}></div>
                <div className="grid-line" style={darkMode}></div>
                <div className="grid-line" style={darkMode}></div>
                <div className="grid-line" style={darkMode}></div>
                <div className="grid-line" style={darkMode}></div>
            </div>
        </div>
    )
}


export default GridLines