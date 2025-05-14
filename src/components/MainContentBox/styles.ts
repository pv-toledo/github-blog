import styled from "styled-components";

export const MainContentBoxContainer = styled.div`
    position: relative;
    z-index: 1;
    max-width: 864px;
    margin-top: -5.5rem;
    min-height: 212px;
    display: flex;
    align-items: center;
    align-self: center;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${props => props.theme["base-profile"]};
    box-shadow: 0 2px 28px rgba(0,0,0,0.2);
    
`

export const MainContentBoxContent = styled.div`
    display: flex;
    gap: 2rem;
    

    img {
        height: 148px;
        width: 148px;
        border-radius: 8px;
    }
`

export const TextContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        color: ${props => props.theme["base-text"]};
        line-height: 160%;
    }

    p {
        margin-bottom: 1.5rem;
    }

`

export const TextHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    span {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 130%;
        color: ${props => props.theme["base-title"]};
    }

`

export const GithubLink = styled.a`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    

    &:hover {
        transition: border-bottom 0.2s;
        border-bottom: 2px solid ${props => props.theme.blue};
        cursor: pointer;
    }

    #arrowUp {
        color: ${props => props.theme.blue};
        font-size: 0.75rem;
    }

    span {
        font-size: 0.75rem;
        font-weight: bold;
        line-height: 160%;
        color: ${props => props.theme.blue};
    }
`

export const InfoBar = styled.div`
    display: flex;
    gap: 1.5rem;

    div {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        #building, #followers {
            font-size: 1.125rem;
            color: ${props => props.theme["base-label"]};
        }

        span {
            color: ${props => props.theme["base-text"]};
            line-height: 160%;
        }
    }

    

`