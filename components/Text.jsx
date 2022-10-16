import styled from 'styled-components'

export const StyledText = styled.p`
    color: ${props => props.color || 'white'};
    font-size: ${props => props.size || '16px'};
    font-family: 'Rajdhani', sans-serif;
    font-weight: ${props => props.weight || ''};
    text-align: justify;
    margin: ${props => props.margin || '0px 0px'};
    width: ${props => props.width || ''};
`

export function Text(props) {
    return (
        <>
            <StyledText
                color={props.color}
                weight={props.weight}
                margin={props.margin}
                size={props.size}
                width={props.width}>
                {props.text}
            </StyledText>
        </>
    )
}