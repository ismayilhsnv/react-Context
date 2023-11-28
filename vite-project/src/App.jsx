import { useState } from 'react'
import './App.css'
import{ RouterProvider,createBrowserRouter} from "react-router-dom"
import Router from "./routes/Routes"

const router=createBrowserRouter(Router)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
