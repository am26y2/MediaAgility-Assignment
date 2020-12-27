import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import Search from "./components/search";
import "./styles.css";
function App() {
  const modifydata = [];
  const [match, setMatch] = useState([]);

  const [duplistItem, setDupListItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const handleSearch = (event) => {
    if (event.target.value.length === 0) {
      setMatch(duplistItem);
      return;
    }
    fetchSearchApi(event.target.value);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchSearchApi = async (city) => {
    setLoading(true);
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=838e204efaddf1fe762759fcc9bd6dbb`;
    const response = await fetch(apiurl);
    const data = await response.json();
    if (data.name) {
      setMatch([
        {
          name: data.name,
          countryCode: data.sys.country,
          temp: data.main.temp,
          min: data.main.temp_min,
          max: data.main.temp_max,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          wind: data.wind
        }
      ]);
    } else {
      setMatch([]);
    }
    setLoading(false);
  };
  const fetchApi = async () => {
    setLoading(true);
    const apiurl = `https://api.openweathermap.org/data/2.5/group?id=1260086,1273294,1271439,1276977,1277333,1278017,1275738,1275716,1275019,1261481,1260607,1271107,1268773,1268124,1267090,1266809,1264389,1270642&units=metric&appid=838e204efaddf1fe762759fcc9bd6dbb`;
    const response = await fetch(apiurl);
    const data = await response.json();
    for (let i = 0; i < data.cnt; i++) {
      modifydata.push({
        name: data.list[i].name,
        countryCode: data.list[i].sys.country,
        temp: data.list[i].main.temp,
        min: data.list[i].main.temp_min,
        max: data.list[i].main.temp_max,
        pressure: data.list[i].main.pressure,
        humidity: data.list[i].main.humidity,
        wind: data.list[i].wind
      });
    }
    setMatch(modifydata);
    setDupListItem(modifydata);
    setLoading(false);
  };
  //sort by name

  match.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = match.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <header>
        <Search handleSearch={handleSearch} />
      </header>
      <div className="main">
        <Posts posts={currentPosts} loading={loading} />
      </div>
      <footer>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={match.length}
          paginate={paginate}
        />
      </footer>
    </div>
  );
}

export default App;
