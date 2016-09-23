import React from 'react';
import ContactInfo from './ContectInfo';
import ContactDetails from './ContactDetails'

export  default class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedkey : -1,
            keyword : '',
            contactData : [
                {name : 'Abet', phone : '010-0000-0001'},
                {name : 'betty', phone : '010-0000-0002'},
                {name : 'charlie', phone : '010-0000-0003'},
                {name : 'david', phone : '010-0000-0004'}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            keyword : e.target.value
        })
    }

    handleClick(key){
        this.setState({
            selectedkey : key
        });

        console.log(key, 'is selected');
    }

    render(){
        const mapToComponet = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );
            // 컴포넌트에는 온클릭같은 이벤트가 등록이 안된다 등록하게 되면 props로 전달된다.
            // 컴포넌트에서 i로 파람을 전달 하면 되지 않는다 그렇지만 arrow 함수로 전달하면 가능하다.
            return data.map((contact,i)=>{
                return (<ContactInfo
                                    contact={contact}
                                    key={i}
                                    onClick={ () => this.handleClick(i) } />);
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
               <div>{ mapToComponet(this.state.contactData) }</div>
                <ContactDetails
                    isSelected={this.state.selectedkey != -1}
                    contact={this.state.contactData[this.state.selectedkey]}/>
            </div>
        )
    }
}