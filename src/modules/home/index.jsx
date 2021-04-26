import React from "react";
import api from "./api";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
const Home = () => {
  const { push } = useHistory();

  const { data } = useQuery("digimon", () =>
    api("https://digimon-api.vercel.app/api/digimon")
  );

  console.log("DATA-->", data);
  const goCache = () => {
    push("/cache");
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            goCache();
          }}
        >
          goCache
        </button>
      </div>
    </>
  );
};

export default Home;
