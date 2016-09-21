import React from 'react';

class ContactInfo extends React.Component {
    render(){
        return(
            <div>
                {this.props.contact.name}
                {this.props.contact.phone}
            </div>
        )
    }
}


class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contactData : [
                {name : 'Abet', phone : '010-0000-0001'},
                {name : 'betty', phone : '010-0000-0002'},
                {name : 'charlie', phone : '010-0000-0003'},
                {name : 'david', phone : '010-0000-0004'}
            ]
        }
    }

    render(){
        const mapToComponet = (data) => {
            //여기서 contact는 data, i는 인덱스임
            return data.map((contact,i)=>{
                return (<ContactInfo contact={contact} key={i}/>);
            });
        };

        //리턴안에 jsx문법 안에서 호출 할땐 {}를 이용 => mapToComponet 메소드 호출
        return(
            <div>
                { mapToComponet(this.state.contactData) }
            </div>
        )
    }
}

export default class App extends  React.Component {
    render(){
        return (
            <Contact/>
        )
    }
}