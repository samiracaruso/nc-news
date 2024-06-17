import {useState} from 'react'
import { getTopics } from './api'
import { useEffect } from 'react'

function NavBar() {
    const [navBar, setNavBar] = useState([])

    useEffect(() => {
        getTopics()
        .then((data) => {
            setNavBar(data.topics)
        })
    }, [])

    return(
        <nav>
            <a>Home </a>
            {navBar.map((topic) => {
                return <a key={topic.slug}>{topic.slug.slice(0,1).toUpperCase() + topic.slug.slice(1)} </a>
            })}
        </nav>
    )
}

export default NavBar