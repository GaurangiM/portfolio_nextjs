import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Gaurangi's Portfolio
        </Link>
      </div>
      <a href="https://www.canva.com/design/DAEj6STCrCw/NI8HXOZDrHurhTHYKCL3zQ/view?utm_content=DAEj6STCrCw&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;