import PropTypes from "prop-types";

function ShopCard({ card }) {
  return (
    <div className="shop-card">
      <img src={card.img} alt={card.name} />
      <div>{card.name}</div>
      <div>{card.color}</div>
      <div>{card.price}</div>
      <button>Add to Cart</button>
    </div>
  );
}

ShopCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShopCard;
