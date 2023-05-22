import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data/card.-data.json";

function App() {
  console.log(cardData);
  const cards = cardData.map((item, index) => {
    return (
      <Card
        key={index}
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards-section">{cards}</div>
    </div>
  );
}

export default App;
