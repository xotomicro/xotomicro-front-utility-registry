import React, {useEffect, useState} from "react";
import {ProductModel} from "../model/ProductModel";

function ProductApi({token, update}: any) {
    const [products, setProducts]: any = useState(null);
    const [loading, setLoading]: any = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`http://${process.env.SERVICE_URL}:8080/products`, {headers: {"Content-Type": "application/json", Authorization: token}})
            .then((response: Response) => response.json())
            .then(setProducts)
            .then(() => setLoading(false));
    }, [token, update]);

    if (loading) return <p>Loading...</p>;

    if (products) {
        return (
            <div className="product">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product: ProductModel, index: React.Key | null | undefined) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return <p>Cannot load data</p>;
}

export default ProductApi;
