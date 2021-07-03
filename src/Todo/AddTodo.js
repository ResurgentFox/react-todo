import React, {useState} from "react";

const styles = {
    input: {
        marginRight: '1rem',
        border: '3px solid pink',
        boxShadow: '0px 0px 0px 1px black',
        borderRadius: '15px',
        padding: '10px',
        outline: 'none',
        width: '200px'
    },
    button: {
        cursor: 'pointer',
        border: '1px solid #000',
        borderRadius: '20px',
        color: '#000',
        fontFamily: 'Fuggles',
        fontSize: '26px',
        fontWeight: 'bold',
        backgroundColor: '#FADADD',
        padding: '5px',
        width: '100px'
    }
}

function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue('')
        } 
    }
    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input style={styles.input} value={value} onChange={event => setValue(event.target.value)}/>
            <button style={styles.button} type="submit">Add Todo</button>
        </form>
        )
}

export default AddTodo;
