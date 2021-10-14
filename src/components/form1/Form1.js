import React from "react";
import "./form1.scss";
//======================================================

//======================================================
//======================================================

const Form1 = () => {
     return (
          <div className="form1-container">
               <div className="form-wrap">
                    <h1 className="title">Form1</h1>
                    <hr />
                    <form>
                         <ul>
                              <li>
                                   <label htmlFor="">Name</label>
                                   <input type="text" />
                                   <div className="error-message">error messgae</div>
                              </li>
                              <li>
                                   <label htmlFor="">Email</label>
                                   <input type="text" />
                                   <div className="error-message">error messgae</div>
                              </li>
                              <li>
                                   <label htmlFor="">Passowrd</label>
                                   <input type="text" />
                                   <div className="error-message">error messgae</div>
                              </li>
                         </ul>
                    </form>
               </div>
          </div>
     );
};

export default Form1;
