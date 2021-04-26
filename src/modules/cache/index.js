import React from "react";
import { useQuery, useQueryCache, QueryCache } from "react-query";

const Cache = () => {
  const { data: digimon } = useQuery("listRick");

  const generateCart = () => {
    return digimon.map((item, index) => {
      return (
        <div style={{ marginBottom: "20px" }}>
          <img src={item.img} />
          <div>Name : {item.name}</div>
        </div>
      );
    });
  };

  return (
    <>
      {!!digimon && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            overflow: "auto",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          {generateCart()}
        </div>
      )}
    </>
  );
};
export default Cache;
