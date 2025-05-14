import { MainContentBox } from "../../components/MainContentBox";
import { Posts } from "./components/Posts";
import { SearchForm } from "./components/SearchForm";
import { BlogContainer } from "./styles";

export function Blog () {
    return (
        <BlogContainer>
            <MainContentBox />
            <SearchForm />
            <Posts />
        </BlogContainer>
    )
}