import React from "react";
import styles from './index.module.css';

export const UserView = (user) => {

    console.log(user);

    // avatar: "https://reqres.in/img/faces/7-image.jpg"
    // email: "michael.lawson@reqres.in"
    // first_name: "Michael"
    // id: 7
    // last_name: "Lawson"
    return (
        <div>
            <div key = {user.id} className={styles.avatar}>{user.avatar}</div>    
            <div key = {user.id} className={styles.firstName}>{user.first_name}</div>
            <div key = {user.id} className={styles.lastName}>{user.last_name}</div>
            <div key = {user.id} className={styles.email}>{user.email}</div>
        </div>
    )

}