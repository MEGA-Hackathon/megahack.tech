import Button from "../subcomponents/Button"


type HeaderFormatProps = {
    subheader?: String,
    header?: String,
    description?: String,
    buttonText?: String,
    headerLevel?: Number,
    theme: "dark" | "light",
    centered?: Boolean
}

const HeaderFormat = ({
    subheader,
    header,
    description,
    buttonText,
    headerLevel,
    theme,
    centered
}: HeaderFormatProps) => {
    // Reverse the theme for the classes
    const themeClass = theme === "dark" ? "light" : "dark";
    let headerLevelElement = null;
    const headerClassName = `header-format-header header-format-header-${themeClass} header-format-header-${centered && "centered"}`

    if (header) {
        switch (headerLevel) {
            case 1:
                headerLevelElement = <h1 className={headerClassName}>{header}</h1>;
                break;
            case 2:
                headerLevelElement = <h2 className={headerClassName}>{header}</h2>;
                break;
            case 3:
                headerLevelElement = <h3 className={headerClassName}>{header}</h3>;
                break;
            case 4:
                headerLevelElement = <h4 className={headerClassName}>{header}</h4>;
                break;
            case 5:
                headerLevelElement = <h5 className={headerClassName}>{header}</h5>;
                break;
            case 6:
                headerLevelElement = <h6 className={headerClassName}>{header}</h6>;
                break;
            default:
                headerLevelElement = <p className={headerClassName}>{header}</p>
        }
    }


    return (
        <div className={centered ? "header-format header-format-centered" : "header-format"}>
            {subheader && <p className="header-format-subheader">{subheader}</p>}
            {headerLevelElement}
            {description && <p className={`header-format-description header-format-description-${themeClass}`}>{description}</p>}
            { buttonText &&
            <Button 
                text={buttonText}
                href="https://mega-hack-2022-spring.devpost.com/"
                className="header-format-button"
            />
            }
        </div>
    )
}   

export default HeaderFormat;