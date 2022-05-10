import RefreshIcon from "../icon/Refresh";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      {/* <RefreshIcon className="w-6 h-6 animate-spin" /> */}
      <div className="h-3 w-full mb-sm bg-neutral-100 animate-pulse rounded-sm"></div>
      <div className="h-3 w-full mb-sm bg-neutral-100 animate-pulse rounded-sm"></div>
      <div className="h-3 w-full mb-sm bg-neutral-100 animate-pulse rounded-sm"></div>
      {/* <div className="h-full w-full bg-neutral-100 animate-pulse rounded-sm"></div> */}
    </div>
  );
}
