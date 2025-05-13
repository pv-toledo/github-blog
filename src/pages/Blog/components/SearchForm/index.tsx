import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <div>
                <p>Publicações</p>
                <span>6 publicações</span>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="Buscar conteúdo"/>
                </form>
            </div>
        </SearchFormContainer>
    )

} 