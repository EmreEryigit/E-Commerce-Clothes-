import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorites } from "../store/clothSlice";

export const Button = styled.button`
    background-color: #4CAF50;
    border-radius: 5px;
    border: none;
    margin: 5px;
    color: white;
    padding: 10px 10px;
    text-align: center;
    -webkit-box-shadow: -5px 5px 5px 2px rgba(0,0,0,0.92); 
box-shadow: -5px 5px 5px 2px rgba(0,0,0,0.92);

`
const Details = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCloth();
  }, []);
  const getCloth = async () => {
    const response = await axios(
      `https://62b18651c7e53744afbb01bb.mockapi.io/ecommerce/v1/Clothes/${id}`
    );
    setData(response.data);
  };

  return (
    <div className="detailContainer">
      <div className="frontContainer">
        <h3>{data.name}</h3>
        <img src={data.image} alt="" />
      </div>
      <div className="otherContainer">
      
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          placeat voluptate a voluptates nisi atque aliquam aspernatur vitae
          quos delectus. Nesciunt sunt eveniet repellendus quod autem corporis
          sequi illum voluptate.
        </p>
        <h4 className="price">Costs {data.price}$</h4>
        <Button onClick={() => dispatch(addToFavorites(data))}>Fav</Button>
        <Button onClick={() => dispatch(addToCart(data))} style={{backgroundColor: "teal"}}>Cart</Button>
        <NavLink to="/">HomePages</NavLink>
      </div>
    </div>
  );
};

export default Details;
