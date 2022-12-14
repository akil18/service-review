import React from "react";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
   const { _id, name, price, description, picture } = service;

   const shortDescription = description.slice(0, 100) + "...";

   return (
      <div className="card bg-base-100 shadow-xl">
         <figure className="px-10 pt-10">
            <PhotoProvider>
               <PhotoView src={picture}>
                  <img src={picture} alt={name} className="w-full h-64 cursor-pointer" />
               </PhotoView>
            </PhotoProvider>
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>Price: {price} lacs</p>
            <p>{shortDescription}</p>
            <div className="card-actions">
               <Link to={`/services/${_id}`}>
                  <button className="btn btn-primary w-64 rounded-none">View Details</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;
