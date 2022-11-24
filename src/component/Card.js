import React, { useEffect } from "react";
import "../css/main.css";

export default function Card(props) {
  const { api, fetchMoreData } = props;

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        fetchMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        {api.length > 0 &&
          api.map((character) => (
            <div
              className="col-xl-6 col-6 text-center card"
              key={Math.random()}
            >
              <img src={character.image} className="" alt={character.name} />
              <div className="carddetails">
                <p>{character.name}</p>
                <p>
                  <i
                    className={`fa fa-circle ${character.status.toLowerCase()}`}
                  ></i>
                  {character.status}-{character.species}
                </p>
                <p>
                  Last known location : <br />
                  {character.location.name}
                </p>
                <p>
                  First seen in : <br />
                  {character.origin.name}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
