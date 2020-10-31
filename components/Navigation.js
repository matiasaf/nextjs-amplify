import { css } from 'emotion';
import NavSection from './navigation/NavSection';
function Navigation() {
    return (
        <nav
            className={css`
                display: flex;
            `}
        >
            <div>Icon</div>
            <div
                className={css`
                flex: 1;
                `}
            >
                Search bar
            </div>
            <NavSection />
        </nav>
    );
}

export default Navigation;
