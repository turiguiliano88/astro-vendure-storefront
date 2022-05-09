export default function Check(props) {
  return (
    <div className="flex items-center first:mr-2">
      <input
        type="checkbox"
        onChange={props.onChange}
        className="appearance-none mr-1 w-3 h-3 ring-2 ring-inset ring-gray-800 text-primary checked:ring-primary"
      />
      <label>{props.label}</label>
    </div>
  );
}
