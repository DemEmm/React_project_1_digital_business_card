import Image from "../Image/dsad.jpg"
import { ImMail } from 'react-icons/im';
import { FaLinkedin } from 'react-icons/fa';

export default function Top(){
    return(
        <div className="Top">
            <img src={Image}></img>
            <h1>Demeneopoulos Emmanouil</h1>
            <h2>Machine learning engineer</h2>
            <div className="buttons">
                
                <div className="e-mail">
                     <a href="example@hotmail.com">
                        <ImMail className="fa mail"/>
                        e-mail
                     </a>
                </div> 

                <div  className="linkdin">
                    <a href="https://www.linkedin.com/in/emmanouil-demeneopoulos">
                        <FaLinkedin className="fa linkedin"/>
                        Linkedin
                    </a>
                </div>

            </div>
        </div>
    )
}