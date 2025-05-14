import styled from "styled-components";

export const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
    align-self: center;
    margin-bottom: 14.625rem;
`

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
    max-width: 416px;
    height: 260px;
    padding: 2rem;
    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;

    div {
        display: flex;
        gap: 1rem;
        align-items: baseline;

        p {
            font-size: 1.25rem;
            color: ${props => props.theme["base-title"]};
            line-height: 160%;
            
        }

        span {
            font-size: 0.875rem;
            color: ${props => props.theme["base-span"]};
            line-height: 160%;
            min-width: 53px;
        }
    }

    .textWrapper {
        width: 100%;
        max-height: 112px;
        
        p {
            font-size: 1rem;
            color: ${props => props.theme["base-text"]};
            line-height: 160%;
            overflow: hidden;
            text-overflow: ellipsis;

            /* Para quebrar em quatro linhas o texto que é grande demais para ser exibido no container do post */
            display: -webkit-box;
            -webkit-line-clamp: 4; 
            -webkit-box-orient: vertical;
        }
    }
`