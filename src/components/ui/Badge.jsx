export default function Badge(props) {
  let styleColor;
  switch (props.type) {
    case "neutral":
      styleColor = "bg-neutral-100 text-neutral-900 hover:ring-neutral-300";
      break;
    case "secondary":
      styleColor = "bg-secondary text-white  hover:ring-secondary/40";
      break;
    case "transparent":
      styleColor = "bg-transparent hover:ring-transparent text-neutral-900";
      break;
    default:
      // styleColor = "bg-primary text-gray-900 hover:ring-gray-900";
      styleColor = "bg-primary text-white";
      break;
  }

  let styleSize;
  switch (props.size) {
    case "medium":
      styleSize = "py-xs px-md";
      break;
    case "large":
      styleSize = "py-sm px-lg";
      break;
    default:
      styleSize = "py-xxs px-sm";
      break;
  }
  return (
    <span
      className={`${styleColor} ${styleSize} text-sm rounded-lg ring-2 ring-primary/40`}
    >
      {props.children}
    </span>
  );
}
