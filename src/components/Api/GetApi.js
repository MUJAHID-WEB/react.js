import React, { useEffect, useState } from 'react'

export default function GetApi() {
    const [data, setData] = useState([]) // passing empty 
    useEffect(() => {
      getData() // get data at first refresh
    }, []) // passing empty for one time run

    //// Get
    function getData(){
        fetch('url').then((result) => {
            result.json().then((resp) => {
                console.warn('result', resp)
                setData(resp)
            })
        })
    }

    ////// Delete
    function deleteData(id){
        fetch(`url/${id}`, {  // use back tick to add id
            method:'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)

                getData() // get data after delete without referesh
            
            })
        })
    }
    return (
        <div>
            <h1>Get API call</h1>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile</td>
                    <td>Actions</td>

                </tr>

                {
                    data.map((item) => {
                        <tr>
                            <td>{item.userID}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td><button onClick={()=>deleteData()}>Delete</button></td>

                        </tr>
                    }
                    )
                }
            </table>
        </div>
    )
}
