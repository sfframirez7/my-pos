import React from 'react'
import { Link } from 'react-router-dom'


const NavBar : React.FC<{}> = () => {


    return (

        <div>
            <nav className="navbar navbar-expand-md  navbar-light bg-light my-card">
            
                <Link to="/">
                    <span className="navbar-brand font-weight-bold my-color " >
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