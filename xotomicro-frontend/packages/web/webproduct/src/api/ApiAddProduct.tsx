import React, {useState} from "react";

async function createProduct(product: {name: any; description: any}, token: any) {
    return fetch(`http://${process.env.SERVICE_URL}:8080/products`, {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: token},
        body: JSON.stringify(product),
    }).then((data: any) => data.json());
}

function ApiAddProduct({token, update, setUpdate}: any) {
    const [name, setName]: any = useState();
    const [description, setDescription]: any = useState();

    const handleSubmit: any = async (e: any): Promise<void> => {
        e.preventDefault();
        await createProduct({name, description}, token);
        setUpdate(!update);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={(e: any) => setName(e.target.value)} />
            <input style={{marginLeft: 5}} type="text" placeholder="Description" onChange={(e: any) => setDescription(e.target.value)} />
            <button style={{marginLeft: 5}} type="submit">
                Submit
            </button>
        </form>
    );
}

export default ApiAddProduct;
