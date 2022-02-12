import MainButton from './mainButton'

export default function Start() {
    const quests = [
        { id: 1, title: 'Quest Name', description: 'Пока менестрели слагают баллады о прекрасных дамах, а рыцари бьются на турни...', imgSrc: './quest-1.jpg' },
        { id: 2, title: 'Quest Name', description: 'Пока менестрели слагают баллады о прекрасных дамах, а рыцари бьются на турни...', imgSrc: './quest-2.jpg' },
        { id: 3, title: 'Quest Name', description: 'Пока менестрели слагают баллады о прекрасных дамах, а рыцари бьются на турни...', imgSrc: './quest-3.jpg' },
        { id: 4, title: 'Quest Name', description: 'Пока менестрели слагают баллады о прекрасных дамах, а рыцари бьются на турни...', imgSrc: './quest-4.jpg' },
    ]
    const renderQuestCard = () => {
        return quests.map(v => {
            return (
                <li key={v.id}>


                    <div className="start__image">
                        <img src={v.imgSrc} width={230} height={132} alt={v.title} />
                    </div>
                    <div className="start__text-border">
                        <div className="start__text">
                            <h4>{v.title}</h4>
                            <p>{v.description}</p>
                        </div>
                    </div>


                </li>
            )
        })
    }

    return (
        <section id="start" className="start section">
            <div className="container">
                <div>
                    <div className="section__tag">Where to start?</div>
                    <h3>Quests</h3>
                </div>

                <ul>
                    {renderQuestCard()}
                </ul>
                <MainButton title="See more" stroke="#00D0FF" href="#" />
            </div>


        </section>
    )
}