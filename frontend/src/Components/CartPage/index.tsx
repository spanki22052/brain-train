import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ProductMinusOneAction,
  ProductPlusOneAction,
  RemoveCartAction,
} from "../Redux/actions/cartAction";
import { useAppSelector } from "../Redux/store";
import {
  CartBlock,
  CartComponent,
  CartHolder,
  CartProductBlock,
  CurrentSumH1,
  TrashButton,
} from "./styles";
import { TrashSVG } from "./trashSVG";

interface cartProductInterface {
  sum: number;
  id: number;
}

const CartPage = () => {
  const [isAll, setAll] = useState<boolean>(false);
  const productsList = useAppSelector(
    (state) => state.productDataInterface
  ).showAll;
  const cartList = useAppSelector((state) => state.cartStateInterface);
  const [currentSum, setCurrentSum] = useState<number>(0);
  const currentIds = cartList.productInfo.map((el) => {
    return el.id;
  });
  const [removeListCounter, setRemoveListCounter] = useState<number>(0);

  const dispatch = useDispatch();

  return (
    <CartComponent>
      <CartBlock>
        <h1>Корзина ({cartList.amount})</h1>

        <div className="checkbox-text">
          <input
            type="checkbox"
            checked={isAll}
            onChange={() => setAll(!isAll)}
          />
          <p onClick={() => setAll(!isAll)}>Выбрать все</p>
        </div>
      </CartBlock>
      <CartHolder>
        {currentIds.length > 0 ? (
          currentIds.map((el, index) => {
            const product = productsList[el];

            const productSum =
              currentSum +
              productsList[el].price * cartList.productInfo[index].amount;

            return (
              <CartProductBlock key={index}>
                <img src={product.image} alt="as" />

                <div className="text-holder">
                  <h1>{product.title}</h1>
                  <h1 className="price"> {product.price}.00р </h1>
                </div>

                <div className="buttons-holder">
                  <button
                    style={{
                      color:
                        cartList.productInfo[index].amount === 1
                          ? "gray"
                          : "black",
                    }}
                    onClick={() =>
                      dispatch(
                        ProductMinusOneAction(index, productsList[el].price)
                      )
                    }
                  >
                    -
                  </button>
                  <p>{cartList.productInfo[index].amount}</p>
                  <button
                    onClick={() =>
                      dispatch(
                        ProductPlusOneAction(index, productsList[el].price)
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <TrashButton
                  onClick={() => {
                    console.log(removeListCounter);
                    dispatch(
                      RemoveCartAction(
                        el,
                        productsList[el].price *
                          cartList.productInfo[el - removeListCounter].amount
                      )
                    );
                    currentIds.splice(el, 1);
                    setRemoveListCounter(removeListCounter + 1);
                  }}
                >
                  <TrashSVG />
                </TrashButton>
              </CartProductBlock>
            );
          })
        ) : (
          <p>Ваша корзина пуста</p>
        )}
        <CurrentSumH1>Всего: {cartList.productsSum}.00p </CurrentSumH1>
      </CartHolder>
    </CartComponent>
  );
};

export default CartPage;
