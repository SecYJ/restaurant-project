import Skeleton from "./Skeleton";

const SkeletonPost = () => {
    return (
        <div className="rounded-md bg-gray-500">
            <Skeleton type="img" />
            <div className="p-4">
                <Skeleton type="title" classes="w-full" />
                <Skeleton type="text" classes="w-3/4" />
                <Skeleton type="text" classes="w-3/4" />
            </div>
        </div>
    );
};
export default SkeletonPost;
