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
            //���⼭ contact�� data, i�� �ε�����
            return data.map((contact,i)=>{
                return (<ContactInfo contact={contact} key={i}/>);
            });
        };

        //���Ͼȿ� jsx���� �ȿ��� ȣ�� �Ҷ� {}�� �̿� => mapToComponet �޼ҵ� ȣ��
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