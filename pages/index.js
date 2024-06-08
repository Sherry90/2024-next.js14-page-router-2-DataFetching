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

export default HomePage;
