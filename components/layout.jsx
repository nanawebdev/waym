import { useEffect, useState } from 'react'
import Footer from './footer'
import Header from './header'
import MobileMenu from './mobileMenu'


export default function Layout({ children }) {
    const [mode, setMode] = useState()
    const [classNemu, setClassMenu] = useState('')

    const openMobileMenu = () => {
        setClassMenu('visible')
    }

    const closeMobileMenu = () => {
        setClassMenu('')
    }

    useEffect(() => {
        window.innerWidth < 1200 ? setMode('mobile') : setMode('desktop')
    }, [])

    return (
        <>
            <div className="wrapper">
                <div className="content">
                    <Header mode={mode} openMenuFunc={openMobileMenu} />
                    <main>
                        {children}
                    </main>
                </div>
                <Footer />
                <MobileMenu closeMenuFunc={closeMobileMenu} cls={classNemu} />
            </div>
        </>
    )
}