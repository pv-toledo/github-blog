import { splitMarkdownByCodeBlocks } from "../../../../utils/formatter";
import { CodeContent, PostContentContainer, TextContent } from "./styles";
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface PostContentProps {
    body: string
}

export function PostContent({ body }: PostContentProps) {
    const blocks = splitMarkdownByCodeBlocks(body)
    return (
        <PostContentContainer>
            {blocks.map((item, index) =>
                item.isCode ? (
                    <CodeContent key={index}>

                        <SyntaxHighlighter
                            style={atomOneDark}
                            language={item.language}
                            customStyle={{
                                background: "transparent",
                                padding: 0,
                                margin: 0,
                            }}
                            codeTagProps={{
                                style: { textShadow: "none" }
                            }}
                        >
                            {item.content}
                        </SyntaxHighlighter>

                    </CodeContent>
                ) : (
                    <TextContent key={index}>
                        <ReactMarkdown>{item.content}</ReactMarkdown>
                    </TextContent>
                )
            )}
        </PostContentContainer>
    )
}