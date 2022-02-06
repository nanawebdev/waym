import Image from 'next/image'
import MainButton from './mainButton'

export default function Start() {
    const quests = [
        { id: 1, title: 'Quest Name', description: 'Пока менестрели слагают баллады о прекрасных дамах, а рыцари бьются на турни...', imgSrc: '/sm.jpg' },
        { id: 2, title: 'Quest Name', description: 'Пока менестрели слагают баллады о прекрасных дамах, а рыцари бьются на турни...', imgSrc: '/sm.jpg' },
        { id: 3, title: 'Quest Name', description: 'Пока менестрели слагают баллады о прекрасных дамах, а рыцари бьются на турни...', imgSrc: '/sm.jpg' },
        { id: 4, title: 'Quest Name', description: 'Пока менестрели слагают баллады о прекрасных дамах, а рыцари бьются на турни...', imgSrc: '/sm.jpg' },
    ]
    const renderQuestCard = () => {
        return quests.map(v => {
            return (
                <li key={v.id}>
                    <div className='start__image'>
                        <Image src={v.imgSrc} width={230} height={132} alt={v.title} />
                    </div>
                    <div className="start__text">
                        <h4>{v.title}</h4>
                        <p>{v.description}</p>
                    </div>

                </li>
            )
        })
    }

    return (
        <section id="start" className="start section">
            <div className="container">
                <div className="section__tag">Where to start?</div>
                <ul>
                    {renderQuestCard()}
                </ul>
            </div>

            <MainButton title="See more" stroke="#00D0FF" href="#" />
        </section>
    )
}