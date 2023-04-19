import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

function ParentComponent(){
    return
    <ChildComponent text="Hello!" number ={2} />;
}

function ChildComponent(props){
    return(
        <div>
            {props.name}{props.number}
        </div>
    )
}

//Parent Component
function BlogPost(){
    return(
        <div>
            <BlogContent articleText ="Dear Reader: Loren Ibsum"/>
        </div>
    );
}

function BlogContent(props){
    return(
        <div>
            {props.articleText}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
