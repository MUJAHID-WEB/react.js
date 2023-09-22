import React from 'react'

// export default function State ( item ){
//     return(
//         <div>
//             <h1>
//                 {item.text.name}
//                 {item.data}
//             </h1>
//         </div>
//     )
// }

export default class State extends React.Component {

    constructor(){
        super();
        this.state = {
            name: ' Mujahid ',
            email: 'peter@test.com',
            count: 0

        }
    }
    updateState(){
        this.setState({
            name: 'Islam',
            count: this.state.count+1
        })
    }

    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>Email: {this.state.email}</h1>

                <h1>Count: {this.state.count}</h1>

                <button onClick={()=>{this.updateState()}}> Update Name  </button>
            </div>
        )
    }
}