import PropTypes from "prop-types";
import styles from "./PricingCards.module.css";

const PricingCards = ({ item }) => {
  const { isExclusive, price, bonus, currencySymbol } = item;
  return (
    <a href="https://liven.love/" target="_blank" className={styles.cardLink}>
      <div className={styles.container}>
        {isExclusive && (
          <div className={styles.exclusive}>
            <img
              src="https://framerusercontent.com/images/YLFB1QvzVQV1Av1S0aAVCUvc.png"
              width={15}
              height={15}
            />
            App exclusive
          </div>
        )}
        <div className={styles.buySection}>
          <span>Buy</span>
          <span>
            {currencySymbol}
            {price}
          </span>
        </div>
        <img src="gold-coin.png" width={35} height={35} />
        <div className={styles.bonusSection}>
          <span>Bonus</span>
          <span>
            {currencySymbol}
            {bonus}
          </span>
        </div>
      </div>
    </a>
  );
};

PricingCards.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.string,
    currencySymbol: PropTypes.string,
    bonus: PropTypes.string,
    isExclusive: PropTypes.bool,
  }),
};

export default PricingCards;
