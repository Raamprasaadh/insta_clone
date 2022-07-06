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
      <div className="flex-col space-y-6 md:flex max-w-1/2 max-h-2/3">
        {/**profile */}
        <div className="flex flex-row space-x-2 items-center w-full">
          <div className="w-1/8">
            <img
              className="w-14 h-auto rounded-full"
              src={profilePic}
              alt="profile_pic"
            />
          </div>
          <div className="w-2/3 space-y-2 shrink-0">
            <div className="w-full h-4 text-suggest_pf_uname font-medium text-sm">
              badlytimedjokes
            </div>
            <div className="w-full h-4 text-header_text text-sm">
              RamPrasadh Natarajan
            </div>
          </div>
          <div className="w-1/12 text-suggest_link text-xs">Switch</div>
        </div>
        {/**Suggestion */}
        <div className="flex flex-col space-y-1 w-full">
          <div className="flex flex-row space-x-4 items-center">
            <div className="w-8/12 font-base text-header_text text-left">
              Suggestions for you
            </div>
            <div className="w-3/12 text-xs font-medium text-right">
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

                  <div className=" text -right w-1/4 text-suggest_link text-sm text-right">Follow</div>
                </div>
              );
            })}
          </div>
        </div>
        {/**Footer */}
        <div className="h-2/6 w-full text-xs text-footer_text font-medium space-y-4 mb-5">
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
