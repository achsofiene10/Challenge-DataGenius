
function Header() {
    return (
        <div>
            {/* Start Main Top */}
            <header className="main-header">
                {/* Start Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">
                        {/* Start Header Navigation */}
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="# navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars" />
                            </button>
                            <a className="navbar-brand" href="index.html"><img width="200" src="images/Logo.jpg" className="logo" alt="description" /></a>
                        </div>
                        {/* End Header Navigation */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>

                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                        {/* Start Atribute Navigation */}
                        <div className="attr-nav">
                            <ul>
                                <li className="side-menu">
                                    <a href="# ">
                                        <i className="fa fa-shopping-bag" />
                                        <span className="badge">3</span>
                                        <p>My Cart</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* End Atribute Navigation */}
                    </div>
                    
                </nav>
                {/* End Navigation */}
            </header>
            {/* End Main Top */}
        </div>
    )
}
export default Header;