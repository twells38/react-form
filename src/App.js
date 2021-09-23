import React, { Component } from "react";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;

/**
 <h1> Traditional Uncontrolled form</h1>
 <form id="myForm">
  <input name="username" type="text"/>
  <button>Click Me</button>
  </form>
 */
/** js
  $("#myForm").submit(function(e){
    e.preventDefault():
    $('input[name="usrname"]')  //grab data that we need from input then do something with it
    alert("you enter: ${username}")

  })
 */
/** in react has technique to get data from form this is  controlled components
   Controlled Components
   * in HTML, form elements such as <input>, <textarea> ans <select>
   typically maintain their own state and update it based on ser input
   * in React, mutable state is kept in the state of components,
   and omly updated with setState()
 */
