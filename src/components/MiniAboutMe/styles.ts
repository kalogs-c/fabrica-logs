import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 3rem 3rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const Title = styled.h1`
    text-align: center;
    padding: 3rem;
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.primary}
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        
        font-weight: lighter;
    }
`

export const SectionTitle = styled.p`
    font-size: 1.6rem;
    margin-bottom: 14px;
    color: #333;
`

export const Paragraph = styled.p`
    font-size: 1.2rem;
    color: #757575;
`