import Image from "next/image";

export default function Megaphone() {
    return (
        <div className="megaphone">
            <div className="megaphone__img megaphone__img--1">
                <Image src="/megaphone.png" width={200} height={200} alt="Megaphone" />

            </div>
            <div className="megaphone__img megaphone__img--2">
                <Image src="/bubble-1.png" width={80} height={80} alt="bubble" />

            </div>
            <div className="megaphone__img megaphone__img--3">
                <Image src="/bubble-2.png" width={120} height={120} alt="bubble" />

            </div>
            <div className="megaphone__img megaphone__img--4">
                <Image src="/bubble-3.png" width={160} height={160} alt="bubble" />

            </div>
            <div className="megaphone__img megaphone__img--5">
                <Image src="/bubble-4.png" width={200} height={200} alt="bubble" />

            </div>
        </div>
    )
}