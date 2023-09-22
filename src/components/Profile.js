import React from 'react'

export default class Profile extends React.Component{
    // constructor(){
    //     super()
    // }

    componentDidMount(){
        console.log('Called Life')
        console.warn('Called Life')
    }

    componentWillUnmount(){
        alert(' componentWillUnmount called')
    }



    render(){
        return(
            <div>
                <hi> Profile Component</hi>
            </div>
        )
    }
}