import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main.JSX";
import SideBar from "./components/SideBar";
function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  function handleToogle() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("fetch from catch today");

        return;
      }

      localStorage.clear();

      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("fetch from api today");
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchAPIData();
  }, []);
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-duotone fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <SideBar data={data} handleToogle={handleToogle} />}
      {data && <Footer data={data} handleToogle={handleToogle} />}
    </>
  );
}

export default App;
