import logo from './logo.svg';
import './App.css';
import UserForm from './component/UserForm';
import { UserList } from './component/UserList';
import { store } from './services/ReduxStore/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
       <Provider store={store}>

       <UserForm></UserForm>
       <UserList></UserList>
       </Provider>
    </div>
  );
}

export default App;
