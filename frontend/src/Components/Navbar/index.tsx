import { gql, useQuery } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ProductData } from "../Interfaces/products.interface";
import { updateDataAction } from "../Redux/actions/foodtypesActions";
import { updateProductsAction } from "../Redux/actions/productsTypesAction";
import { Link } from "react-router-dom";
import { linkStyle } from "./dist/styles";
import { CartSVG } from "../SVG/cart";
import "./navbar.css";
import { useAppSelector } from "../Redux/store";

const GET_FOOD_TYPES = gql`
  query {
    foodtypes
  }
`;

interface FoodTypesData {
  foodtypes: string[];
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
      foodtype
    }
  }
`;

const NavbarComponent = () => {
  const foodTypesData = useQuery<FoodTypesData>(GET_FOOD_TYPES);
  const productData = useQuery<ProductData>(GET_PRODUCTS_LIST);
  const dispatch = useDispatch();

  const cartList = useAppSelector((state) => state.cartStateInterface);

  const cartAmount = useCallback(
    () => cartList.productInfo.reduce((a, b) => a + b.amount, 0),
    [cartList]
  );

  useEffect(() => {
    if (!foodTypesData.loading)
      foodTypesData.data !== undefined &&
        dispatch(updateDataAction(foodTypesData.data.foodtypes));
  }, [foodTypesData.data, foodTypesData.loading, dispatch]);

  useEffect(() => {
    if (!productData.loading)
      productData.data !== undefined &&
        dispatch(updateProductsAction(productData.data.showAll));
  }, [productData.data, productData.loading, dispatch]);

  return (
    <div className="navbar-component">
      <Navbar style={{ backgroundColor: "#F0B340" }} expand="lg">
        <Container>
          <Navbar.Brand>
            <Link style={linkStyle} to="/">
              <img width="167px" height="43px" src="/logo.png" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="cart-item-holder">
                <Link className="badge-holder" style={linkStyle} to="/cart">
                  <CartSVG />
                  <Badge className="badge-item" pill bg="danger">
                    {cartAmount() < 99
                      ? cartAmount() === 0
                        ? ""
                        : cartAmount()
                      : "99+"}
                  </Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
