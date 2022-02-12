import MainButton from "./mainButton";

export default function Section({
    tag,
    buttonTitle,
    buttonColor,
    buttonHref,
    children,
    sectionClass,
    title,
    text,
    childrenOutOfContainer,
    media
}) {

    const cls = ['section']

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
                <div className="section__wrapper">
                    <p className="section__tag">{tag}</p>
                    <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                </div>

                <div className="section__text" dangerouslySetInnerHTML={{ __html: text }}></div>

                <div className="section__media">
                    {media}
                </div>

                {children}

                <MainButton
                    title={buttonTitle}
                    stroke={buttonColor}
                    href={buttonHref}
                />
            </div>
        </section>
    )
}
