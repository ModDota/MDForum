import * as React from "react";
import styled from "styled-components";

const Title = styled.div`
    font-size: 20pt;
    color: ${props => props.theme.primary};
`;
export default class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Title>ModDota Forums</Title>
                <img src="/static/logo.png" />
            </React.Fragment>
        );
    }
}
