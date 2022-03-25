import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersForm = ({getUsers, userSelected, setUserSelected}) => {
    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [birthday, setBirthday]= useState("");

   useEffect(()=>{

        if(userSelected){

            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday)
        }
   },[userSelected]);



    const submit=e=>{
        e.preventDefault();
        const user={
            first_name: firstName,
            last_name: lastName,
            email:email,
            password:password,
            birthday:birthday

        }

        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then(()=>{
                getUsers()
                setUserSelected(null)
                reset();
            
            })

        } else{

axios.post("https://users-crud1.herokuapp.com/users/", user)
         .then(()=>{
             
            getUsers();
            reset();
        
        });
        }      
    }

    const reset=()=>{
            setFirstName("");
             setLastName("");
             setEmail("");
             setPassword("");
             setBirthday("");
    }


    return (
       
        <form onSubmit={submit} className="form">
            <h1>New User</h1>
            <div className='wrap-container'>
            <div className='input-container'>
                <label htmlFor="firstName"><i class="fa-solid fa-user"></i> </label>
                <input type="text"  onChange={e=>setFirstName(e.target.value)} value={firstName} placeholder="First Name"/>
                <input type="text"  onChange={e=>setLastName(e.target.value)} value={lastName} placeholder="Last Name"/>
            </div>

            <div className='input-container'>
                <label htmlFor="email"><i class="fa-solid fa-envelope"></i> </label>
                <input type="text"  onChange={e=>setEmail(e.target.value)} value={email} placeholder="email"/>
            </div>

            <div className='input-container'>
                <label htmlFor="password"><i class="fa-solid fa-lock"> </i> </label>
                <input type="password"  onChange={e=>setPassword(e.target.value)} value={password} placeholder="Password"/>
            </div>

            <div className='input-container'>
                <label htmlFor="birthday"><i class="fa-solid fa-cake-candles"></i> </label>
                <input type="date"  onChange={e=>setBirthday(e.target.value)} value={birthday}/>
            </div>
            </div>
            <button>Submit</button>
            {/* <button onClick={()=>reset()} type="button">Deselect</button> */}

        </form>
        
    );
};

export default UsersForm;