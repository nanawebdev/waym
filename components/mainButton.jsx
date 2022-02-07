import ButtonBorder from "./../public/border.svg"

export default function MainButton({ title, href, color }) {
    return (
        <div className="main-button">
            <a className="main-button__center" href={href} dangerouslySetInnerHTML={{ __html: title }}></a>
            <ButtonBorder stroke={color} className="main-button__bg" />
        </div >
    )
}