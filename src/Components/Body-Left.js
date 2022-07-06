
import status1 from "../images/suggest_ruthra.jpg";
import status2 from "../images/suggest_cruzer.jpg";
import status3 from "../images/suggest_suraj.jpg";
import status4 from "../images/suggest_flash.jpg";
import status5 from "../images/suggest_anthro.jpg";


function BodyLeft() {

  const statusData = [
    { img: status1 }, 
    { img: status2 }, 
    { img: status3 },  
    { img: status4 },
    { img: status5 }
  ];

  return (
    <section id="bodyMain">
      <div className="flex flex-col space-y-4 grow-1 min-h-full max-w-1/3 border-4 border-black">
        {/**statusbar */}
        <div className="flex flex-row mx-10 bg-white border-2 border-header_border rounded-lg shadow">
          {
            statusData.map((datum, index)=>{
              return<img key={index}className="rounded-full w-14 h-14" src={datum.img} alt="status1"/>
            })
          }
        </div>
        {/**feed */}
        Main Body Main Body Main Body Main Body Main Body Main BodyMain BodyMain BodyMain Body Main BodyMain BodyMain Body
      </div>
    </section>
  );
}

export default BodyLeft;
