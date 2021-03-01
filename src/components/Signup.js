import React from 'react';
import './../App.css';
import './SignUpPage';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

// function handleAll() {
//   firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });
// }
const Signup = () => (
  <div>
      <h2>Signup</h2>
      <div>
        <form action="/signup">
            <label for="emailInput">Email:</label>
            <input type="text" id="emailInput" name="emailInput" placeholder="Email here"></input><br/>
            <label for="accountName">Account Name:</label>
            <input type="text" id="accountName" name="accountName" placeholder="Choose username"></input><br/>
            <label for="passInput">Password:</label>
            <input type="text" id="passInput" name="passInput" placeholder="Password here"></input><br/><br/>
            {/* <input type="submit" placeholder="Submit"></input> */}
            <li> <Link to="/submit"><button id="submitBtn"> Submit</button></Link></li>
  
        </form> 
      </div>
     
  </div>
);

export default Signup;