import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Data from "./Data"
function App() {
  const cards = Data.map((item) => {
    return (
    <Card 
    key={item.id} 
    img={item.img}
    alt={item.img}  
    title={item.title}
    country={item.country}
    googleMapsLink={item.googleMapsLink}
    dates={item.dates}
    text={item.text}
    />
  )
  })
  return (
    <>
      <Header />
      <main>
        {cards}
      </main>
    </>
  );
}

export default App;
