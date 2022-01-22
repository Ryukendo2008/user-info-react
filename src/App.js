import { useState } from 'react';
import './App.css';
import companies from './data/data.json'

function App() {
  const [user, setUser] = useState([]);

  // const handleClick = (user) => {
  //   const newUser = [...user, user];
  //   setUser(newUser);
  //   console.log(user);
  // }

  return (
    <div className="App">
      <h2>User Added : {companies.length}</h2>
      <div>
        {
          companies.map(
            (user) =>
              <h3 style={{ border: '3px red solid', margin: '20px', padding: '20px' }}> <img style={{ position: 'absolute', left: '400px' }} src={user.img} />{user.full_name}<br />{user.email}<br />{user.phone}<br />
                <button onclick={function () {
                  console.log('added');
                }}>Add</button>
              </h3>
          )
        }
      </div>
    </div>
  );
}

export default App;
