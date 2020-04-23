import React from 'react';
import NameComponent from './NameComponent';

class HelloComponent extends React.Component{
    render(){
        return(
            <div>
                <h4> Hello <NameComponent/> </h4>
            </div>
        )
    }

}

export default HelloComponent;