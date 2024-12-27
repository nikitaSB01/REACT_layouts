import PropTypes from "prop-types";

// Компонент для отображения одной карточки товара
function ShopCard({ card }) {
  // Динамическое формирование класса для цвета текста
  const colorClass = `color-${card.color.toLowerCase()}`;

  return (
    <div className="shop-card">
      <img src={card.img} alt={card.name} />
      <div>{card.name}</div>
      {/* Применяем динамический класс для цвета */}
      <div className={colorClass}>{card.color}</div>
      <div>${card.price}</div>
      <button>Add to Cart</button>
    </div>
  );
}

// Пропсы, которые ожидает компонент
ShopCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired, // Название товара
    price: PropTypes.string.isRequired, // Цена товара
    color: PropTypes.string.isRequired, // Цвет товара
    img: PropTypes.string.isRequired, // Ссылка на изображение товара
  }).isRequired,
};

export default ShopCard;
