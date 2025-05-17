import { SearchFormContainer } from "./styles";
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { queryFormatter } from "../../../../utils/formatter";
import type React from "react";

interface SearchFormProps {
    setQuery: React.Dispatch<React.SetStateAction<string>>
    size: number
}

const searchFormSchema = z.object({
    query: z.string()
})

type searchFormInputs = z.infer<typeof searchFormSchema>


export function SearchForm({setQuery, size}: SearchFormProps) {

    const { register, handleSubmit } = useForm<searchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleFormSubmit(data: searchFormInputs) {
        const searchQuery = queryFormatter(data.query)
        setQuery(searchQuery)
    }

    return (
        <SearchFormContainer>
            <div>
                <p>Publicações</p>
                <span>{size} publicações</span>
            </div>
            <div>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <input
                        type="text"
                        placeholder="Buscar conteúdo"
                        {...register('query')}
                    />
                </form>
            </div>
        </SearchFormContainer>
    )

}  