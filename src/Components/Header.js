import logo from '../images/insta_logo.png';
import profilePic from '../images/profile_pic.jpg';

import {ReactComponent as Home} from '../svgs/home.svg';
import {ReactComponent as Inbox} from '../svgs/inbox.svg';
import {ReactComponent as Add} from '../svgs/addPost.svg';
import {ReactComponent as Find} from '../svgs/findPeople.svg';
import {ReactComponent as Activity} from '../svgs/activity.svg';


export default function Header(){
    return(
        <section className="header">
            <div className="bg-white flex flex-row items-center">
                {/**Logo image */}
                <img className="w-20 h-20" src={logo} />
                {/**Header search */}
                    <input className='p-2 border-2 rounded-sm h-8' placeholder='Search'/>
                {/**Header Links */}
                <div className="flex flex-row justify-center">
                <Home className='icon'/>                    
                <Inbox className='icon'/>                    
                <Add className='icon'/>                    
                <Find className='icon'/>                    
                <Activity className='icon'/>                    
                <img className='w-6 h-6 rounded-full' src={profilePic} />
                </div>
            </div>
        </section>
    )
}