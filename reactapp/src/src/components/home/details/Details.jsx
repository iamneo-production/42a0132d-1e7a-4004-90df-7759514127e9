import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { MdStarRate } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD, DELETE, REMOVE_INT } from "../../../controller/action";

export const Details = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getdata = useSelector((state) => state.cartReducer.carts);

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [getdata, id]);

  const dispatch = useDispatch();

  const increment = (item) => {
    dispatch(ADD(item));
  };

  const decrement = (item) => {
    dispatch(REMOVE_INT(item));
  };

  const deletes = (id) => {
    dispatch(DELETE(id));
  };

  const cartState = useSelector((state) => state.cart);

  return (
    <article>
      <section className="details">
        <h2 className="details_title">Product Details Pages</h2>
        {data.map((item) => (
          <div className="details_content" key={item.id}>
            <div className="details_content_img">
              {/* Ensure the image URL is valid and accessible */}
              <img src={item.cover} alt={item.title} />
            </div>
            <div className="details_content_detail">
              <h1>{item.title}</h1>
              <div className="rating">
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <label htmlFor="">(1 customer review)</label>
              </div>
              <h3>${item.price * item.qty}</h3>
              <p>{item.author}</p>
              <div className="qty">
                <div className="count">
                  <button onClick={() => increment(item)}>
                    <AiOutlinePlus />
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={item.qty <= 1 ? () => deletes(item.id) : () => decrement(item)}
                  >
                    <AiOutlineMinus />
                  </button>
                </div>
                <Link to="/payment">
        <button className="button">PAY</button>
        </Link>
              </div>
              <div className="desc">
                <h4>PRODUCTS DESCRIPTION</h4>
                <p>{item.description}</p>
                <h4>PRODUCT DETAILS</h4>
                <ul>
                  {item.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      <p>{ingredient}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};
