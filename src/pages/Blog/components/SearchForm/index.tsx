import { SearchFormContainer } from "./styles";
import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { queryFormatter } from "../../../../utils/formatter";
import { api } from "../../../../lib/axios";


const searchFormSchema = z.object({
    query: z.string()
})

type searchFormInputs = z.infer<typeof searchFormSchema>


export function SearchForm() {

    const {register, handleSubmit, reset} = useForm<searchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleFormSubmit (data: searchFormInputs) {
    const searchQuery = queryFormatter(data.query)
    const response = await api.get(`/search/issues?q=${searchQuery}repo:pv-toledo/github-blog`)
    console.log(response.data)
    
    reset()
}

    return (
        <SearchFormContainer>
            <div>
                <p>Publicações</p>
                <span>6 publicações</span>
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