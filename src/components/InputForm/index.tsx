import React from "react";

interface IInputFormProps {
    type: string;
    placeholder: string;
    inputRef: React.Ref<HTMLInputElement>;
}

export default function InputForm(props: IInputFormProps): JSX.Element {
    return (
        <div className="login-page-box-form-input">
            <input ref={props.inputRef} type={props.type} placeholder={props.placeholder} />
        </div>
    );
}
