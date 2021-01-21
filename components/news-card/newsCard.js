export const NewsCard = ({ imgUrl, title, body }) => (
    <div className="flex flex-col rounded bg-gray-200 shadow-md lg:w-1/4 m-4 w-full">
        <img className="h-48 w-full object-cover" src={imgUrl} />

        <div className="p-8">
            <div className="text-center text-gray-600">{title}</div>
            <p className="text-center mt-4">{body}</p>
        </div>
    </div>
);
