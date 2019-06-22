import * as React from "react";
import ReactDOM from "react-dom";

export default class Test extends React.Component {
    public render() {
        return <img src="/static/logo.png" />;
    }
}

ReactDOM.render(<Test />, document.getElementById("root"));
