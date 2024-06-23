import path from "path";
import fs from "fs/promises";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  // if (!loadedProduct) {
  //   return <p1>Loading..</p1>;
  // }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { pid: "p1" } }],
    fallback: "blocking",
  };
};

export default ProductDetailPage;
