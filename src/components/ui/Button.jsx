export default function Button(props) {
  let styleColor;
  switch (props.type) {
    case "neutral":
      styleColor = "bg-neutral-200 text-neutral-900 hover:ring-neutral-600";
      break;
    case "secondary":
      styleColor = "bg-secondary text-white  hover:ring-secondary/40";
      break;
    case "transparent":
      styleColor =
        "bg-transparent hover:before:content-['→_'] hover:ring-transparent text-neutral-900";
      break;
    default:
      styleColor =
        "bg-primary text-white hover:ring-primary/40 hover:before:content-['→_']";
      break;
  }

  let styleSize;
  switch (props.size) {
    case "small":
      styleSize = "py-xxs px-sm";
      break;
    case "large":
      styleSize = "py-sm px-lg";
      break;
    default:
      styleSize = "py-xs px-md";
      break;
  }

  let loadingStyle = props.isLoading ? "animate-pulse" : "";
  return (
    <button
      onClick={props.onClick}
      type={props.submit ? "submit" : "button"}
      // className={`${styleColor} ${styleSize} transition flex-initial rounded-lg hover:ring-2 active:opacity-70 hover:before:content-['→_']`}
      className={`${styleColor} ${styleSize} ${loadingStyle} transition flex-initial rounded-lg hover:ring-2 active:opacity-70`}
      disabled={props.isLoading}
    >
      {props.children}
    </button>
  );
}
