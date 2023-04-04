import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                <div className="container-fluid">

                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <h5 className="pt-1">Etraveli</h5>
                    </a>

                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                        </ul>



                        <div className="d-flex align-items-center justify-content-start">

                            <a className="text-reset me-3" href="#">
                                <i className="fas fa-shopping-cart text-white"></i>
                            </a>


                            <div className="dropdown">
                                <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-bell text-white"></i>
                                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="#">Some news</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another news</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="dropdown">
                                <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    <img src="https://media.licdn.com/dms/image/C4D03AQFv9T_XqSHUSA/profile-displayphoto-shrink_100_100/0/1551419739298?e=1686182400&v=beta&t=xlISnmYOwHNlWQP1wV_DLz95x_1hlSuxac1e6q6NjWU" className="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                    <li>
                                        <a className="dropdown-item" href="#">My profile</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Settings</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </nav>
        </header>
    )
}
