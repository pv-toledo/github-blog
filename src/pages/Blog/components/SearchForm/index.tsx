import { SearchFormContainer } from "./styles";
import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { api } from "../../../../lib/axios";

const searchFormSchema = z.object({
    query: z.string()
})

type searchFormInputs = z.infer<typeof searchFormSchema>

async function searchIssue (query: string) {
    await api.get(`/search/issues?q=${query}`)
}



export function SearchForm() {

    const {register, handleSubmit, reset} = useForm<searchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    function onSubmit (data: searchFormInputs) {
    console.log(data)
    reset()
}

    return (
        <SearchFormContainer>
            <div>
                <p>Publicações</p>
                <span>6 publicações</span>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
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