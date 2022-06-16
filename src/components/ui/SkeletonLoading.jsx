export default function SkeletonLoading({ rows }) {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      {[...Array(rows).keys()].map((index) => (
        <div
          className="h-3 w-full mb-sm bg-neutral-100 animate-pulse rounded-sm"
          key={index}
        ></div>
      ))}
    </div>
  );
}
