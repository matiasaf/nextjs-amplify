import Iframe from 'react-iframe';

export const NewsCard = ({ mapUrl, title, body }) => (
    <div className="flex flex-col rounded bg-gray-200 shadow-md lg:w-1/4 m-4 w-full">
        <Iframe
            url={mapUrl}
            width="450px"
            height="450px"
            id="myId"
            className="w-full"
            display="initial"
            position="relative"
        />
        <div className="p-8">
            <div className="text-center text-gray-600 text-2xl">{title}</div>
            <p className="text-center mt-4">{body}</p>
        </div>
    </div>
);
