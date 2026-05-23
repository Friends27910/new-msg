import { useState } from "react"
import Nav from "./navbar"
import io from "socket.io-client"
const socket = io.connect("https://new-msg-4425.vercel.app/message")
function App(){
  const[oldmsg,newmsg]=useState([""])
  console.log(oldmsg)
  socket.on("anymessage",(msg)=>{
    newmsg(msg)
  })
  const [defaultmsgval,setdefaultmsgval] = useState("")
  function handleInput(e){
    setdefaultmsgval(e.target.value)
  }
  function handleclick(){

socket.emit("newmsg",defaultmsgval)
setdefaultmsgval("")
  }
  return(
   
    <>
    <Nav />
<div className="mt-10 flex justify-center h-1/4">
 <h1 className="font-bold text-red-600 text-3xl ">Welcome</h1>
   </div>
   <div className="msgbox pt-10 w-full h-2/4 flex flex-col">
  {oldmsg.map(element =>{
    console.log(element)
    return(
      <div className="w-full h-2/4 flex flex-col">
      <h1 key={1} className="px-5 mt-2 font-bold text-2xl ">{element}</h1>
      </div>
    )
  })}
   </div>
   <div className="buttons ml-9 h-1/4 items-end fixed bottom-1 flex">
    <input value={defaultmsgval} placeholder="Send message" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" onChange={handleInput}/>
    <button className="mx-5 px-5 hover:text-blue-600 " onClick={handleclick}>Send</button>
   </div>
   
   
    </>
  )
}
export default App;