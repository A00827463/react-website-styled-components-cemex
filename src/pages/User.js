import React, { useState, useEffect } from 'react'


function User() {
    const [dbEmail, setDbEmail] = useState();
    const [dbPassword, setDbPassword] = useState();
    useEffect(() => {
    fetch("/users").then(res => {
        if(res.ok){
        return res.json()
        }
    }).then(jsonRes => {
        setDbEmail(jsonRes[0].recordset[0].Email)
        setDbPassword(jsonRes[0].recordset[0].Password)
    })
    });
    return (
        <>
        <li>{dbEmail}</li>
        <li>{dbPassword}</li>
        </>
        
    )
}

export default User;


