export default function Animal(props) {
  return (
    <div>
      <img src={`/animals/${props.type}.svg`} />
      <p className="name">{props.name}</p>
      <p>{props.says}</p>
    </div>
  );
}
