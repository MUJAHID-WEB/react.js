import React from 'react'

// export default function Props ( item ){
//     return(
//         <div>
//             <h1>
//                 {item.text.name}
//                 {item.data}
//             </h1>
//         </div>
//     )
// }

// export default class Props extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.data}</h1>
//                 <h1>{this.props.text.name}</h1>
//             </div>
//         )
//     }
// }



export default function Props(p) {
  return (
    <div>
        
        <h1>Props in Functional Component </h1>

        <h2> {p.text} </h2>

        <button onClick={p.data}> Call Data from Function from App.js </button>
        
    </div>
  )
}
