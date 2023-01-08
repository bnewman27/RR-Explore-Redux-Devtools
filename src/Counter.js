import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)

    const byAmount = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h1>{count}</h1>
            <button class="Increment"
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button class="Decrement"
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <form onSubmit={(e) => byAmount(e)}>
                <input type="word" onChange={(e) => setInput(e.target.value)} />
                <button class="submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Counter
