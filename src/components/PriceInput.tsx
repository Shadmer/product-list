import React from 'react';

function PriceInput(props: any) {
    let [cnt, setCnt] = React.useState(props.min);
    let [inputValue, setInputValue] = React.useState(props.min);

    function setValue(value: any) {
        if (!value || value < props.min) value = props.min;
        if (value > props.max) value = props.max;

        setCnt(value);
        setInputValue(value);

        props.onChange(value);
    }

    function setInput(value: any) {
        // setValue(parseInt(value));
        // let cnt = parseInt(value);
        setInputValue(
            isNaN(parseInt(value))
            ? props.min
            : parseInt(value)
        );
    }

    function applyInput() {
        // setValue(
        //     isNaN(parseInt(value)) ? min : parseInt(value)
        // );
        setValue(inputValue);
    }

    function decrease() {
        // console.log('decrease');
        // setCnt(cnt - 1);
        setValue(cnt - 1);
    }

    function increase() {
        // console.log('increase');
        // setCnt(cnt + 1);
        setValue(cnt + 1);
    }

    return (
        <div>
            <button onClick={decrease}>-</button>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInput(e.target.value)}
                onBlur={applyInput}
            />
            <button onClick={increase}>+</button>
        </div>
    );
}

export default PriceInput;