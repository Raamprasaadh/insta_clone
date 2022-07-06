import logo from "../images/insta_logo.png";
import profilePic from "../images/profile_pic.jpg";

import { ReactComponent as Home } from "../svgs/home.svg";
import { ReactComponent as Inbox } from "../svgs/inbox.svg";
import { ReactComponent as Add } from "../svgs/addPost.svg";
import { ReactComponent as Find } from "../svgs/findPeople.svg";
import { ReactComponent as Activity } from "../svgs/activity.svg";
import { ReactComponent as SearchIcon } from "../svgs/search.svg";

export default function Header() {
  return (
    <section id="header" className="w-full border-2 border-header_border">
      <div className="container bg-white h-14 w-2/3 p-4 flex flex-row items-center justify-evenly mx-auto">
        {/**Logo image */}
        <div className="w-1/3">
          <img className="w-28 h-10 hover:cursor-pointer" alt="logo" src={logo} />
        </div>
        {/**Header search */}
        <div className="1/3">
          <div className="w-4/5 p-4  h-8 border-2 rounded-lg justify-self-center hidden flex-row items-center bg-header_search_bg mx auto md:flex">
            <SearchIcon className="w-4 h-4 icon text-lg" />
            <input
              className="ml-2 w-3/4 border-none outline-none bg-header_search_bg text-base text-header_text"
              placeholder="Search"
            />
          </div>
        </div>
        {/**Header Links */}
        <div className="flex flex-row w-1/3 justify-end space-x-6 ">
          <Home className="w-6 h-6 hover:cursor-pointer icon" />
          <Inbox className="w-6 h-6 hover:cursor-pointer icon" />
          <Add className="w-6 h-6 hover:cursor-pointer icon" />
          <Find className="w-6 h-6 hover:cursor-pointer icon" />
          <Activity className="w-6 h-6 hover:cursor-pointer icon" />
          <img
            className="w-6 h-6 hover:cursor-pointer rounded-full"
            src={profilePic}
            alt="profile pic"
          />
        </div>
      </div>
    </section>
  );
}
