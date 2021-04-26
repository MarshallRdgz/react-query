import React from "react";
import { useQuery } from "react-query";

const Cache = () => {
  const { data: digimon } = useQuery("digimon");

  const generateCart = () => {
    return digimon.map((item, index) => {
      const key = `digi-${index}`;
      return (
        <div key={key} style={{ marginBottom: "20px" }}>
          <img src={item.img} alt={item.name} />
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
