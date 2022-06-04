import React from 'react';
import styles from './FormsControls.module.css';
import {WrappedFieldProps} from "redux-form";


/*export const Textarea = ({...props}) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
            <textarea {...props.input} {...props}/>
            </div>
            { hasError && <span>{props.meta.error}</span> }
        </div>
    )
}
export const Input = ({...props}) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                <Input {...props.input} {...props}/>
            </div>
            { hasError && <span>{props.meta.error}</span> }
        </div>
    )
}*/

const FormControl: React.FC<WrappedFieldProps> = ({input,meta,children,...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea:React.FC<WrappedFieldProps> = (props) => {
const {input,meta,children,...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input:React.FC<WrappedFieldProps> = (props) => {
    const {input,meta,children,...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
