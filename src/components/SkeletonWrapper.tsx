import { SkeletonTheme } from "react-loading-skeleton";

const SkeletonWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonWrapper;

