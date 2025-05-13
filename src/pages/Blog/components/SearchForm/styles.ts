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

    form {
        display: flex;
        flex: 1;

        input {
            flex: 1;
            padding: 1rem 0.75rem;
            background-color: ${props => props.theme["base-input"]};
            border: 2px solid ${props => props.theme["base-border"]};
            border-radius: 6px;
            transition: border 0.2s;

            &::placeholder {
                color: ${props => props.theme["base-label"]};
                line-height: 160%;
            }

            &:focus {
                outline: 0;
                border: 2px solid ${props => props.theme.blue};
                color: ${props => props.theme["base-text"]};
            }
        }
    }


`