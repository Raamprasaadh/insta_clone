import BodyLeft from "./Body-Left";
import BodyRight from "./Body-Right";

function Body() {
  return (
    <section id="body">
      <div className="bg-green-500 flex flex-row min-h-full min-w-full">
        Body
        <BodyLeft/>
        <BodyRight/>
      </div>
    </section>
  );
}

export default Body;
