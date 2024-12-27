import PropTypes from "prop-types";
import ShopCard from "./ShopCard";

function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map((card) => (
        <ShopCard key={card.name + card.color} card={card} />
      ))}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      prise: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardsView;
