import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./component/Card";
import "./css/main.css";

function App() {
  const [api, setApi] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = () => {
    setcurrentPage(currentPage + 1);
    axios
      .get("https://rickandmortyapi.com/api/character?page=" + currentPage)

      .then((res) => {
        console.log(res);
        console.log(res.data.length);

        setApi([...api, ...res.data.results]);
      });
  };
  return <Card api={api} fetchMoreData={fetchMoreData} />;
}

export default App;
