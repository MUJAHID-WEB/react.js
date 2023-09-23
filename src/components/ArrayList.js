import React from 'react'
import { Table } from 'react-bootstrap'
import ReuseComponent from '../components/ReuseComponent'

export default function ArrayList() {
    const students = ['Mujahid', 'Islam', 'Subaha', 'Sadika ']

    // Using object to store multiple data
    const employee = [
        {
            name: 'Mujahid', email: 'mujahid@gmail.com', mobile: 101, address: [
                {
                    hm: '10', city: 'Dhaka'
                }, {
                    hm: '10', city: 'Dhaka'
                }, {
                    hm: '10', city: 'Dhaka'
                }
            ]
        },
        {
            name: 'Islam', email: 'islam@gmail.com', mobile: 5452, address: [
                {
                    hm: '10', city: 'Dhaka'
                }, {
                    hm: '10', city: 'Dhaka'
                }, {
                    hm: '10', city: 'Dhaka'
                }
            ]
        },
        {
            name: 'Subaha', email: 'subaha@gmail.com', mobile: 324561, address: [
                {
                    hm: '10', city: 'Dhaka'
                }, {
                    hm: '10', city: 'Dhaka'
                }, {
                    hm: '10', city: 'Dhaka'
                }
            ]
        },
        {
            name: 'Anabia', email: 'anabia@gmail.com', mobile: 101, address: [
                {
                    hm: '10', city: 'Dhaka'
                }, {
                    hm: '10', city: 'Dhaka'
                }, {
                    hm: '10', city: 'Dhaka'
                }
            ]
        },
    ]

    //// for loop not supported in return call so 'map' use
    // for(let i=0; i<students.length; i++)
    // {
    //     console.warn('in for loop:', students[i])
    // }
    return (
        <div>
            <h1>Array with list, map</h1>
            {
                students.map((e) =>
                    <h1>Name is: {e}</h1>
                )
            }
            <h1> employee list </h1>
            <Table striped bordered hover>
                <tbody>
                    <tr >
                        <td>SL</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                        <td>Address</td>
                    </tr>
                </tbody>
                <tbody>
                    {
                        employee.map((e, i) =>
                            e.mobile === 101 ?
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.mobile}</td>
                                    <td>
                                        <Table striped bordered hover>
                                            <tbody>
                                                {
                                                    e.address.map((a, i) =>
                                                        <tr key={i}>
                                                            <td>{a.hm}</td>
                                                            <td>{a.city}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    </td>
                                </tr>
                                : null
                        )
                    }
                </tbody>

            </Table>


            {/* ReuseComponent */}

           
                {
                    employee.map((rc, i)=>
                    <ReuseComponent data={rc}/>
                    )
                }
            
        </div>
    )
}
