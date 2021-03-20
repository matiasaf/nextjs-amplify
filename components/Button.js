import { css } from 'emotion';

function Button({ children }) {
    return <div className={buttonStyle}>{children}</div>;
}

const buttonStyle = css`
    padding: 2rem;
    background-color: hotpink;
    font-size: 1.5rem;
    border-radius: 10px;
    display: flex;
    height: 2rem;
    justify-content: center;
    align-items: center;
    &:hover {
        box-shadow: 0 0 10px blue;
    }
`;

export default Button;
