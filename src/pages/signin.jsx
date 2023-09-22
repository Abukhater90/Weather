import { useState } from "react";



const Signin = () => {


  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPass = (e) => {
    setPass(e.target.value);
  };

  const handleclick = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
  };


  return (
    <div className="sign">

  <div className="mail">
  < label >Enter Your E-mail: </label>
    < input type="text"  onChange={handelEmail} />
  </div>
    
    
  <div className="password">
  < label >Enter Your Password: </label>
    < input type="password" onChange={handelPass} />
  </div>


  <div className="submit">
  <button onClick={handleclick}> Submit </button>
  </div>

    </div >
  );
}

export default Signin;
