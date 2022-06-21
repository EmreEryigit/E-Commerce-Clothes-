import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://62b18651c7e53744afbb01bb.mockapi.io/ecommerce/v1/Clothes"
    );
    setData(response.data);
  };
  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <div className="clothesContainer">
      {data.map((c) => (
        <div key={c.id} className="card" style={{ width: "18rem" }}>
          <img src={c.image} className="card-img-top" alt="..." style={{width: "18rem", height: "10rem"}} />
          <div className="card-body">
            <h5 className="card-title">{c.name}</h5>
            <p className="card-text">
              {Math.floor(Math.random()* 1000)}$
            </p>
            <Link to={`/${c.id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
