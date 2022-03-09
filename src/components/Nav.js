import whiteLogo from '../images/tinder-logo-white.png'
import colorLogo from '../images/color-logo-tinder.png'


function Nav({ minimal ,setShowModal,showmModal,setIsSignUp }) {

    const handleClick=()=>{
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken=false

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo} />
            </div>
            {!authToken && !minimal && <button className='nav-button' onClick={handleClick} disabled={showmModal}>Log in</button>}
        </nav>
    )
}
export default Nav