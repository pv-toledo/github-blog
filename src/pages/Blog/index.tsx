import { MainContentBox } from "../../components/MainContentBox";
import { SearchForm } from "./components/SearchForm";
import { BlogContainer } from "./styles";

export function Blog () {
    return (
        <BlogContainer>
            <MainContentBox />
            <SearchForm />
        </BlogContainer>
    )
}