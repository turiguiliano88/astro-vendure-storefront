export const Modal = ({ enabled, children }) => {
  return (
    <div
      className={`${
        !enabled && "hidden"
      } fixed top-0 left-0 right-0 w-full h-full flex items-center justify-center`}
    >
      <div className="bg-neutral-800/80 absolute w-full h-full"></div>
      <div className="bg-white z-10 p-md rounded-sm flex flex-col drop-shadow-xl">
        {children}
      </div>
    </div>
  );
};

export const ModalContent = (props) => {
  return <div className="my-sm">{props.children}</div>;
};

export const ModalTitle = (props) => {
  return <div className="text-2xl font-semibold">{props.children}</div>;
};

export const ModalAction = (props) => {
  return <div>{props.children}</div>;
};
