import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

function ListView({ items }) {
  return (
    <div className="list-view">
      {items.map((item) => (
        <ShopItem key={item.name + item.color} item={item} />
      ))}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListView;
