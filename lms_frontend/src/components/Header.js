import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">E-Learning</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <a className="nav-link" href="#">Courses</a>
            <a className="nav-link" href="#">Teachers</a>

            <li class="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><Link className="dropdown-item" to="/user-login">User Login</Link></li>
                <li><Link className="dropdown-item" to="/user-Register">User Register</Link></li>
                <li><hr className="dropdown-divider" /></li>
                {/* <li><link className="dropdown-item" to="/user-dashboard">Dashboard</link></li> */}
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </div>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;