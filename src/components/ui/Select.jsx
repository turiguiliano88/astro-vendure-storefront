import SelectorIcon from "../icon/Selector";

export default function Select(props) {
  return (
    <div className="text-gray-800 mb-xs flex flex-col">
      {props.label && <div className="mb-xxs">{props.label}</div>}
      <div className="flex items-center rounded-sm grow px-sm py-xs border-gray-200 border-2 focus-within:border-primary">
        <select
          onChange={props.onChange}
          defaultValue={props.selected}
          className="appearance-none w-full bg-transparent focus:outline-none"
        >
          {props.options &&
            props.options.map((o) => (
              <option key={o.name} value={o.value}>
                {o.name}
              </option>
            ))}
        </select>
        <SelectorIcon className="w-4 h-4 text-gray-600" />
      </div>
    </div>
  );
}
