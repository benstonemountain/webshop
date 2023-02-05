import "./Card.css";

const Card = ({ discgolf, setOrder, order }) => {

  const addOrder = () => {
    const newOrder = [...order, { title: discgolf.title, price: discgolf.price }];
    setOrder(newOrder);
  };


  return (
    <div className="card-container">
      <div className="img-holder">
        <img src={discgolf.img} alt="" />
      </div>

      <div className="content">
        <h2>{discgolf.title}</h2>
        <p>{discgolf.subject}</p>
        <p>{discgolf.description}</p>

        <div className="price_btn">
          <p>{discgolf.price}</p>
          <button
            onClick={() => {
              //hozzáadja a tömböt
              addOrder();
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
