import Skeleton from "react-loading-skeleton";
import { SkeletonWrapper } from "@components";

export default function ContactSkeleton() {
  return (
    <SkeletonWrapper>
      <div className="px-12 py-10">
        <Skeleton height={240} />

        <div className="grid grid-cols-2 mt-6 gap-y-2">
          <Skeleton width={270} />
          <Skeleton width={270} />
          <Skeleton width={270} />
          <Skeleton width={270} />
        </div>
      </div>
    </SkeletonWrapper>
  );
}
