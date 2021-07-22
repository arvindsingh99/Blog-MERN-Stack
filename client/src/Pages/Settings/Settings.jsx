import './Settings.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
function Settings() {
    return (
        <div>
            <div className="settings">
                <div className="settingsWrapper">
                 <div className="settingsTitle">
                     <span className="settingsUpdateTitle">Update Your Account</span>
                     <span className="settingsDeleteTitle">Delete Account</span>
                 </div>
                 <form className="settingsForm">
                     <label >Profile Picture</label>
                     <div className="settingsPP">
                         <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" 
                         alt="" />
                         <label htmlFor="fileInput">
                         <i class="settingsPPIcon fas fa-user-circle"></i>
                         </label>
                         <input type="file" id="fileInput" style={{display:"none"}} />
                     </div>
                     <label >Username</label>
                     <input type="text" placeholder="Arvind" />
                     <label >Email</label>
                     <input type="email" placeholder="arvinsingh151099@gmail.com" />
                     <label >Password</label>
                     <input type="password" />
                     <button className="settingsSubmit">Update</button>

                 </form>
                </div>
                <Sidebar />
            </div>
        </div>
    )
}

export default Settings
