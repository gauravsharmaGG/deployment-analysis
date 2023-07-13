import { useEffect, useState } from "react";
import "./App.css";
import { data, Description, Header, Item } from "./Component";

function App() {
  const [shoes, setShoes] = useState(null);

  useEffect(() => {
    fetch("/api/v1/shoes")
      .then((response) => response.json())
      .then((data) => {
        setShoes(data?.response?.shoes);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 mt-4">
        <Description />
      </div>
      <div className="container mx-auto ">
        <div className="flex mt-10 flex-wrap  pb-5 ">
          {shoes &&
            shoes.map((shoeDetails) => (
              <Item {...shoeDetails} key={shoeDetails.key} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
