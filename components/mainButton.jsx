import ButtonBorder from "./../public/border.svg"

export default function MainButton({ title, href, color }) {
    return (
        <div className="main-button">
            <div className="main-button__center">
            <a href={href}>{title}</a>
            </div>
            <ButtonBorder stroke={color} className="main-button__bg" />
        </div >
    )
}