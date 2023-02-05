import { cardData } from "../../Util/data";
import Card from "../Card/Card";
import "./Cardlist.css";

const Cardlist = ({ setOrder, order }) => {
  
  return (
    <>
      <h1 className="card-title">CARDS</h1>
      <div className="cards">
        {cardData.map((item) => {
          return <Card discgolf={item} setOrder={setOrder} order={order} />;
        })}
      </div>
    </>
  );
};

export default Cardlist;
