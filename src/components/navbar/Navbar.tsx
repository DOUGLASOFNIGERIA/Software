import "./navbar.scss"

const Navbar = () =>{
  return (
    <div className="navbar">
      <div className="logo">
        <img src="company.jpg" alt="" />
        <span>Insight-AI</span> 
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="" />
        <img src="/app.svg" alt="" className="" />
        <img src="/expand.svg" alt="" className="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img 
            src="https://media.istockphoto.com/id/1388644810/photo/happy-caucasian-young-man-using-smart-phone-cellphone-for-calls-social-media-mobile.webp?b=1&s=170667a&w=0&k=20&c=e_YS2VT3isx_yAiqFVcbiZFpkEOGxMzsQ0q-vd0C2TQ=" 
            alt=""
            />
          <span>Jane</span>r-
        </div>
        <img src="/settings.svg" alt="" className="" />
      </div>
    </div>
  )
}

export default Navbar
