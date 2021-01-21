import { css } from 'emotion';
export const CartografiaCard = ({ imgUrl, category, title, active }) => (
    <div
        className={css`
            background: linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 1)
                ),
                url(${imgUrl});
            background-size: cover;
            margin-right: 2rem;
            flex: 1;
            min-width: 200px;
            ${active ? 'opacity: 1;' : 'opacity: 0.5;'}
            ${active
                ? 'transform: scale(1.1);'
                : 'transform: scale(0.7);'}
            ${active
                ? 'background-color: #f3f3f3;'
                : 'background-color: white;'}
            ${active
                ? 'border-color: #f3f3f3;'
                : ' border-color: white;'}
            box-shadow: none;
            transition: opacity 300ms linear, border-color 300ms linear,
                background-color 300ms linear,
                transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
        `}
    >
        <div className="flex flex-col h-56 justify-end p-4">
            <div className="text-gray-500 font-muli text-md">{category}</div>
            <div className="text-gray-500 font-muli text-lg">{title}</div>
        </div>
    </div>
);
