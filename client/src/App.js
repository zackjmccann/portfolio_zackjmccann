import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SignUpForm() {
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log('Reached code 1');
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      console.log('Reached code 2');
      event.preventDefault();
      console.log(`Submitting First Name: ${firstName}`);
      console.log(`Submitting Last Name: ${lastName}`);
      console.log(`Submitting Email: ${email}`);
      console.log(`Submitting Password ${password}`);
    }
  };
  
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h1>Start Investing Today</h1>
      <p>Earn money every month by investing in properties with Reiva</p>
      <Form.Row>
        <Form.Group as={Col} controlId="firstNameValidation">
            <Form.Control
                required
                type="text"
                className="first-name"
                placeholder="First name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">please enter your first name </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="lastNameValidation">
            <Form.Control
                required
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">please enter your last name </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="emailValidation">
            <Form.Control
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">please enter a valid email address</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="passwordValidation">
            <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">please enter a password</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
}















/// ===================================================== ///
// export default function SignupForm() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Form.Row>
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Control
//             required
//             type="text"
//             placeholder="Last name"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//       </Form.Row>
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//       <Button type="submit">Submit form</Button>
//     </Form>
//   )
/// ===================================================== ///

  // return (
  //   <Form noValidate validated={validated} onSubmit={handleSubmit}>
  //     <Form.Row>
  //       <Form.Group as={Col} md="4" controlId="validationCustom01">
  //         <Form.Control
  //           required
  //           type="text"
  //           placeholder="First name"
  //           defaultValue="Mark"
  //         />
  //         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  //       </Form.Group>
  //       <Form.Group as={Col} md="4" controlId="validationCustom02">
  //         <Form.Label>Last name</Form.Label>
  //         <Form.Control
  //           required
  //           type="text"
  //           placeholder="Last name"
  //           defaultValue="Otto"
  //         />
  //         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  //       </Form.Group>
  //       <Form.Group as={Col} md="4" controlId="validationCustomUsername">
  //         <Form.Label>Username</Form.Label>
  //         <InputGroup>
  //           <InputGroup.Prepend>
  //             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
  //           </InputGroup.Prepend>
  //           <Form.Control
  //             type="text"
  //             placeholder="Username"
  //             aria-describedby="inputGroupPrepend"
  //             required
  //           />
  //           <Form.Control.Feedback type="invalid">
  //             Please choose a username.
  //           </Form.Control.Feedback>
  //         </InputGroup>
  //       </Form.Group>
  //     </Form.Row>
  //     <Form.Row>
  //       <Form.Group as={Col} md="6" controlId="validationCustom03">
  //         <Form.Label>City</Form.Label>
  //         <Form.Control type="text" placeholder="City" required />
  //         <Form.Control.Feedback type="invalid">
  //           Please provide a valid city.
  //         </Form.Control.Feedback>
  //       </Form.Group>
  //       <Form.Group as={Col} md="3" controlId="validationCustom04">
  //         <Form.Label>State</Form.Label>
  //         <Form.Control type="text" placeholder="State" required />
  //         <Form.Control.Feedback type="invalid">
  //           Please provide a valid state.
  //         </Form.Control.Feedback>
  //       </Form.Group>
  //       <Form.Group as={Col} md="3" controlId="validationCustom05">
  //         <Form.Label>Zip</Form.Label>
  //         <Form.Control type="text" placeholder="Zip" required />
  //         <Form.Control.Feedback type="invalid">
  //           Please provide a valid zip.
  //         </Form.Control.Feedback>
  //       </Form.Group>
  //     </Form.Row>
  //     <Form.Group>
  //       <Form.Check
  //         required
  //         label="Agree to terms and conditions"
  //         feedback="You must agree before submitting."
  //       />
  //     </Form.Group>
  //     <Button type="submit">Submit form</Button>
  //   </Form>
  // );
// }
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup'
// import Button from 'react-bootstrap/Button';

// export default function signupForm() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Form.Row>
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
//             defaultValue="Mark"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Last name"
//             defaultValue="Otto"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup>
//             <InputGroup.Prepend>
//               <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             </InputGroup.Prepend>
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Form.Row>
//       <Form.Row>
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control type="text" placeholder="Zip" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Form.Row>
//       <Form.Group>
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//         />
//       </Form.Group>
//       <Button type="submit">Submit form</Button>
//     </Form>
//   );
// }