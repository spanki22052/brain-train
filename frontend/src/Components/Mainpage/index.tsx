import { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductInterface } from "../Interfaces/products.interface";
import { cartAction } from "../Redux/actions/cartAction";
import { useAppSelector } from "../Redux/store";
import { PlusSVG } from "../SVG/plus";
import {
  MainpageBlock,
  ProductBlock,
  ProductBlocksHolder,
  TextHolder,
} from "./style";

export const daysList = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const Mainpage = () => {
  const [currentDay, setDay] = useState("");
  const [currentFoodType, setFoodType] = useState("");
  const foodTypes: string[] = useAppSelector(
    (state) => state.foodTypesInterface.foodtypes
  );
  const ProductsList: ProductInterface[] = useAppSelector(
    (state) => state.productDataInterface.showAll
  );

  const dispatch = useDispatch();

  return (
    <MainpageBlock>
      <TextHolder>
        {daysList.map((el, index) => {
          return (
            <p
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => setDay(el)}
            >
              {el}
            </p>
          );
        })}
        <p style={{ cursor: "pointer" }} onClick={() => setDay("")}>
          Все
        </p>
      </TextHolder>
      <TextHolder>
        {foodTypes !== undefined &&
          foodTypes.map((el, index) => {
            return (
              <p
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() => setFoodType(el)}
              >
                {el}
              </p>
            );
          })}
        <p style={{ cursor: "pointer" }} onClick={() => setFoodType("")}>
          Все
        </p>
      </TextHolder>
      <ProductBlocksHolder>
        {ProductsList !== undefined &&
          foodTypes !== undefined &&
          ProductsList.filter((el) =>
            currentDay ? el.dates.includes(currentDay) : true
          )
            .filter((el) =>
              currentFoodType ? el.foodtype === currentFoodType : true
            )
            .map((el, index) => {
              return (
                <ProductBlock key={index}>
                  <img src={el.image} alt="im" />
                  <h1>{el.title}</h1>
                  <h2>{el.description}</h2>
                  <span
                    onClick={() => {
                      dispatch(cartAction(index, el.price));
                    }}
                  >
                    <PlusSVG />
                  </span>
                </ProductBlock>
              );
            })}
      </ProductBlocksHolder>
    </MainpageBlock>
  );
};

export default Mainpage;
