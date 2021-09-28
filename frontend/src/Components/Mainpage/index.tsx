import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductInterface } from "../Interfaces/products.interface";
import { cartAction } from "../Redux/actions/cartAction";
import { useAppSelector } from "../Redux/store";
import { PlusSVG } from "../SVG/plus";
import {
  DaysP,
  DaysStateHolder,
  MainpageBlock,
  ProductBlock,
  ProductBlocksHolder,
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

const shortDaysList = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const Mainpage = () => {
  const [currentDay, setDay] = useState("");
  const [currentFoodType, setFoodType] = useState("");
  const foodTypes: string[] = useAppSelector(
    (state) => state.foodTypesInterface.foodtypes
  );
  const ProductsList: ProductInterface[] = useAppSelector(
    (state) => state.productDataInterface.showAll
  );

  var daysTranslatorObject = {};

  shortDaysList.map(
    (el, index) =>
      (daysTranslatorObject = {
        ...daysTranslatorObject,
        [el]: daysList[index],
      })
  );

  const dispatch = useDispatch();

  const getFilteredProductList = useCallback(() => {
    let filteredProductList: ProductInterface[] = ProductsList;
    if (currentDay) {
      filteredProductList = filteredProductList.filter((el) =>
        el.dates.includes(currentDay)
      );
    }
    if (currentFoodType) {
      filteredProductList = filteredProductList.filter(
        (el) => el.foodtype === currentFoodType
      );
    }

    return filteredProductList;
  }, [ProductsList, currentFoodType, currentDay]);

  return (
    <MainpageBlock>
      <DaysStateHolder>
        <p style={{ cursor: "auto" }}>День недели:</p>
        {shortDaysList.map((el, index) => {
          return (
            <DaysP
              bkg={currentDay === daysList[index] ? true : false}
              onClick={() => setDay(daysList[index])}
              key={index}
            >
              {el}
            </DaysP>
          );
        })}
        <DaysP onClick={() => setDay("")} bkg={currentDay ? false : true}>
          Все
        </DaysP>
      </DaysStateHolder>

      <select
        value={currentFoodType}
        onChange={(e) => setFoodType(e.target.value)}
      >
        {foodTypes !== undefined &&
          foodTypes.map((el, index) => {
            return (
              <option key={index} value={el}>
                {el}
              </option>
            );
          })}
        <option value="">Выберите категорию блюд</option>
      </select>

      <ProductBlocksHolder>
        {ProductsList &&
          getFilteredProductList().map((el, index) => {
            return (
              <ProductBlock key={index}>
                <img src={el.image} alt="im" />
                <h1>{el.title}</h1>
                <h2>{el.description}</h2>
                <span
                  onClick={() => {
                    dispatch(cartAction(el.id, el.price, el));
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
