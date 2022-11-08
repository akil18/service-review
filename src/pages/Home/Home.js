import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard";

const Home = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:5000/servicesinHome`)
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);

   return (
      <div className="p-8">
         <div className="flex justify-evenly text-4xl font-bold px-44 py-8">
            <h1>MODERN</h1>
            <h1>.</h1>
            <h1>ERGONOMIC</h1>
            <h1>.</h1>
            <h1>DESIGN</h1>
         </div>
         <div className="flex justify-center">
            <img
               className="w-full h-screen"
               src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
               alt="banner-img"
            />
         </div>
         <div className="grid grid-cols-3 justify-between gap-4 py-12">
            {services.map((service) => (
               <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
         </div>
         <Link to="/services">
            <button className="btn btn-outline">See All</button>
         </Link>
      </div>
   );
};

export default Home;
