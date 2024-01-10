
import { useState } from 'react'
import './App.css'
import Cell from './components/Cell'

function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] =useState(false)
  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  const setDeactivation = () => {
    setIsDeactivating(true)
    const timer = setInterval(() => {
      setOrder((oldOrder)=>{
        const newOrder = oldOrder.slice() // Deep Copy
        newOrder.pop()

        if(newOrder.length === 0){
          clearInterval(timer);
          setIsDeactivating(false)
        }
        return newOrder;
      })
    }, 300);
  }

  const handleClick =(index) => {
    const newOrder = [...order, index]
    setOrder(newOrder)

    if(newOrder.length === config.flat(1).filter((val)=> val!==0).length){
      setDeactivation();
    }

  }

  return (
    <>
      <div className='wrapper'>
        <div className="grid">
          {
            config.flat(1).map((data,index)=>{
              return (data)?
              <Cell 
              key = {index}
              onClick = {()=>handleClick(index)}
              filled = {order.includes(index)}
              deActive = {isDeactivating || order.includes(index)}
              label = {`cell-${index}`}
              /> :
              <span key = {index}/>;

            })
          }
        </div>
      </div>
    </>
  )
}

export default App
