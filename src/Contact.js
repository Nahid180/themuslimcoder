import { useParams } from 'react-router-dom';
import Navbar from './navbar';

function Contact() {
  let {id}=useParams();
  return (
    <div>
      <Navbar/>
      <h1>Contact ID: {id}</h1>
    </div>
  );
}

export default Contact;
