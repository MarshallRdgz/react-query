import React from "react";
import { useQuery, useQueryCache, QueryCache } from "react-query";

const Cache = () => {
  //const queryCache = useQueryCache();
  const { data } = useQuery("listRick");

  return (
    <>
      {data && (
        <div style={{ width: "100vw", height: "100vh", overflow: "auto" }}>
          {JSON.stringify(data)}
        </div>
      )}
    </>
  );
};
export default Cache;
