import "./App.css";
import Tours from "./Component/Tours";
import React, { useState, useEffect } from "react";

const url = "https://www.course-api.com/react-tours-project";
function App() {
  // states for loading and tour rendering
  const [tours, setTours] = useState([]);
  const [loading, setIsLoading] = useState(true);

  // props function to remove each object
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // data fetch with async await function starts here
  const getTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      // const { name } = places;
      setTours(tours);
    } catch (error) {
      window.alert("Something went wrong");
      setIsLoading(false);
      console.log(error);
    }
  };

  //   .catch(
  //   err=>console.warn("Something went wrong:",err)
  // );
  useEffect(() => {
    getTours();
  }, []);

  // loading return
  if (loading) {
    return (
      <div>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <>
        <h2 className="title">No Tours left</h2>
        <div className="underline"></div>
        <div className="container-btn">
          <button type="button" className="btn" onClick={() => getTours()}>
            Get Tour Options
          </button>
        </div>
      </>
    );
  }
  // jsx
  return (
    <React.Fragment>
      <h2 className="title">Our Tours</h2>
      <div className="underline"></div>
      {/* tours and removetour passed down as props */}
      <div className="container">
        <Tours tours={tours} removeTour={removeTour} />
        <div className="container-btn">
          <button type="button" onClick={() => setTours([])} className="btn">
            Not interested in any
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
