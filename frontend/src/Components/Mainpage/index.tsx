import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  MainpageBlock,
  ProductBlock,
  ProductBlocksHolder,
  TextHolder,
} from "./style";

interface ProductInterface {
  title: string;
  price: number;
  id: string;
  description: string;
  dates: [string];
  image: string;
}

interface ProductData {
  showAll: ProductInterface[];
}

export const GET_PRODUCTS_LIST = gql`
  query {
    showAll {
      title
      id
      description
      price
      image
      dates
    }
  }
`;

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
  const { loading, data } = useQuery<ProductData>(GET_PRODUCTS_LIST);
  const [products, setProducts] = useState<ProductInterface[]>();
  const [currentDay, setDay] = useState("");

  useEffect(() => {
    if (!loading) data !== undefined && setProducts(data.showAll);
  }, [data, loading]);

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
      </TextHolder>
      <ProductBlocksHolder>
        {products !== undefined &&
          products
            .filter((el) => (currentDay ? el.dates.includes(currentDay) : true))
            .map((el, index) => {
              return (
                <ProductBlock key={index}>
                  <img src={el.image} alt="im" />
                  <h1>{el.title}</h1>
                  <h2>{el.description}</h2>
                  <span>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="circle"
                        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                        stroke="#8B8B8B"
                      />
                      <path
                        className="plus"
                        d="M11 7V11M11 11V15M11 11H15M11 11H7"
                        stroke="#8B8B8B"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </ProductBlock>
              );
            })}
      </ProductBlocksHolder>
    </MainpageBlock>
  );
};

export default Mainpage;
