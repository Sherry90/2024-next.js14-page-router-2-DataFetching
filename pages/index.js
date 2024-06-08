import path from "path";
import fs from "fs/promises";

const HomePage = (props) => {
  return (
    <ul>
      {products.map((product) => (
        <li
          key={product.id}
          title={product.title}
          description={props.description}
        ></li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
};

export default HomePage;
