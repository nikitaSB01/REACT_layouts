import PropTypes from "prop-types";

function ShopItem({ item }) {
  return (
    <div className="shop-item">
      <img src={item.img} alt={item.name} />
      <div>{item.name}</div>
      <div>{item.color}</div>
      <div>${item.price}</div>
      <button>Add to Cart</button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShopItem;
