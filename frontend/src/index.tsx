import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./Components/Redux/store";
import Root from "./Components/Root";

const store = configureStore();

document.body.style.backgroundColor = "#F2F2F2";

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

reportWebVitals();
