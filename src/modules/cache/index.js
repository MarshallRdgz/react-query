import React from "react";
import { useQuery, useQueryCache, QueryCache } from "react-query";

const Cache = () => {
  const { data } = useQuery("listRick");
  console.log("dataUseQuery--->", data);

  const generateCart = () => {
    return data.results.map((item, index) => {
      return (
        <div style={{ marginBottom: "20px" }}>
          <img src={item.image} />
          <div>Name : {item.name}</div>
          <div>Status : {item.status}</div>
          <div>Specie : {item.species}</div>
        </div>
      );
    });
  };

  return (
    <>
      {!!data && (
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
