const ProductDetailPage = () => {
  return (
    <>
      <h1>Title</h1>
      <p>DESCRIPTION</p>
    </>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export default ProductDetailPage;
