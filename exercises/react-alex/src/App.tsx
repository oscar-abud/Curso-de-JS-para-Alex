import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
  }
  const [count, setCount] = useState<number>(0)
  const [follow, SetFollow] = useState<boolean>(false)
  const [todos, setTodos] = useState<Todo[]>([])
  const [refresh, setRefresh] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()

        setTodos(data)
      } catch (error: any) {
        console.error(error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    getData()

  }, [refresh])

  if (error) return <span>Oops!</span>

  if(loading) return <h1>Cargando...</h1>

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="card">
        <button className={follow ? "followed" : ''} onClick={() => SetFollow(!follow)}>
          {follow ? 'Siguiendo' : 'Seguir'}
        </button>
      </div>

      <div className="card">
        <button onClick={() => setRefresh(!refresh)}>
          Refrescar
        </button>
        {
          loading
            ? (<h2>Cargando...</h2>)
            : (
              todos.map(todo => (
                <Card titulo={todo.title} completado={todo.completed} />
              ))
            )
        }
      </div>
    </>
  )
}

export default App
