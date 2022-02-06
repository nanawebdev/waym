import Image from "next/image";

export default function Rocket() {
    return (
        <div className="rocket">
            <div className="rocket__image rocket__image--1">
                <Image src="/rocket.png" alt="rocket" width={280} height={280} />
            </div>
            <div className="rocket__image rocket__image--2">
                <Image src="/heart.png" alt="heart" width={56} height={56} />
            </div>

            <div className="rocket__image rocket__image--3">
                <Image src="/heart.png" alt="heart" width={56} height={56} />
            </div>

            <div className="rocket__image rocket__image--4">
                <Image src="/heart.png" alt="heart" width={56} height={56} />
            </div>

            <div className="rocket__image rocket__image--5">
                <Image src="/heart.png" alt="heart" width={56} height={56} />
            </div>

            <div className="rocket__image rocket__image--6">
                <Image src="/heart.png" alt="heart" width={56} height={56} />
            </div>
        </div>
    )
}