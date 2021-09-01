import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 2rem 2rem 2rem;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media (min-width: 920px) {
        padding: 1rem 3rem 3rem 3rem;
        grid-template-columns: 1fr 1fr;

        div {
            height: 100%;
        }
    }
`;

export const Title = styled.h1`
    text-align: center;   
    font-weight: lighter;
    padding: 1rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.primary};

    @media (min-width: 920px) {
        padding: 3rem;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;    
    gap: 30px;
    margin-bottom: 3rem;
`

export const SectionTitle = styled.p`
    font-size: 1.6rem;
    margin-bottom: 14px;
    color: #333;
    font-weight: lighter;    
`

export const Paragraph = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: #7D7268;

    a {
        color: ${({ theme }) => theme.colors.primary};
    }
`