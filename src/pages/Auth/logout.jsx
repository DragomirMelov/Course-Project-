import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { UserContext } from '../../Context/userContext';

const logout = () => {
      let navigate = useNavigate();
      const {logout } = useContext(UserContext);
    const Logoututill = async() =>{
    await logout()
    }
    Logoututill()
    navigate("/")
  return (
    <div>logout</div>
  )
}

export default logout