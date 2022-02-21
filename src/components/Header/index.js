import React,{useState} from 'react'
import './Header.scss'

const Header = () => {

  const [menu, setMenu] = useState(false);

  return (
    <div className="Header">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-1"><i className="fa-solid fa-bars" role={'button'} onClick={() => setMenu(!menu)}></i></div>
            </div>
            {
            menu && <div className="row SideMenu">
              <div className="col-12" onClick={() => setMenu(!menu)}><i className="fa-solid fa-xmark"></i></div>
              <div className="col-12">Home</div>
              <div className="col-12">About</div>
              <div className="col-12">Contact</div>
            </div>
            }
        </div>
        {menu ? <div className="overlay active"></div> : <div className="overlay"></div>}
    </div>
  )
}

export default Header