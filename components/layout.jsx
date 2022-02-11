import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
    return (
        <>
            <div className="wrapper">
                <div className="content">
                    <Header />
                    <main>
                        {children}
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}