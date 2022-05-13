import ChevronRightIcon from "./icon/ChevronRight";

export default function Menu(props) {
  return (
    <div className="m-sm bg-white flex md:block">
      {props.tabs.map((item, index) => (
        <a href={item.href} key={index}>
          <div
            className={
              item.name === props.activeTab
                ? "bg-neutral-200 p-sm flex justify-between items-center"
                : "p-sm flex justify-between items-center cursor-pointer hover:bg-neutral-50"
            }
            key={index}
            onClick={item.onClick}
          >
            {item.value}
            <ChevronRightIcon className="h-3 w-3" />
          </div>
        </a>
      ))}
    </div>
  );
}
