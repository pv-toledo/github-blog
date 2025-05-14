import styled from "styled-components";

export const HeaderContainer = styled.div` 
    position: relative;
    width: 100vw;
    display: flex;
    padding-top: 4rem;
    justify-content: center;

    #coverImg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        object-fit: cover;
        max-height: 296px;
        z-index: 0;
    }

    div {
        position: relative; //z-index só funciona para position diferente de static (padrão)
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;
        margin-bottom: 8.375rem;

        img {
            width: 45px;
            height: 40px;
        }

        span {
            font-family: "Coda", system-ui;
            font-size: 1.5rem;
            color: ${props => props.theme.blue};
            line-height: 160%;
            
        }
    }

    
`