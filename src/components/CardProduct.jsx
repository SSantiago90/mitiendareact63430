import Button from "./Button";
function CardProduct(props) {
  const { price, title, text, img } = props;

  return (
    <div className="card">
      <img src={img} width="150" height="150" alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <div>
          <p className="card-price">$ {price}</p>
        </div>
        <Button>Agregar al carrito</Button> {/* children */}
      </div>
    </div>
  );
}

export default CardProduct;
//rfce
