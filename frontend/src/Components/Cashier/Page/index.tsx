import { gql, useQuery } from "@apollo/client";
import { RequestBlock, RequestsBlock, RequestsStatusH1 } from "./styles";

interface requestsInterface {
  id: number;
  userId: string;
  name: string;
  time: string;
  comment: string;
  product: productInterface[];
}

interface productInterface {
  amount: number;
  productId: number;
}

interface dataInterface {
  showRequestsList: requestsInterface[];
}

const GET_REQUESTS_LIST = gql`
  query {
    showRequestsList {
      id
      userId
      comment
      name
      time
      product {
        amount
        productId
      }
    }
  }
`;

const CashierPage = () => {
  const { data } = useQuery<dataInterface>(GET_REQUESTS_LIST)!;
  return data ? (
    <div className="cashier-page">
      <RequestsBlock>
        <RequestsStatusH1>Список заказов</RequestsStatusH1>
        {data!.showRequestsList.map((el, index) => {
          console.log(el);
          return (
            <RequestBlock key={index}>
              <h1>{el.name}</h1>
              <h2>Буду через {el.time} минут</h2>

              <div className="elements-holder">
                <h1>19:50</h1>
                <button>Подробнее</button>
              </div>
            </RequestBlock>
          );
        })}
      </RequestsBlock>
    </div>
  ) : (
    <div>
      <h1>Loading</h1>
    </div>
  );
};

export default CashierPage;
