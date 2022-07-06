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
      <div className="flex-col space-y-4 md:flex min-w-max max-h-2/3">
        {/**profile */}
        <div className="flex flex-row w-full space-x-4 items-center">
          <div className="w-1/8">
          <img
            className="w-14 h-14 rounded-full"
            src={profilePic}
            alt="profile_pic"
          />
            </div>
            <div className="w-6/8 shrink-0">
                    <div>badlytimedjokes</div>
                    <div>Ramprasadh Natarajan</div>
                </div>
                <div className="w-1/8">
                    switch
                </div>
        </div>
        {/**Suggestion */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center">
            <div className="w-4/5 text-sm">Suggestions for you</div>
            <div className="w-1/5 text-xs font-bold">See all</div>
          </div>
          <div className="flex flex-col">
            {suggestData.map((data, index) => {
              return (
                <div key={index} className="flex flex-row space-x-1 items-center">
                    <div className="w-1/8">
                  <img src={data.img} alt={`suggest${index}`} className="w-8 h-8 rounded-full" />
                  </div>
                  <div className="w-6/8 shrink-0">
                    <div className=" hover:underline underline-offset-2 decoration-2 hover:cursor-pointer">{data.name}</div>
                    <div>{data.text}</div>
                  </div>
                  <div className="w-1/8">Follow</div>
                </div>
              );
            })}
          </div>
        </div>
        {/**Footer */}
        <div> </div>
      </div>
    </section>
  );
}

export default BodyRight;
