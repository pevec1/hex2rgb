import { useState } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState('');
  const [answer, setAnswer] = useState("white")
  const getValue = input => {
    const { type } = input;
    console.log(type);
    console.log(input.value[0]);
    if(typeof input.value === 'string'
      && input.value[0] === '#'
      && input.value.length === 7
      && !isNaN(Number('0x' + input.value.substring(1, 7)))){ 
      setAnswer(input.value);
      return input.value
    } else if (typeof input.value ==='string' && input.value.length <7) {
    setAnswer("white")
    return input.value
    } else {
    setAnswer("red")
    return input.value
    }
  }
  
  const onChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = getValue(target);
    console.log(name, value, event, target, getValue(target));
    setData(value);
  }
  
  return(
    <div className="wrapper" style={{'--mainColor': `${answer}`}}>
    <form className="">
      <input type="text" name="name" value={data} onChange={onChange}/>
      <div className='answer' onChange={onChange}>{answer==="red" ? "ошибка": answer === "white" ? "введите цвет" : data}</div>
    </form></div>
  );
}

export default App
