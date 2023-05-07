import axios from 'axios';
import { useNavigate, BrowserRouter, Routes, Route} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import ReactDOM from "react-dom";
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

function Root() {
  const history = useNavigate();

  const handleClick = () => {
    // alert('oi: ');
    // const db_request = api.get('/login').then((response) => console.log(response))
    // .catch((error) => console.log(error));

    // console.log(db_request);
    // event.preventDefault();


    const response = axios.get('http://localhost:3000/login');
    console.log(response)
    if (response.status === 200) {
      history.push('http://localhost:3000/login');
    }
  };
  return (
    <div>
      <h1>opa</h1>
      <button onClick={handleClick}>Chamar tela</button>
      <a href="http://localhost:3000/login">bundinha</a>
      <Nav />
      <Routes>
        <Route exact path="/"/>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
