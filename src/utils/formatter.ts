import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export function dateFormatter (date: string) {
    const transformedDate = new Date(date)
    const formattedDate = formatDistanceToNow(transformedDate, {
        addSuffix: true,
        locale: ptBR
    })

    return formattedDate
}