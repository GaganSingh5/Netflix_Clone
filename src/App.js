// import logo from './logo.svg';
import './App.css';
import Row from './Row';
import Banner from './Banner'
import requests from './requests';

import Nav from './Nav'

function App() {
  return (
    <div className="App">

      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      <Row 
      title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTreanding}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>

    </div>
  );
}

export default App;
