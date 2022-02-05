import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    img {
        width: 50px;
    }

    h1 {
        color: var(--shape);
        margin: 10px;
    }

    button {
        /* Faz com que o botão apareça na direita */
        margin-left: auto;
        margin-top: 1em;

        /* --- */
        font-size: 1rem;
        color: #ffffff;
        background: var(--blue-ligth);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`