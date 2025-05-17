import { PostContent, PostsContainer } from "./styles";
import { dateFormatter } from "../../../../utils/formatter";
import type { PostsType } from "../..";

interface PostsProps {
    posts: PostsType[]
}

export function Posts({posts}: PostsProps) {

    return (
        <PostsContainer>

            {posts.map(post => (

                <PostContent key={post.id} to={post.postUrl}>
                    <div>
                        <p>{post.title}</p>
                        <span>{dateFormatter(post.created_at)}</span>
                    </div>

                    <div className="textWrapper">
                        <p>{post.body}</p>
                    </div>
                </PostContent>

            ))}

        </PostsContainer>

    )
}