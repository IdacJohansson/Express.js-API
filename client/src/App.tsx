import { useEffect, useState } from "react";
import axios from "axios";
import PinocchioImage from "./components/pinocchioImage";
import Card from "./components/Card";

interface Mugshot {
  fullName: string;
  bookingNumber: number;
  arrestDateTime: string;
  charges: string;
  arrestingAgency: string;
  arrestLocation: string;
}

function App() {
  const [mugshotArr, setMugshotArr] = useState<Mugshot[]>([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setMugshotArr(response.data.mugshot);
  };

  // call the function

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div className="content-container">
        <PinocchioImage />
        {mugshotArr.map((mugshotData, index) => (
          <Card
            key={index}
            Agency={mugshotData.arrestingAgency}
            Location={mugshotData.arrestLocation}
            Name={mugshotData.fullName}
            DateTime={mugshotData.arrestDateTime}
            Number={mugshotData.bookingNumber}
            Charges={mugshotData.charges}
          />
        ))}
        ;
      </div>
    </>
  );
}

export default App;
