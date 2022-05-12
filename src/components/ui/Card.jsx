export const Card = (props) => {
  return <div className="rounded-sm p-sm">{props.children}</div>;
};

export const CardContent = (props) => {
  return <div className="">{props.children}</div>;
};

export const CardTitle = (props) => {
  return (
    <div className="text-5xl mb-lg font-sub-heading font-black">
      {props.children}
    </div>
  );
};
