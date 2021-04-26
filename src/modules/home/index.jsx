import React from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import { getRick } from "./api";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
const Home = () => {
  const {
    params: { id },
  } = useRouteMatch();
  const { push } = useHistory();

  const { data } = useQuery(["listRick"], async () => await getRick());

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
