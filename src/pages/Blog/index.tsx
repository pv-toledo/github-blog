import { useEffect, useState } from "react";
import { MainContentBox } from "../../components/MainContentBox";
import { Posts } from "./components/Posts";
import { SearchForm } from "./components/SearchForm";
import { BlogContainer } from "./styles";
import { api } from "../../lib/axios";

export interface PostsType {
    id: number
    title: string
    body: string
    created_at: string
    postUrl: string
    
}

export function Blog() {

    const [posts, setPosts] = useState<PostsType[]>([])

    async function getPosts() {
        const response = await api.get(`search/issues?q=repo:pv-toledo/github-blog`)
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
        <BlogContainer>
            <MainContentBox />
            <SearchForm />
            <Posts 
                posts={posts}
            />
        </BlogContainer>
    )
}