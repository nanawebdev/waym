import MainButton from "./mainButton";

export default function UiSection({
    tag,
    buttonTitle,
    buttonColor,
    buttonHref,
    isButtonHrefLocal = false,
    children,
    sectionClass,
    title,
    text,
    childrenOutOfContainer,
    media,
    mobileButtonTitle
}) {

    const cls = ['ui-section']

    if(sectionClass !== '') {
        cls.push(sectionClass)
    }

    const setClasses = () => {
       return cls.join(' ')
    }

    return (
        <section className={setClasses()}>
            {childrenOutOfContainer}

            <div className="container">
                <div className="ui-section__wrapper">
                    <p className="ui-section__tag">{tag}</p>
                    <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                </div>

                <div className="ui-section__text" dangerouslySetInnerHTML={{ __html: text }}></div>

                <div className="ui-section__media">
                    {media}
                </div>

                {children}

                <MainButton
                    mobileTitle={mobileButtonTitle}
                    title={buttonTitle}
                    color={buttonColor}
                    href={buttonHref}
                    isLocal={isButtonHrefLocal}
                />
            </div>
        </section>
    )
}
