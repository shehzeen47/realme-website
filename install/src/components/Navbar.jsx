import React from 'react'

class Navbar extends React.Component {
    render() {
        return (<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
            <div className="container-fluid" >
                <a className="navbar-brand fs-3 fw-semibold mb-1" href="#">
                    realme
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold fs-6">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                realme smartphone
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                narzo smartphone
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Audio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Accessories
                            </a>
                        </li>
                        
                    </ul>
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav me-2">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Brand
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Support
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Community
                            </a>
                        </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
        );
    }
}

export default Navbar;