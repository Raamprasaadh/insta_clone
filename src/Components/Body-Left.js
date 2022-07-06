
import status1 from "../images/suggest_ruthra.jpg";
import status2 from "../images/suggest_cruzer.jpg";
import status3 from "../images/suggest_suraj.jpg";
import status4 from "../images/suggest_flash.jpg";
import status5 from "../images/suggest_anthro.jpg";

import pp1 from "../images/pp_1.jpg";
import pp2 from "../images/pp_2.jpg";
import post1 from "../images/post1.jpeg";
import post2 from "../images/post2.jpg";

function BodyLeft() {

  const statusData = [
    { img: status1 }, 
    { img: status2 }, 
    { img: status3 },  
    { img: status4 },
    { img: status5 }
  ];
  const feedData = [
    { img: pp1,name:"webdesignuniversity", postImg:post1, postBody:"Generate QR Code with simple JavaScript 🔥" }, 
    { img: pp2,name:"*moviequotesworld*", postImg:post2, postBody:"Everyone's talking about the #StrangerThings kids grew up so much and nobody's talking about how amazing #Hopper had... more" }, 
    
  ];
  return (
    <section id="bodyMain">
      <div className="flex flex-col space-y-4 grow-1 h-full w-2/3 max-w-2/3">
        {/**statusbar */}
        <div className="flex flex-row bg-white border-2 border-header_border rounded-lg shadow">
          {
            statusData.map((datum, index)=>{
              return<img key={index}className="rounded-full w-14 h-14" src={datum.img} alt="status1"/>
            })
          }
        </div>
        {/**feed */}
        <div className="flex flex-col">
          {/**feed card */
          feedData.map((data,index)=>{
            return <div className="rounded-lg border-2 border-header_border" key={index}>
              {/**feed card head */}
              <div className="flex space-x-5 flex-row w-2/3 h-10 items-center justify evenly">
                <img className="w-1/10 h-10 rounded-full justify-self-center" src={data.img} alt="post_profile"/>
                <div className="w-7/10 justify-self-center">{data.name}</div>
                <div className="w-1/10 icon justify-self-center">...</div>
              </div>
              {/**feed card img */}
              <img className="w-2/3" src={data.postImg} alt="post_img"/>
            </div>
          })
          }
        </div>
      </div>
    </section>
  );
}

export default BodyLeft;
