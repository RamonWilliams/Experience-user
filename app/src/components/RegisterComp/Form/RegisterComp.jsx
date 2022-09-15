import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { API } from '../../../services/API';
import OtherInfo from '../OtherInfo/Otherinfo';
import PersonalInfo from '../Personalinfo/PersonalInfo';
import SingUp from '../SingUp/SingUp';



const UserForm = () => {

  const [step, setStep] = useState(1);
  const [user, setUser] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const saveUser = (value) => {
    // console.log('user', user);
    // console.log('value', value);
    setUser({ ...user, ...value })
  }

  const sendInfo = async () => {
    console.log("Usuario Def", user)
    API.post(`/user/register`,user).then ((res) => {
     
       if (res) {
        // Navigate("/login");
       }
    })
}
console.log(user)
  return (
    <>
      {step === 1 && (<SingUp saveUser={saveUser} user={user}></SingUp>)}
      {step === 2 && (<PersonalInfo saveUser={saveUser} user={user}></PersonalInfo>)}
      {step === 3 && (<OtherInfo saveUser={saveUser} user={user}></OtherInfo>)}


      {step === 1 && (<button type="button" onClick={nextStep}>Next</button>)}
      {step !== 1 && (<button type="button" onClick={prevStep}>Back</button>)}
      {step === 2 && (<button type="button" onClick={nextStep}>Next</button>)}
      {step === 3 && ( <Link to="/login"><button type="button" onClick={sendInfo}>Send</button></Link>)}


    </>
  )
}

export default UserForm