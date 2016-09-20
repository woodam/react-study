import React from 'react';


class Codelab extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>숫자 {this.props.number}</p>
                <div>{this.props.children}</div>
            </div>
        );
    }
}



Codelab.defaultProps = {
    name : 'dam'
};


export default class App extends  React.Component {
    render(){
        return (
            <Codelab number={5}>이사이에 있는거</Codelab>
        )
    }
}