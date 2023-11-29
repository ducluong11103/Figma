import React, { useEffect, useState } from "react";
import axios from "axios";

const CallApi = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    const fetchData = async function(){
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CallApi;



