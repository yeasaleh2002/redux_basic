import { useDispatch, useSelector } from "react-redux"
import { decrement, decrementByAction, increment, incrementByAction } from "./redux/feature/Counter/counterSlice";


function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Tech Net
      </h1>
      <h2 className="text-center text-gray-950 text-2xl font-extrabold">Counter App</h2>
      <div className="flex justify-center items-center mt-2.5 gap-6" >
        <div><button onClick={() => dispatch(increment())} className="p-2.5 rounded-md border border-green-900">Increment</button></div>
        <div><button onClick={() => dispatch(incrementByAction(5))} className="p-2.5 rounded-md border border-green-900">Increment By Fixed Amount</button></div>
        <div>{count}</div>
        <div><button onClick={() => dispatch(decrementByAction(3))} className="p-2.5 rounded-md border border-red-900" >Decrement By Fixed Amount</button></div>
        <div><button onClick={() => dispatch(decrement())} className="p-2.5 rounded-md border border-red-900" >Decrement</button></div>
      </div>
    </>
  )
}

export default App
