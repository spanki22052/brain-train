import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

interface ProductInterface {
    title: string;
    price: number;
    id: string;
    description: string;
    dates: [string],
    image: string
}

interface ProductData {
    showAll: ProductInterface[]
}

const GET_PRODUCTS_LIST = gql`
    query  {
        showAll {
            title
            id
            description
            price
            image
        }
    }
`

const Mainpage = () => {
    const { loading, error, data } = useQuery<ProductData>(GET_PRODUCTS_LIST)
    const [products, setProducts] = useState<ProductInterface[]>()
    
    useEffect(() => {
        if (!loading) data !== undefined && setProducts(data.showAll)
    }, [data])

    console.log(products)

    return (
        <div className="mainpage">
            <h1>Hello</h1>
        </div>
    )
}

export default Mainpage;