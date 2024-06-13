import { getDetailsPost } from "@/services/postApi";

export const generateMetadata = async ({params}) =>{
    const {title, body, id} = await getDetailsPost(params?.id)
    return {
        title: {absolute: title},
        description: body,
        keywords: body.split(' ')
    }
}

const PostDetail = async ({params}) => {
    console.log(params?.id);
    const {title, body, id} = await getDetailsPost(params?.id)

    return (
        <div>
            Post Details of {id}
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostDetail;