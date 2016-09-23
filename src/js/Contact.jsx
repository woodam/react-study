import React from 'react';
import ContactInfo from './ContectInfo';

export  default class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyword : '',
            contactData : [
                {name : 'Abet', phone : '010-0000-0001'},
                {name : 'betty', phone : '010-0000-0002'},
                {name : 'charlie', phone : '010-0000-0003'},
                {name : 'david', phone : '010-0000-0004'}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            keyword : e.target.value
        })
    }

    render(){
        const mapToComponet = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );

            return data.map((contact,i)=>{
                return (<ContactInfo contact={contact} key={i}/>);
            });
        };

        return(
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                { mapToComponet(this.state.contactData) }
            </div>
        )
    }
}