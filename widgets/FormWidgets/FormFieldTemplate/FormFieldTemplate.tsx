import { Component, PropsWithChildren } from "react";
import styles from './FormFieldTemplate.module.css'

interface FormFieldTemplateProps {
    heading?:string,
    name?:string,
    id?:any,
    placeholder?:string,
    defualtValue?:string,
    type?:string
    onChange?:(val:any)=>void
    isSelect?:boolean
}
 
interface FormFieldTemplateState {
    
}
 
class FormFieldTemplate extends Component<PropsWithChildren<FormFieldTemplateProps>, FormFieldTemplateState> {
    state = { 

    }

    render() { 
        const _isSelect = this.props.isSelect ?? false
        return ( 
            <div className="flex space-x-4 space-y-4 items-center">
                <p className={styles.headingStyle}>{this.props.heading}</p>
                
                {!_isSelect &&
                    <input 
                        id={this.props.id}
                        value={this.props.defualtValue}
                        name={this.props.name}
                        className={styles.fieldStyle}
                        type={this.props.type}
                        placeholder={this.props.placeholder ?? ""}>
                    </input>
                }

                {_isSelect &&
                    <select 
                        id={this.props.id}
                        value={this.props.defualtValue}
                        name={this.props.name}
                        className={styles.fieldStyle}
                        placeholder={this.props.placeholder ?? ""}
                        onChange={this.props.onChange} >

                        {this.props.children}

                    </select>

                }
                
            </div>
        );
    }
}
 
export default FormFieldTemplate;