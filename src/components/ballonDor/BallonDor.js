import React, {useState} from 'react';
import "./ballonDor.css";


const BallonDor = ({dor}) => {
  const {img, infos, player} = dor;
  const [showInfo, setShowInfo] = useState(false)
  
  const showInfoHandler = () => {
    setShowInfo(!showInfo)
  }
  return (
       <div className="col-md-4 mt-4">
        <div className="card profile-card-5">
            <div className="card-img-block">
                <img className="card-img-top" src={img} alt="Legends..."  />
            </div>
            <div className="card-body pt-0">
            <h5 className="card-title">{player}</h5>
            <h5>Brief Player Info</h5>
            <i className="fa fa-info-circle" style={{fontSize:"17px", color:"green"}} onClick={showInfoHandler} />
             {
               showInfo && <p style={{fontSize: "1.25rem"}} className="card-text">{infos}</p>
             } 
            </div>
        </div>
      </div>
    
  )
}

export default BallonDor;