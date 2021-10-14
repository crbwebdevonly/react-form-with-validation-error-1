import React, { useState } from "react";
import "./form1.scss";
//======================================================

//======================================================
//======================================================

const Form1 = () => {
     //======================================================
     const initialSubmitData = {
          username: "",
          email: "",
          password: "",
     };
     const [submitData, setSubmitData] = useState(initialSubmitData);
     //======================================================
     //======================================================
     const handleChange = (e) => {
          // console.log(e.target.name,e.target.value);
          setSubmitData({ ...submitData, [e.target.name]: e.target.value });
     };
     //======================================================
     //======================================================
     const [errors,setErrors] = useState({})
     //====================================================== 
     const formValidate = (inObj)=>{
          const errors = {}
          console.log("inObj.username>>",inObj.username);
          if(!inObj.username){
               errors.username = "must provide username"
          }
          if(!inObj.email){
               errors.email = "must provide email"
          }
          if(!inObj.password){
               errors.password = "must provide password"
          }
// console.log("toset errors:::>",errors);
          return errors
     }
     //======================================================
     //======================================================
     const handleSubmit = (e) => {
          e.preventDefault();
          // errors
          setErrors(formValidate(submitData))
        
     };
     //======================================================
     //======================================================
     //======================================================
     console.log(submitData);
     console.log(errors);
     console.log("Object.keys(errors)",  Object.keys(errors))
     //======================================================
     //======================================================
     return (
          <div className="form1-container">
               <div className="form-wrap">
                    <h1 className="title">Form1</h1>
                    <hr />
                    <form onSubmit={handleSubmit}>
                         <ul>
                              <li>
                                   <label htmlFor="">Name</label>
                                   <input
                                        type="text"
                                        name="username"
                                        onChange={handleChange}
                                        value={submitData.name}
                                   />
                                   <div className="error-message">
                                   {errors.username}
                                   </div>
                              </li>
                              <li>
                                   <label htmlFor="">Email</label>
                                   <input
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        value={submitData.email}
                                   />
                                   <div className="error-message">
                                   {errors.email}
                                   </div>
                              </li>
                              <li>
                                   <label htmlFor="">Password</label>
                                   <input
                                        type="text"
                                        name="password"
                                        onChange={handleChange}
                                        value={submitData.password}
                                   />
                                   <div className="error-message">
                                   {errors.password}
                                   </div>
                                   <hr />
                              </li>
                         </ul>

                         <button className="button1">Submit</button>
                         {Object.keys(errors).length === 0 && <div className="success">Submit success</div>}
                    </form>
               </div>
          </div>
     );
};

export default Form1;
