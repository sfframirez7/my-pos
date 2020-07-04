import React from 'react'
import { Link } from 'react-router-dom'


const NavBar : React.FC<{}> = () => {


    return (

        <div>
            <nav className="navbar navbar-expand-md  navbar-light bg-light my-card">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <Link to="/">
                <span className="navbar-brand font-weight-bold text-success " >
                    {/* <i className="fas fa-feather-alt"></i> */}
                    <i className="far fa-money-bill-alt"></i>
                    <span className="mx-2">
                        My POS
                    </span>
                </span>
            </Link>

      
          
            </nav>

        </div>
    )
}

export default NavBar