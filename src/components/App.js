import Nav from "./Nav";
import Hero from "./Hero";
import Card from "./Card";
import Data from "./Data";
import "../css/App.css";

function App() {
  const card = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Nav />
      <Hero />
      <section>{card}</section>
    </div>
  );
}

export default App;
