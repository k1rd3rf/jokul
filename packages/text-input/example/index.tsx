import "@fremtind/jkl-core/core.css";
import React from "react";
import ReactDOM from "react-dom";
import "../text-input.scss";

interface InputProps {
    label: string;
    valid?: boolean;
}

const Input = ({ label, valid = true }: InputProps) => (
    <label className="jkl-text-field">
        <input aria-invalid={!valid} className="jkl-text-field__input" type="text" placeholder=" " />
        <span className="jkl-text-field__label">{label}</span>
        <span className="jkl-text-field__border" />
    </label>
);

const TextArea = ({ label, valid = true }: InputProps) => {
    return (
        <label className="jkl-text-field jkl-text-area">
            <textarea placeholder=" " aria-invalid={!valid} className="jkl-text-field__input"></textarea>
            <span className="jkl-text-field__label">{label}</span>
            <span className="jkl-text-field__border" />
        </label>
    );
};

const Inputs = () => (
    <main style={{ padding: "36px", backgroundColor: "#3d3d3d", height: "100vh" }}>
        <div style={{ padding: "36px", backgroundColor: "#fafafa" }}>
            <Input label="Fornavn" />
            <Input label="Etternavn" />
            <Input label="Epost" valid={false} />
            <TextArea label="Din livshistorie" />
            <TextArea label="Min livshistorie" />
        </div>
    </main>
);

ReactDOM.render(<Inputs />, document.getElementById("app"));
