import { PostContent } from "./components/PostContent";
import { PostInfo } from "./components/PostInfo";
import { PostsContainer } from "./styles";


export function Post() {
    return (
        <PostsContainer>
            <PostInfo />
            <PostContent />
        </PostsContainer>

    )
}