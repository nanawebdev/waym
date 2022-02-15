import { useEffect, useState } from 'react'
import Footer from './footer'
import Header from './header'
import MobileMenu from './mobileMenu'


export default function Layout({ children }) {
    const [mode, setMode] = useState()
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const openMobileMenu = () => {
        setMenuIsOpen(true)
    }

    const closeMobileMenu = () => {
        setMenuIsOpen(false)
    }

    useEffect(() => {
        window.innerWidth < 1440 ? setMode('mobile') : setMode('desktop')
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
                {/* <Footer /> */}
                {menuIsOpen && <MobileMenu closeMenuFunc={closeMobileMenu} />}
            </div>
        </>
    )
}