export default function Team() {
    const team = [
        { id: 1, name: 'Svyatozar Minin', job: 'CEO', description: '8 years of experience <br> in programming and PM', imgSrc: './Minin.jpg' },
        { id: 2, name: 'Vitaly Vylgin', job: 'CDO', description: '10 years of experience <br> in programming', imgSrc: './Vylgin.jpg' },
        { id: 3, name: 'Olga Kazimirskaya', job: 'Main script writer', description: 'Author of the game metaverse <br> concept and the central plot <br> line', imgSrc: './Olga.jpg' },
    ]
    const renderTeam = () => {
        return team.map(v => {
            return (
                <li key={v.id}>
                    <img src={v.imgSrc} width={384} height={384} alt={v.name} />
                    <h4>{v.name}</h4>
                    <p className='section__text'>{v.job}</p>
                    <p className='section__text' dangerouslySetInnerHTML={{__html: v.description}}></p>
                </li>
            )
        })

    }
    return (
        <section className="team section">
            <div className="container">
                <h3>Our team</h3>
                <ul>
                    {renderTeam()}
                </ul>
            </div>

        </section>
    )
}