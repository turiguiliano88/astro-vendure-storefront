export default function Input(props) {
  return (
    <div className="text-gray-800 mb-xs flex flex-col">
      {props.label && <div className="mb-xxs">{props.label}</div>}
      <div className="flex border-gray-200 border-2 items-center rounded-sm px-sm py-xs focus-within:outline-none focus-within:border-primary">
        <input
          required={props.required}
          className="p-0 m-0 grow border-none focus:outline-none bg-transparent"
          type={props.type}
          onChange={props.onChange}
          onInput={props.onInput}
          placeholder={props.placeholder ? props.placeholder : ""}
          min={props.min}
          max={props.max}
          // value={props.value}
        />
        {props.icon}
      </div>
    </div>
  );
}
