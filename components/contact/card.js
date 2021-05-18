export default function ContactCard({ name, email, isEmail }) {
    return (
        <div className="flex m-6 font-muli flex-col h-52 justify-around bg-white py-8 px-10 text-center rounded-md shadow-md transform transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg">
            {/* <img
                        className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
                        src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="User avatar"
                    /> */}
            <p className="text-lg mt-1">{name}</p>

            <a
                href={isEmail ? `mailto:${email}` : '#'}
                className="rounded-md bg-gradient-to-r from-blue-400 to-blue-300 text-md text-white pt-3 pb-4 px-4"
            >
                {email}
            </a>
        </div>
    );
}
