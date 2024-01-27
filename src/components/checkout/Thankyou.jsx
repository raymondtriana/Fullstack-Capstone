import "./Thankyou.css"
import Navbar from "../navbar/Navbar";
export default function Thankyou(props) {


  return (
    <div id="ThankyouDiv">
      <Navbar></Navbar>
    <h1 id="ThankyouHeader">Thank you for your purchase. An email has been sent with your receipt to the email address provided.</h1>
    </div>
  );
}
