import React from  'react';
import {render} from 'react-dom';
import App from './props';


/*
* props
*
* 컴포넌트 내부의 immutable Data
* jsx 내부에 {this.props.propsName}
* 컴포넌트를 사용할땐 <>괄호 안에
* propsName="value"
* this.props.children은 기본적으로 갖고 있는 props로서 <Cpnt>여기에 값이 들어간다</Cpnt>
*
*/

render(<App/>, document.getElementById('wraper'));



