import React from  'react';
import {render} from 'react-dom';
import App from './componentMapping';


/*
* props
*
*유동적인 데이터
*jsx 내부에 {this.state.stateName}
*초기값 설정이 필수, 생성자 (constructor)에서 this.state={} 으로 설정
*값을 수정 할 때에는 this.setState({...})렌더링 된 다음 this.state = 절대로 사용하지 말것
* *
*/

render(<App/>, document.getElementById('wraper'));



