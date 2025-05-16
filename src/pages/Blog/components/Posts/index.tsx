import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { PostContent, PostsContainer } from "./styles";
import { dateFormatter } from "../../../../utils/formatter";


interface PostsType {
    id: number
    title: string
    body: string
    created_at: string
    postUrl: string
    
}

export function Posts() {

    const [posts, setPosts] = useState<PostsType[]>([])

    async function getPosts() {
        const response = await api.get(`search/issues?q=repo:pv-toledo/github-blog`)
        console.log(response.data.items)
        const postsArray = response.data.items.map((item: any) => ({
            id: item.id,
            title: item.title,
            body: item.body,
            created_at: item.created_at,
            postUrl: `/post/${item.number}`,
        }))

        setPosts(postsArray)
    }

    useEffect(() => {
        getPosts()
    }, [])

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