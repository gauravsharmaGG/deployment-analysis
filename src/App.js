import "./App.css";
import { data, Description, Header, Item } from "./Component";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 mt-4">
        <Description />
      </div>
      <div className="container mx-auto ">
        <div className="flex mt-10 flex-wrap  pb-5 ">
          {data.map((shoeDetails) => (
            <Item {...shoeDetails} key={shoeDetails.key} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
