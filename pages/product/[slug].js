// pages/home/[slug].js
import { NextSeo } from 'next-seo';
import MasterLayout from '../../src/components/layouts/master';
import SeoSchema from '../../src/components/seo/schema';
import ProductDetailsContainer from '../../src/components/product/productDetails';
import axios from 'axios';

const RelatedProduct = ({ productDetailsData }) => {
    let schemaData = {
        // ... your schema data
    };

    return (
        <>
            <NextSeo title="Safari Kids" description="Safari Kids Pre School" canonical="/product" />
            {/* <SeoSchema data={schemaData} /> */}
            <ProductDetailsContainer productDetailsData={productDetailsData} />
        </>
    );
};

export async function getStaticPaths() {
    const res = await axios.get('https://qirah-dashboard-default-rtdb.firebaseio.com/product.json');
    const productDetailsData = await res.data;

    const slugs = Object.keys(productDetailsData).map((key) =>
        productDetailsData[key].postTopicName.toLowerCase().split(' ').join('-')
    );

    const paths = slugs.map((slug) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const res = await axios.get('https://qirah-dashboard-default-rtdb.firebaseio.com/product.json');
    const productDetailsData = await res.data;

    const key = Object.keys(productDetailsData).find(
        (key) => productDetailsData[key].postTopicName.toLowerCase().split(' ').join('-') === slug
    );

    return {
        props: {
            productDetailsData: productDetailsData[key], // Access the specific blog using the key
        },
    };
}

export default RelatedProduct;
