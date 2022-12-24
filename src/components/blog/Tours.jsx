import React, { useEffect, useState } from "react";
import "./tours.css";
import axios from "axios";
import { tours } from "../utils/data";
const Tours = () => {
  const [error, setError] = useState();
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://45.63.104.40:5000/api/v1/admin/user_list?page=1&limit=10",
          {
            mode: "cors",
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log(res, "results.....");
        // setTransaction(res.data);
      } catch (error) {
        // console.log(error.res);
        //  console.error(error.res);
        console.log("\n\n-----------", error);
      }
    };
    //jsonplaceholder.typicode.com/users
    //
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <card className="card-flexed">
          {tours ? (
            tours.map(({ image, id }) => {
              return (
                <div key={id}>
                  <content>
                    <img className="tour-image" src={image} />
                  </content>
                </div>
              );
            })
          ) : (
            <h1>No tours available</h1>
          )}
        </card>
      </div>
    </div>
  );
};

export default Tours;
