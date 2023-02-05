import "./Cart.css";

const Cart = ({ order }) => {
 console.log(order);

  return (
    <div className="cart">
      <h3>Cart</h3>

      {order.map((item) => (
        <p className="item-field">
          {item.title} {item.price}
        </p>
      ))}
      <button className="total">Total</button>
    </div>
  );
};

export default Cart;
