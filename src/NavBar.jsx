import { useState, useEffect } from 'react';
import { getTopics } from './api';
import { Link } from 'react-router-dom';

function NavBar() {
    const [navBar, setNavBar] = useState([]);

    useEffect(() => {
        getTopics().then((data) => {
            setNavBar(data.topics);
        });
    }, []);

    return (
        <nav>
            <Link to="/" className="nav-link">Home</Link>
            {navBar.length > 0 && navBar.map((topic) => (
                <Link key={topic.slug} to={`/articles/${topic.slug}`} className="nav-link">
                    {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                </Link>
            ))}
        </nav>
    );
}

export default NavBar;
