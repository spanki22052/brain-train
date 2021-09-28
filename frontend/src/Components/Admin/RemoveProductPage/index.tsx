import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import { ProductInterface } from "../../Interfaces/products.interface";
import { useAppSelector } from "../../Redux/store";
import { RemoveProductBlock } from "./styles";

const REMOVE_PRODUCT = gql`
  mutation removeProduct($id: String!) {
    removeProduct(id: $id)
  }
`;

const RemoveProductPage = () => {
  const [removeProduct] = useMutation(REMOVE_PRODUCT);

  const foodTypes: string[] = useAppSelector(
    (state) => state.foodTypesInterface.foodtypes
  );
  const ProductsList: ProductInterface[] = useAppSelector(
    (state) => state.productDataInterface.showAll
  );

  const [productsListState, setProductsList] = useState<ProductInterface[]>();

  useEffect(() => {
    setProductsList(ProductsList);
  }, [ProductsList]);

  const [currentProductId, setCurrentProductId] = useState<number>(0);
  const [currentFoodtypeId, setCurrentFoodtypeId] = useState<number>(0);

  return (
    <RemoveProductBlock>
      <select
        value={currentFoodtypeId?.toString()}
        onChange={(e) => {
          const currentValue = parseInt(e.target.value);
          setCurrentFoodtypeId(currentValue);
          setCurrentProductId(
            ProductsList[currentValue]
              ? parseInt(ProductsList[currentValue].id)
              : 0
          );
        }}
      >
        {foodTypes &&
          ProductsList &&
          foodTypes.map((el, index) => {
            return (
              <option key={index} value={index}>
                {el}
              </option>
            );
          })}
      </select>
      <select
        value={currentProductId?.toString()}
        onChange={(e) => setCurrentProductId(parseInt(e.target.value))}
      >
        {productsListState &&
          foodTypes &&
          productsListState
            .filter((el) => el.foodtype === foodTypes[currentFoodtypeId])
            .map((el, index) => {
              return (
                <option
                  key={index}
                  value={productsListState.findIndex(
                    (element) => el.title === element.title
                  )}
                >
                  {el.title}
                </option>
              );
            })}
      </select>

      <button
        onClick={() => {
          let curId = productsListState
            ? productsListState[currentProductId].id
            : 0;
          removeProduct({
            variables: {
              id: curId.toString(),
            },
          });

          setProductsList(
            productsListState?.filter((el, index) => index !== currentProductId)
          );
        }}
      >
        Удалить
      </button>
    </RemoveProductBlock>
  );
};

export default RemoveProductPage;
