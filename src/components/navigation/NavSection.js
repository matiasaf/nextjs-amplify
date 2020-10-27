import { css } from 'emotion';

function NavSection() {
    return (
        <div
            className={css`
                display: flex;
            `}
        >
            <div className={x}>X</div>
            <div className={y}>Y</div>
            <div className={z}>Z</div>
        </div>
    );
}

const x = css`
    width: 2rem;
`;

const y = css`
    width: 2rem;
`;

const z = css`
    width: 2rem;
`;

export default NavSection;
