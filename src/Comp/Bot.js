
import { FaFacebookSquare,FaGithubSquare } from 'react-icons/fa';
import { FaSquareXTwitter,FaSquareInstagram } from 'react-icons/fa6';
export default function Bot(){
    return(
        <div className="Bot">

            <a href="https://facebook.com/"><FaFacebookSquare className='fa facebook' /></a>
            <a href="https://twitter.com/" >  <FaSquareXTwitter className='fa X'  /></a>
            <a href="https://Instagram.com/"><FaSquareInstagram className='fa insta'   /></a>
            <a href="https://github.com/"><FaGithubSquare className='fa git'  /></a>
        </div>
    )
}