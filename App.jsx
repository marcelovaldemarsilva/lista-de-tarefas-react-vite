import { useState } from 'react'

import "./app.css"
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
 
  const [search, setSearch]=useState("")
  const [filter, setFilter]=useState("All")
  const [sort, setSort]= useState("Asc")

  const [todos, setTodos] = useState([
    {
      id: 1,
      text:"Criar funcionalidade X no sistema",
      category:"Trabalho",
      isCompleted:false
    },
    {
      id: 2,
      text:"Ir para a academia",
      category:"Pessoal",
      isCompleted:false
    },
    {
      id: 3,
      text:"Estudar React",
      category:"Estudos",
      isCompleted:false
    },

  ])

  const addTodo =(text, category)=>{
    const newTodos = [...todos,{
      id:Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted:false,
    },
  ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ?  todo : null)
    setTodos(filteredTodos);
  };

  const completeTodo=(id) =>{
    const newTodos =[...todos]
    newTodos.map((todo)=>  {todo.id===id ? todo.isCompleted= !todo.isCompleted:todo
    
    }
    );
    
    setTodos(newTodos); 
  };


  return (
   <div className='app'>
    <h1>List de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
    <div className='todo-list'>
      {
        todos
        //filtrar tarefas
        .filter((todo)=>
        filter==="All" 
        ? true 
        : filter === "Completed"
        ? todo.isCompleted 
        : !todo.isCompleted        
        )
        //pesquisar pelo input
        .filter((searchs)=>
        searchs.text.toLowerCase().includes(search.toLowerCase())
        )
        //sorter pelo Asc e Desc
        .sort((a,b)=>
        sort==="Asc"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text)       
        )

        .map((todo)=>(
          <Todos todos={todo} removeTodo={removeTodo} completeTodo={completeTodo} key = {todo.id}/>
        ))
      }
    </div>
    <TodoForm addTodo={addTodo} />
   </div>
  )
}

export default App
