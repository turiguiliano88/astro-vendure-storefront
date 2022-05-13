export default function Select(props) {
  return (
    <div className="text-neutral-800 flex flex-col">
      {props.label && <div className="mb-xxs">{props.label}</div>}
      <div className="flex items-center rounded-sm grow px-sm py-xs border-neutral-200 border-2 focus-within:border-primary">
        <select
          onChange={props.onChange}
          defaultValue={props.selected}
          className="w-full bg-transparent focus:outline-none"
        >
          {props.options &&
            props.options.map((o) => (
              <option key={o.name} value={o.value}>
                {o.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
