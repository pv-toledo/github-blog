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
    number: number
}

export function Blog() {

    const [posts, setPosts] = useState<PostsType[]>([])
    const [query, setQuery] = useState<string>('')
    const [size, setSize] = useState<number>(0)


    async function getPosts(query: string) {
        if (query) {
            const response = await api.get(`/search/issues?q=${query}repo:pv-toledo/github-blog`)
            const postsArray = response.data.items.map((item: PostsType) => ({
                id: item.id,
                title: item.title,
                body: item.body,
                created_at: item.created_at,
                postUrl: `/post/${item.number}`,
            }))
            setSize(response.data.total_count)
            setPosts(postsArray)

        } else {
            const response = await api.get(`search/issues?q=repo:pv-toledo/github-blog`)
            const postsArray = response.data.items.map((item: PostsType) => ({
                id: item.id,
                title: item.title,
                body: item.body,
                created_at: item.created_at,
                postUrl: `/post/${item.number}`,
            }))
            setSize(response.data.total_count)
            setPosts(postsArray)
        }
    }

    useEffect(() => {
        getPosts(query)
    }, [query])

    return (
        <BlogContainer>
            <MainContentBox />
            <SearchForm
                setQuery={setQuery}
                size={size}
            />
            <Posts
                posts={posts}
            />
        </BlogContainer>
    )
}