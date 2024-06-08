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
}

export const getStaticProps = async () => {
  return {
    props: {
    },
  };
};

export default HomePage;
