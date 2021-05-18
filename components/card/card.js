import Link from 'next/link';

const Card = (props) => (
    <>
        {props.appLink && (
            <Link href={props.appLink}>
                <div className="m-4 lg:w-1/4 w-full bg-gray-200 rounded flex flex-col justify-center items-center px-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-md">
                    <div className="mt-8">{props.children}</div>
                    <div className="my-8 font-muli text-gray-700 text-center">
                        <h1 className="font-bold">{props.title}</h1>
                    </div>
                </div>
            </Link>
        )}
        {props.outLink && (
            <a href={props.outLink} target="_blank">
                <div className="m-4 w-full bg-gray-200 rounded flex flex-col justify-center items-center px-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-md">
                    <div className="mt-8">{props.children}</div>
                    <div className="my-8 font-muli text-gray-700 text-center">
                        <h1 className="font-bold">{props.title}</h1>
                    </div>
                </div>
            </a>
        )}
    </>
);

export default Card;
