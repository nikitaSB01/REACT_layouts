import PropTypes from "prop-types";

// Компонент для отображения одного товара в списке
function ShopItem({ item }) {
  // Динамическое формирование класса для цвета текста
  const colorClass = `color-${item.color.toLowerCase()}`;

  return (
    <div className="shop-item">
      <img src={item.img} alt={item.name} />
      <div>{item.name}</div>
      {/* Применяем динамический класс для цвета */}
      <div className={colorClass}>{item.color}</div>
      <div>${item.price}</div>
      <button>Add to Cart</button>
    </div>
  );
}

// Пропсы, которые ожидает компонент
ShopItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired, // Название товара
    price: PropTypes.string.isRequired, // Цена товара
    color: PropTypes.string.isRequired, // Цвет товара
    img: PropTypes.string.isRequired, // Ссылка на изображение товара
  }).isRequired,
};

export default ShopItem;
