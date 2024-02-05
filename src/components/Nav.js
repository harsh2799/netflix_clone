import React, { useEffect, useState } from 'react'
import "../css/Nav.css"

const Nav = () => {

    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
        console.log("Scrolling");
        window.addEventListener("scroll", transitionNavbar); 

        // Cleaner function on return remove the listener
        return () => window.removeEventListener('scroll', transitionNavbar);
    }, []);


  return (
    <div className={`nav ${show && 'nav_black'}`}>
            <div className='nav_contents'>
            <img 
                className='nav_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                alt="NETFLIX" 
            />
            <img 
                className='nav_avatar' 
                src="https://secure.gravatar.com/avatar/334c7ba02038cbb927ecfc119a8a866d?s=384"
                alt="" 
            />
        </div>
    </div>
  )
}

export default Nav