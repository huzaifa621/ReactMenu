function ButtonMaker({ props }) {
  return props.map(function (el) {
    return (
      <div>
        <button>{el}</button>
      </div>
    );
  });
}

export default ButtonMaker;
