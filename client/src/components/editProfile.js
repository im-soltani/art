import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ProfileActions from './pages/ProfileActions';
  const editProfile = () => {
   
    let history = useHistory();
   
   const [profileName, setProfileName] = useState("");
   const [description, setDescription] = useState("");
   const [adress, setAdress] = useState("");
   const [avatar, setAvatar] = useState("");
   const [speciality, setSpeciality] = useState("");
   const [codePostal, setCodePostal] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [Diploma, setDiploma] = useState("");
   const [Rating, setRating] = useState("");
   const[id,setId]= useState(0);
   
   const profile = useSelector((state) => state.profileReducer.profile);

  const getProfile = () => dispatch(getCurrentProfile());
  useEffect(() => {
    (getProfile());
 })
  const editProfill=()=>{
    dispatch(editProfil(id,{id,profileName, description, adress,avatar,speciality,codePostal,phoneNumber,Diploma,Rating }))
    setProfileName("")
    setDescription("")
    setAdress("")
    setCodePostal("")
    setPhoneNumber("")
    setDiploma("")
    setId(0)
  }
  const getProfil=(profile)=>{
    setProfileName(profile.profileName)
    setDescription(profile.description)
    setAdress(profile.adress)
    setAvatar(profile.avatar)
    setSpeciality(profile.speciality)
    setCodePostal(profile.codePostal)
    setPhoneNumber(profile.phoneNumber)
    setDiploma(profile.Diploma)
    setRating(profile.Rating)
    setId(profile._id)
   
  };
    
      return (

        <div>
            <div>

        <ProfileActions getProfil={getProfil}  />
        </div>
        <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
        <h1>Create A Profile</h1>
          <form>
              <label for="profileName">profileName</label>
              <input
                onChange={(e)=>setProfileName(e.target.value)}
                type="text"
                name="profileName"
                id="profileName"
                placeholder="Enter your profileName ...."
              /><br/>
              <label for="description">description</label>
              <input
                onChange={(e)=>setDescription(e.target.value)}
                type="text"
                name="description"
                id="description"
                placeholder="Enter your description ...."
              /><br/>
              <label for="adress">adress</label>
              <input
                onChange={(e)=>setAdress(e.target.value)}
                type="text"
                name="adress"
                id="adress"
                placeholder="Enter your adress ...."
              />
              <br/>
              <label for="avatar">avatar</label>
              <input
                onChange={(e)=>setAvatar(e.target.value)}
                type="text"
                name="profileAvatar"
                id="profileAvatar"
                placeholder="Enter your Avatar ...."
              /><br/>
              <label for="speciality">speciality</label>
              <input
                onChange={(e)=>setSpeciality(e.target.value)}
                type="text"
                name="profileSpeciality"
                id="profileSpeciality"
                placeholder="Enter your profileName ...."
              /><br/>
              <label for="codePostal">codePostal</label>
              <input
                onChange={handleFormChange}
                type="text"
                name="codePostal"
                id="codePostal"
                placeholder="Enter your codePostal ...."
              />
              <br/>
              <label for="phoneNumber">phoneNumber</label>
              <input
                onChange={(e)=>setPhoneNumber(e.target.value)}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phoneNumber ...."
              />
               <label for="Diploma">Diploma</label>
              <input
                onChange={(e)=>setDiploma(e.target.value)}
                type="text"
                name="Diploma"
                id="Diploma"
                placeholder="Enter your Diploma ...."
              /><br/>
               <label for="Rating">Rating</label>
              <input
                onChange={(e)=>setRating(e.target.value)}
                type="text"
                name="Rating"
                id="Rating"
                placeholder="Enter your Rating ...."
              />
            
               <button
                   onClick={() => {
                    editProfill();
                   }}
                  >
            Confirm
          </button>
          </form>
          </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default editProfile