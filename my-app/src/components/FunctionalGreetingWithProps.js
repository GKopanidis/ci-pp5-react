import React from "react";

// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

const FunctionalGreetingWithProps = (props) => { 
    console.log(props);
    return <h1>Hello, {props.name}! I see you're {props.age} years old, {props.greeting}</h1>;
}

export default FunctionalGreetingWithProps;