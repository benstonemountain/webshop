import "./Card.css";

const Card = ({ discgolf, setOrder, order }) => {
  // const temp = order;


  const addOrder = () => {
    order.push({ title: discgolf.title, price: discgolf.price });
    setOrder(order);
    console.log("lefut");
    console.log(order);

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
