import { RequestBlock, RequestsBlock, RequestsStatusH1 } from "./styles";

const CashierPage = () => {
  return (
    <div className="cashier-page">
      <RequestsBlock>
        <RequestsStatusH1>Список заказов</RequestsStatusH1>
        <RequestBlock>
          <h1>Дмитрий</h1>
          <h2>Буду через 5 минут</h2>

          <div className="elements-holder">
            <h1>19:50</h1>
            <button>Подробнее</button>
          </div>
        </RequestBlock>
      </RequestsBlock>
    </div>
  );
};

export default CashierPage;
