
import Button from "@atlaskit/button";
import Textfield from '@atlaskit/textfield';
import LoginForm  from "./components/LoginForm";
import { useState} from "react";
import { v4 } from "uuid";
import Todo from "./components/TodoList";
import TodoList from "./components/TodoList";

function App() {
  const adminUser = [
    {
      email: "hoapro123@gmail.com",
      password: "123",
    },
    {
      email: "hoapro1234@gmail.com",
      password: "123",
    }
  ];

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [textInput, setTextInPut] = useState("");
  const onTextInputChange = (e) =>{
    setTextInPut(e.target.value);
  };
  const onAddBtnClick = (e) =>  {
    setTodoList([...todolist, {id: v4, name: textInput, isComeleted: false}]);
  };

  const Login = details => {
    console.log(details);
    for(let h of adminUser){
      if (details.email == h.email && details.password == h.password){
        console.log("Login in");
        setUser({
            name: details.name,
            email: details.email
        });
  
      }else{
        console.log("Dang nhap that bai");
      }
    }
  
  }
  const Logout = () => {
    console.log("Logout");
  }

  return (

    <div className="App">
      {(user.email != "") ? (
        <div className="welcome"> 
          <h2>welcome, <span>{user.name}</span></h2>
        <Textfield name="add-todo" placeholder="Them viec can lam" elemAfterInput={
          <Button isDisabled={!textInput} appearance='primary' onClick={onAddBtnClick}>Them</Button>
        }   
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
          ></Textfield>
          <button>Logout</button>
        </div>
      ): ( 
        <LoginForm Login={Login} error={error}/>
      )}
<TodoList todolist={todolist}/>
    </div>

  );
}

export default App;
