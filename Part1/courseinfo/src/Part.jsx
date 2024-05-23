const Part = (props) => {
  console.log(props);
  return (
    <div>
      {props.part} {props.exercises}
    </div>
  );
};

export default Part;
