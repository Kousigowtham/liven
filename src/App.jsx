import Button from "./components/Button/Button";
import Switch from "./components/Switch/Switch";
import { pricingList } from "./data";
import PricingCards from "./components/PricingCards/PricingCards";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <a href=" https://liven.love/" target="_blank">
          <img src="liven.png" width={70} height={33} />
        </a>
        <Button
          ComponentAs="a"
          href="https://app.liven.com.au/"
          target="_blank"
        >
          Get App
        </Button>
      </header>
      <main>
        <h1 className="title">San Dollars</h1>
        <p className="sub-content">
          Pay now, eat more later! Earn a bonus when you buy food upfront. Tap
          now to purchase
        </p>
        <div className="giftContainer">
          <img src="gift.svg" width={15} height={15} />
          <Switch label="Purchase as gift" />
        </div>
        <section className="cardsContainer">
          {pricingList.map((item) => (
            <PricingCards key={item.id} item={item} />
          ))}
        </section>
        <a href=" https://liven.love/" target="_blank">
          <img src="liven.png" width={70} height={33} className="footer-img" />
        </a>
      </main>
    </div>
  );
}

export default App;
