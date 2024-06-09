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
};

export default ProductDetailPage;
