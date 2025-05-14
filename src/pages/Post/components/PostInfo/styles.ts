import styled from "styled-components"
import { GithubLink, MainContentBoxContainer } from "../../../../components/MainContentBox/styles"

export const MainContentBoxPost = styled(MainContentBoxContainer)`
    flex-direction: column;
    width: 864px;
    min-height: 168px;

    p {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 160%;
        color: ${props => props.theme["base-title"]};
        align-self: flex-start;
        margin-bottom: 0.5rem;
    }
    
`;

export const BoxHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

`

export const HeaderLink = styled(GithubLink)`
    #back {
        color: ${props => props.theme.blue};
        font-size: 0.75rem;
    }
`

export const BottomLinks = styled.div`
    display: flex;
    align-self: flex-start;
    gap: 2rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        span {
            color: ${props => props.theme["base-span"]};
            line-height: 160%;
        }

        #githubIcon, #calendar, #comment {
            font-size: 1.125rem;
            color: ${props => props.theme["base-label"]};
        }
    }
`