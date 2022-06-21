import Item from "./Item";
import { product } from "./Product";

const Cart = ({ handleCart, size }) => {
  return (
    <>
      <section className="maincart ">
        <h1>Snap Items</h1>
        <p>
          These <span className="totalItemCout">4</span>Items are available
        </p>

        {product.map((currItem) => (
          <Item key={currItem.id} currItem={currItem} handleCart={handleCart} />
        ))}

        {/* {product.map((currItem) => {
            return (
              <Item
                key={currItem.id}
                {...currItem}
                currItem={currItem}
                handleCart={handleCart}
              />
            );
          })} */}
      </section>
    </>
  );
};

export default Cart;
