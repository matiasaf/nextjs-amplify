import Link from 'next/link';

export default function BackHomeButton() {
    return (
        <div className="flex font-muli text-white justify-end mb-16 mr-16">
            <div className="bg-red-800 flex justify-center p-2 rounded-2xl w-32 transform transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-110">
                <Link href="/">
                    <a>Volver al inicio</a>
                </Link>
            </div>
        </div>
    );
}
