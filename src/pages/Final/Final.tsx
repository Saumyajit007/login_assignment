import profilepic from "../../assets/Ellipse 114.png"
import piclogo from "../../assets/Group 1585.svg"
import "./Final.css"
interface Props { }

const Final = (props: Props) => {
  return (
    <div className="final">
      <nav className="navbar">
        <h2>Account Settings</h2>
      </nav>
      <main>
        <div className="body">
          <div className="picture-section">
            <img src={profilepic} alt="profilepic" className="profilepic"/>
            <img src={piclogo} alt="add icon" className="profile-icon"/>
          </div>
          <div className="desc">
            <p className="name-desc">Marry Doe</p>
            <p className="gmail-desc">Marry@gmail.Company</p>
          </div>
        </div>
        <div>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae dicta id, deserunt ipsum minus reprehenderit praesentium aperiam? Fugiat, quisquam.</p>
        </div>
      </main>
    </div>
  )
}

export default Final