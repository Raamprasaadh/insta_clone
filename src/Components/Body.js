import BodyLeft from "./Body-Left";
import BodyRight from "./Body-Right";

function Body() {
  return (
    <section id="body">
      <div className="flex flex-row min-h-full space-x-6 w-auto mx-80 justify-center">
        <BodyLeft/>
        <BodyRight/>
      </div>
    </section>
  );
}

export default Body;
