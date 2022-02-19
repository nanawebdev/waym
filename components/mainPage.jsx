import React from 'react'
import About from './about'
import Create from './create'
import Explore from './explore'
import Invest from './invest'
import Promo from './promo'
import Start from './start'
import Team from './team'
import WheelIndicator from 'wheel-indicator'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    indicator = null

    componentDidMount() {
        this.indicator = new WheelIndicator({
            elem: document,
            callback: (e) => {
                if (e.direction === 'down' && window.scrollY < window.innerHeight) {
                    this.indicator.setOptions({ preventMouse: true })
                    window.scrollTo(0, window.innerHeight)
                    return
                }

                if (e.direction === 'up' && window.scrollY <= window.innerHeight) {
                    this.indicator.setOptions({ preventMouse: true })
                    window.scrollTo(0, 0)
                    return
                }

                this.indicator.setOptions({ preventMouse: false })
            },
            preventMouse: true
        })
    }

    componentWillUnmount() {
        this.indicator.destroy()
    }

    render() {
        return <div>
            <Promo />
            <Explore />
            <Create />
            <Invest />
            <Start />
            <About />
            <Team />
        </div>;
    }
}
