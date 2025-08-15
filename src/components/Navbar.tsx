import {navLinks} from '../constants'
import {useGSAP} from "@gsap/react";
import gsap from "gsap"

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: 'bottom top'
            }
        })

        navTween.fromTo('nav', {
            backgroundColor: "transparent"
        }, {
            backgroundColor: "#00000050",
            backdropFilter: "blur(10px)",
            duration: 1,
            ease: "power1.inOut"

        })
    })

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo"/>
                    <p>Velvet pour</p>
                </a>

                <ul>
                    {navLinks.map(el => <li key={el.id}>
                        <a href={`#${el.id}`}>{el.title}</a>
                    </li>)}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar