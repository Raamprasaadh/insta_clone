import logo from '../images/insta_logo.png';
import logo2 from '../images/insta_logo2.jpeg';
import profilePic from '../images/profile_pic.jpg';

import {ReactComponent as Home} from '../svgs/home.svg';
import {ReactComponent as Inbox} from '../svgs/inbox.svg';
import {ReactComponent as Add} from '../svgs/addPost.svg';
import {ReactComponent as Find} from '../svgs/findPeople.svg';
import {ReactComponent as Activity} from '../svgs/activity.svg';


export default function Header(){
    return(
        <section id="header" className='w-full border-2 border-header_border'>
            <div className="bg-white h-14 w-3/4 flex flex-row items-center justify-evenly mx-auto">
                {/**Logo image */}
                <img className="w-28 h-12" src={logo} />
                {/**Header search */}
                <div className='w-1/3 justify-items-center'>
                    <input className=' p-2 border-2 rounded-lg h-8 hidden md:block' placeholder='Search'/>
                    </div>
                {/**Header Links */}
                <div className="flex flex-row w-1/3 justify-evenly">
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