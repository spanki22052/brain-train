import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  ProductMinusOneAction,
  ProductPlusOneAction,
  RemoveCartAction,
} from "../Redux/actions/cartAction";
import { useAppSelector } from "../Redux/store";
import {
  CartComponent,
  CartHolder,
  CartProductBlock,
  CartStateH1,
  CurrentSumH1,
  SendCartButton,
  TrashButton,
} from "./styles";
import { TrashSVG } from "./trashSVG";

const CartPage = () => {
  const productsList = useAppSelector(
    (state) => state.productDataInterface.showAll
  );
  const cartList = useAppSelector((state) => state.cartStateInterface);
  const dispatch = useDispatch();

  const history = useHistory();

  const cartSum = useCallback(
    () => cartList.productInfo.reduce((a, b) => a + b.price * b.amount, 0),
    [cartList]
  );

  const cartAmount = useCallback(
    () => cartList.productInfo.reduce((a, b) => a + b.amount, 0),
    [cartList]
  );

  return (
    <CartComponent>
      <CartHolder>
        <CartStateH1>Корзина ({cartAmount()})</CartStateH1>
        {cartList.productInfo.length > 0 ? (
          cartList.productInfo.map((el, index) => {
            const product = productsList.find(
              (element) => element.id === el.id
            );
            return (
              product && (
                <CartProductBlock key={index}>
                  <img src={product.image} alt="as" />

                  <div className="text-holder">
                    <h1>{product?.title}</h1>
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
                          ProductMinusOneAction(product.id, product.price)
                        )
                      }
                    >
                      -
                    </button>
                    <p>{cartList.productInfo[index].amount}</p>
                    <button
                      onClick={() =>
                        dispatch(
                          ProductPlusOneAction(product.id, product.price)
                        )
                      }
                    >
                      +
                    </button>
                    <TrashButton
                      onClick={() => {
                        dispatch(
                          RemoveCartAction(
                            index,
                            product.price * cartList.productInfo[index].amount,
                            cartList.productInfo[index].amount
                          )
                        );
                      }}
                    >
                      <TrashSVG />
                    </TrashButton>
                  </div>
                </CartProductBlock>
              )
            );
          })
        ) : (
          <p>Ваша корзина пуста</p>
        )}
        <CurrentSumH1>Всего: {cartSum()}.00p </CurrentSumH1>
        <SendCartButton onClick={() => history.push("/")}>
          Заказать
        </SendCartButton>
      </CartHolder>
    </CartComponent>
  );
};

export default CartPage;
