import Skeleton from "react-loading-skeleton";
import { SkeletonWrapper } from "@components";

interface Props {
  border?: boolean;
}

const ResumeSkeleton = ({ border }: Props) => {
  return (
    <SkeletonWrapper>
      <div className={`pt-11 ${border ? "customLine before:bottom-0 relative borderLeft pb-11" : "pb-3"}`}>
        <Skeleton width={110} height={20} style={{ marginBottom: ".8rem" } as React.CSSProperties} />
        <Skeleton width={120} height={12} />
        <Skeleton width={110} height={10} style={{ margin: "1.5rem 0" } as React.CSSProperties} />
        <Skeleton count={1.6} />
      </div>
    </SkeletonWrapper>
  );
};

export default ResumeSkeleton;
