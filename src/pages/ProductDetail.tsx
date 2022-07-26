import { useParams } from "react-router-dom";

interface ProductParams {
    productId: string
}

function ProductDetail(){
    const params = useParams<keyof ProductParams>();

    return (
        <section>
            <h1>Product Detail</h1>
            <h2>Product {params.productId}</h2>
        </section>
    );
}

export default ProductDetail;
