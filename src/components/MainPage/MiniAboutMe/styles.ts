import styled from "styled-components";

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

export const Section = styled.section`
    display: flex;
    flex-direction: column;    
    gap: 30px;
    margin-bottom: 3rem;
`;

export const SectionTitle = styled.p`
    font-size: 1.6rem;
    margin-bottom: 14px;
    color: #fff;
    font-weight: lighter;    
`;

export const Paragraph = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.pFont};

    a {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary};
    }
`;
