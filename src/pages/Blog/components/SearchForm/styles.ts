import styled from "styled-components";

export const SearchFormContainer = styled.div`
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 864px;
    align-self: center;


    div {
        display: flex;
        flex: 1;
        justify-content: space-between;
        
        p {
            font-size: 1.125rem;
            color: ${props => props.theme["base-subtitle"]};
            line-height: 160%;
        }

        span {
            font-size: 0.875;
            color: ${props => props.theme["base-span"]};
            line-height: 160%;
        }
        
    }
`