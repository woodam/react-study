import React from 'react';


//컴포넌트component에 이벤트 등록한건 props에 전달 된다.
export default class ContactInfo extends React.Component {
    render(){
        return(
            <div onClick={this.props.onClick}>
                {this.props.contact.name}
            </div>
        )
    }
}