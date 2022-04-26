import './Nav.scss'

const Nav = () => {
    return (
        <div>
           
            <nav>
                <div class="nav-wrapper ">
                    <a href="#" class="brand-logo right">Logo</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                        <li><a href="mobile.html"><i class="material-icons"></i></a></li>
                        <li><a href="mobile.html"><i class="material-icons"></i></a></li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Nav