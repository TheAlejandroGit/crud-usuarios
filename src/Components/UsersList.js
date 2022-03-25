import React from 'react';
import '../App.css';



const UsersList = ({users, setUserSelected, deleteUser}) => {
    return (
        <ul >
            {
            users.map(user=>(

            <li key={user.id} className="card">
              <div className='info'>
              <p><b>{user.first_name} {user.last_name}</b></p>  
              <p><b>{user.email}</b></p> 
                {/* <p><b>Password: </b>{user.password}</p> */}
              <p><i class="fa-solid fa-cake-candles"></i> {user.birthday}</p> 
              </div>

              <div className='buttons'>
              <button onClick={()=>setUserSelected(user)} className="buttonEdit"><i className="fa-solid fa-pen-to-square"></i></button> 
              <button onClick={()=>deleteUser(user.id)} className="buttonTrash"><i className="fa-solid fa-trash" ></i></button> 
              </div>
            </li>
              
                

            ))
            
            }
        </ul>
    );
};

export default UsersList;