import React, {  useState, useEffect } from "react"; 
import styles from './app.module.css';
import { UserView } from "./components";




export const App = () => {

const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
        .then((data) => data.json())
        .then((data) => setUsers(data.data));
    }, []);

    return (<div className={styles.wrapper}>
        {/* <ul className={styles.user}>
            {users.map( user => (<li key ={user.id}>{user.first_name} <img src={user.avatar} alt={' '}/></li>))}
        </ul> */}
        {users.map((user) => {
            return <UserView userCatch={user}/>
        })}
        </div>)
}

    