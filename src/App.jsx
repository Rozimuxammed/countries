import { useState } from "react"
import Countries from "./components/Countries"
import Header from "./components/Header";

function App() {
  const [region, setRegion] = useState("all");
  const [inpValue, setInpValue] = useState();
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true)
  const [mode, setMode] = useState(
    localStorage.getItem("theme")
  );

  const handleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };


  const handleInput = (e) => {
    const value = e.target.value;
    setCountries([])
    setInpValue(value);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setRegion(value === "All" ? "all" : "region/" + value)

  }

  const [regions] = useState([
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);
  const [countries, setCountries] = useState([]);


  return (
    <div className="py-25">
      <Header regions={regions} handleChange={handleChange} handleInput={handleInput} handleMode={handleMode} mode={mode} />
      {
        error && <div className="container mx-auto text-center mt-[20%]">
          <p className="text-red-500 text-5xl font-bold">{error}</p>
        </div>
      }
      <Countries countries={countries} setCountries={setCountries} region={region} inpValue={inpValue} setError={setError} setLoader={setLoader} />
      {
        loader && (
          <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )
      }
    </div>
  )
}

export default App
