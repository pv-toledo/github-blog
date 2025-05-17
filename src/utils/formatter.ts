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

export function splitMarkdownByCodeBlocks(markdown: string) {
  const result = []
  // let remaining = markdown
  const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g

  let lastIndex = 0
  let match

  while ((match = codeBlockRegex.exec(markdown)) !== null) {
    const index = match.index

    // trecho antes do bloco de código
    if (index > lastIndex) {
      result.push({
        isCode: false,
        content: markdown.slice(lastIndex, index),
      })
    }

    // bloco de código
    result.push({
      isCode: true,
      language: match[1] || "", // primeira palavra após ```
      content: match[2],
    })

    lastIndex = codeBlockRegex.lastIndex
  }

  // resto do markdown depois do último bloco
  if (lastIndex < markdown.length) {
    result.push({
      isCode: false,
      content: markdown.slice(lastIndex),
    })
  }

  return result
}

export function queryFormatter(data: string) {
  const formatted = data.replace(/ /g, "%20");
  // se já terminar em `%20`, retorna igual; caso contrário, adiciona `%20` no fim
  return formatted.endsWith("%20") ? formatted : formatted + "%20";
}