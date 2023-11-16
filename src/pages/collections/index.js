import CardList from "@/components/CardList";
import Filter from "@/components/Filter";
import Social from "@/components/social";
import React from "react";

function Collection(props) {
  return (
    <>
      <Filter />
      <div className="collection-listproduct">
        <div className="container">
          <div className="row">
            <div className="col">
              <CardList />
            </div>
          </div>
        </div>
      </div>
      <Social />
    </>
  );
}

export default Collection;
