import React from "react";
import image1 from "../images/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white text-black py-16 px-4 ">
      <div className="max-w-[1240px] border-black mx-auto grid md:grid-cols-2 ">
        <img src={image1} alt=""  className="w-[500px] mx-auto"/>
        <div className="flex flex-col justify-center gap-2 ">
          <h3 className="text-mint-green font-extrabold mb-3 ">DATA ANALYTICS DASHBOARD</h3>
          <h1 className="font-extrabold text-2xl  ">Manage Data Analytics Centrally </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            debitis ipsum aperiam mollitia unde et culpa nemo suscipit placeat
            distinctio excepturi dignissimos voluptatem ea deleniti harum eaque
            nesciunt, officia ducimus asperiores saepe dolore natus? Velit
            doloribus ratione obcaecati aliquid laudantium adipisci unde! Eaque
            inventore hic quos nam, adipisci impedit in.
          </p>
          <button className="border w-[150px] bg-black text-mint-green rounded-md py-2 hover:text-white hover:bg-mint-green transition-all ease-in-out shadow-md">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
