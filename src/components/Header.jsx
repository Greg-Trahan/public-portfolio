
const Header = () => {
  return (
    <header>
      <nav style ={{position: "fixed", top:"0", width: "100%"}}>
        <div style={{background: "#316bad"}}>
          <ul style={{"list-style-type":"none", display: "flex", margin:"0px", padding:"5px"}}>
            <li className="nav-item">
              <a className="nav-link active"  href="/" >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">My Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}


export default Header