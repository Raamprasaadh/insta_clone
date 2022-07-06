import profilePic from "../images/profile_pic.jpg";
import suggest1 from "../images/suggest_ruthra.jpg";
import suggest2 from "../images/suggest_cruzer.jpg";
import suggest3 from "../images/suggest_suraj.jpg";
import suggest4 from "../images/suggest_flash.jpg";
import suggest5 from "../images/suggest_anthro.jpg";
function BodyRight() {
  const suggestData = [
    { img: suggest1, name: "ruthra__spam", text: "Suggested for you" },
    { img: suggest2, name: "cruzer_1991_", text: "Suggested for you" },
    { img: suggest3, name: "sooraj_1991", text: "Sooraj Devaraj" },
    { img: suggest4, name: "flashing_shutters", text: "Flashing Shutters" },
    { img: suggest5, name: "anthropologynet", text: "Suggested for you" },
  ];
  return (
    <section id="bodyFooter">
      <div className="flex-col space-y-4 md:flex max-w-1/3 max-h-2/3">
        {/**profile */}
        <div className="flex flex-row space-x-4 items-center w-full">
          <div className="w-1/8">
            <img
              className="w-1/8 h-auto rounded-full"
              src={profilePic}
              alt="profile_pic"
            />
          </div>
          <div className="w-4/8 shrink-0">
            <div className="w-full h-4 text-suggest_pf_uname font-medium text-sm">
              badlytimedjokes
            </div>
            <div className="w-full h-4 text-header_text text-sm">
              Ram Prasadh Natarajan
            </div>
          </div>
          <div className="w-2/8 text-suggest_link text-sm">Switch</div>
        </div>
        {/**Suggestion */}
        <div className="flex flex-col space-y-2 w-full">
          <div className="flex flex-row items-center w-full">
            <div className="w-7/8 font-base text-header_text justify-left">
              Suggestions for you
            </div>
            <div className="w-1/8 text-xs font-medium justify-right">
              See all
            </div>
          </div>
          {/**suggestion list */}
          <div className="flex flex-col space-y-4">
            {suggestData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row space-x-2 items-center w-full"
                >
                  <img
                    src={data.img}
                    alt={`suggest${index}`}
                    className="w-1/8 h-8 rounded-full"
                  />

                  <div className="w-2/4 space-y-2 shrink-0">
                    <div className=" h-4 text-suggest_pf_uname font-medium text-sm hover:underline underline-offset-2 decoration-2 hover:cursor-pointer">
                      {data.name}
                    </div>
                    <div className=" h-4 text-header_text text-xs ">
                      {data.text}
                    </div>
                  </div>

                  <div className="w-1/4 text-suggest_link text-sm text-right">Follow</div>
                </div>
              );
            })}
          </div>
        </div>
        {/**Footer */}
        <div className="h-2/6 w-full text-xs text-footer_text font-bold">
          <ul className="space-x-1 divide-x-2 divide-solid   ">
            <li className="inline">About</li>
            <li className="inline">Help</li>
            <li className="inline">Press</li>
            <li className="inline">API</li>
            <li className="inline">Jobs</li>
            <li className="inline">Privacy </li>
            <li className="inline">Terms</li>
            <li className="inline">Locations</li>
            <li className="inline">Language </li>
          </ul>
          <div>&#169; 2022 INSTAGRAM FROM META</div>
        </div>
        
      </div>
    </section>
  );
}

export default BodyRight;
