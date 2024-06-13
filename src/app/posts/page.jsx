import { getPosts } from "@/services/postApi";
import Link from "next/link";

const PostPage = async () => {
    const postsData = await getPosts()
    // console.log(postsData);
    return (
        <div className="">
            <h1 className=" text-center my-3 text-2xl ">Post Page</h1>

            <div className="grid grid-cols-3 gap-6">
                {
                    postsData.slice(0,10).map(post =>
                        <div key={post?.userId} className=" p-4 border-2 space-y-1">
                            <h1>{post?.title}</h1>
                            <hr />
                            <p>{post?.body}</p>
                            <button className="btn bg-purple-500 p-2"><Link href={`/posts/${post?.id}`}>View Details</Link></button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default PostPage;