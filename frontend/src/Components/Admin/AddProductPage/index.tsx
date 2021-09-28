import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { daysList } from "../../Mainpage";
import { useAppSelector } from "../../Redux/store";
import { AddProductBlock, AdminPageBlock } from "./styles";

interface inputsInterface {
  title: string;
  description: string;
  price: number;
  image: string;
  dates: string[];
  foodtype: string;
}

const CREATE_NEW_PRODUCT = gql`
  mutation CreateProduct($product: ProductInput!) {
    createProduct(product: $product) {
      title
    }
  }
`;

const AddProductPage = () => {
  const [inputsState, setInputs] = useState<inputsInterface>({
    title: "",
    description: "",
    price: 0,
    foodtype: "",
    image: "",
    dates: [],
  });

  const [addProduct] = useMutation<
    { CreateProduct: inputsInterface },
    { product: inputsInterface }
  >(CREATE_NEW_PRODUCT);

  const foodTypes: string[] = useAppSelector(
    (state) => state.foodTypesInterface.foodtypes
  );

  const [checkboxesState, setCheckboxesState] = useState<boolean[]>(
    daysList.map(() => false)
  );

  const setDatesFunc = (isTrue: boolean, indx: number) => {
    const removeIndex = inputsState.dates.findIndex(
      (el) => el === daysList[indx]
    );
    setInputs({
      ...inputsState,
      dates: isTrue
        ? [...inputsState.dates, daysList[indx]]
        : inputsState.dates.filter((el, index) => removeIndex !== index),
    });
  };

  return (
    <AdminPageBlock>
      <AddProductBlock>
        <input
          type="input"
          value={inputsState.title}
          onChange={(e) => setInputs({ ...inputsState, title: e.target.value })}
          placeholder="Введите название продукта"
        />
        <input
          type="input"
          value={inputsState.description}
          onChange={(e) =>
            setInputs({ ...inputsState, description: e.target.value })
          }
          placeholder="Введите описание продукта"
        />
        <input
          type="input"
          value={inputsState.price}
          onChange={(e) =>
            setInputs({
              ...inputsState,
              price: parseInt(e.target.value),
            })
          }
          placeholder="Введите ценник на продукт"
        />
        <input
          type="input"
          value={inputsState.image}
          onChange={(e) => setInputs({ ...inputsState, image: e.target.value })}
          placeholder="Введите ссылку на фото"
        />

        <select
          value={inputsState.foodtype}
          onChange={(e) =>
            setInputs({ ...inputsState, foodtype: e.target.value })
          }
        >
          {foodTypes &&
            foodTypes.map((el, index) => {
              return (
                <option key={index} value={el}>
                  {el}
                </option>
              );
            })}
        </select>

        <div className="checkboxes-holder">
          {daysList.map((el, index) => {
            return (
              <div key={index} className="checkbox-block">
                <Form.Check
                  checked={checkboxesState[index]}
                  onChange={() => {
                    let x = [...checkboxesState];
                    x[index] = !checkboxesState[index];
                    setDatesFunc(!checkboxesState[index], index);
                    setCheckboxesState(x);
                  }}
                  className="checkbox"
                  type="checkbox"
                />
                <p>{el}</p>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            setInputs({
              title: "",
              description: "",
              price: 0,
              foodtype: foodTypes[0],
              image: "",
              dates: [],
            });
            addProduct({
              variables: { product: inputsState },
            });

            setCheckboxesState(
              "......".split(".").map(() => {
                return false;
              })
            );
          }}
        >
          Добавить
        </button>
      </AddProductBlock>
    </AdminPageBlock>
  );
};

export default AddProductPage;
