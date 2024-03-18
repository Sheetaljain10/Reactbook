const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.Location}</h3>
      <h2>{props.animal}</h2>
    </div>
  );
};

export default Pet;
