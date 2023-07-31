import React, {useState} from "react";

const Button = (props) => {

    const [click, setClick] = useState(0);
    console.log(click);

    return(
        <div>
            <button onClick={ () => {setClick(click + 1)} }>Click me!</button>
            <span>{props.text} | {click}</span>
        </div>
    );
}

export default Button;