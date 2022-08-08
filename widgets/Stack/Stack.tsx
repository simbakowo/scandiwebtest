import { Component, PropsWithChildren } from "react";


interface MyStackProps {
    
}
 
interface MyStackState {
    
}
 
class MyStack extends Component<PropsWithChildren<MyStackProps>, MyStackState> {
    state = { 

    }

    render() { 
        return ( 
            <div className='relative'>
                {this.props.children}
            </div>
        );
    }
}
 
export {MyStack}