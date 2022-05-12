export default function Input(props) {
  let backgroundStyle = props.disabled ? "bg-neutral-200" : "bg-transparent";
  backgroundStyle = props.backgroundStyle
    ? props.backgroundStyle
    : backgroundStyle;
  return (
    <div className="text-neutral-800 flex flex-col grow">
      {props.label && <div className="mb-xxs">{props.label}</div>}
      <div
        className={`flex border-neutral-200 border-2 items-center rounded-sm px-sm py-xs focus-within:outline-none focus-within:border-primary ${backgroundStyle}`}
      >
        <input
          required={props.required}
          className="transition p-0 m-0 grow border-none focus:outline-none bg-transparent"
          type={props.type}
          onChange={props.onChange}
          onInput={props.onInput}
          placeholder={props.placeholder ? props.placeholder : ""}
          min={props.min}
          max={props.max}
          disabled={props.disabled}
          defaultValue={props.value}
        />
        {props.icon}
      </div>
    </div>
  );
}
