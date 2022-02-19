import { useRouter } from "next/router"

export default function Team() {
    const team = [
        { id: 1, name: 'Svyatozar Minin', job: 'CEO', description: '8 years of experience in programming and PM', imgSrc: './Minin.jpg', greenImg: './Minin-green.jpg', link: 'https://t.me/svyatozar' },
        { id: 2, name: 'Vitaly Vylgin', job: 'CDO', description: '10 years of experience in programming', imgSrc: './Vylgin.jpg', greenImg: './Vylgin-green.jpg', link: 'https://t.me/vylgin' },
        { id: 3, name: 'Olga Kazimirskaya', job: 'Main script writer', description: 'Author of the game metaverse concept and the central plot line', imgSrc: './Olga.jpg', greenImg: './Olga-green.jpg', link: 'https://t.me/salatchen' },
        { id: 4, name: 'Ilnurri Zakiryanov', job: 'DEO', description: '8 years of design', imgSrc: './iz.jpg', greenImg: './iz-green.jpg', link: 'https://t.me/ilnurri' },
    ]
    const renderTeam = () => {
        const { basePath } = useRouter()

        return team.map(v => {
            return (
                <li key={v.id}>
                    <a href={v.link} target="_blank">
                        <div className="team__img">
                            <img src= {`${basePath}/${v.greenImg}`} alt={v.name} />
                            <img src={`${basePath}/${v.imgSrc}`} alt={v.name} />
                        </div>
                        <h4>{v.name}</h4>
                        <p className='ui-section__text'>{v.job}</p>
                        <p className='ui-section__text' dangerouslySetInnerHTML={{ __html: v.description }}></p>
                    </a>
                </li>
            )
        })

    }
    return (
        <section className="team section ui-section">
            <div className="container">
                <h3>Our team</h3>
                <ul>
                    {renderTeam()}
                </ul>
            </div>
        </section>
    )
}