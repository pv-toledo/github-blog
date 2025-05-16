import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "styled-components";

export const PostContentContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem 2rem;
    width: 864px;
    align-self: center;

`

export const TextContent = styled.div`
    p {
        color: ${props => props.theme["base-text"]};
        line-height: 160%;
    }
`

export const CodeContent = styled.div`
    background-color: ${props => props.theme["base-post"]};
    padding: 1rem;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    line-height: 160%;

    code span {
         text-shadow: none !important;
    }

`
