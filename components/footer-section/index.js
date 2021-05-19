import LocationIcon from '../svg/locationIcon';
import MailIcon from '../svg/mailIcon';

export const FooterSection = ({}) => (
    <div className="bg-gray-100 h-32 lg:h-64 flex justify-evenly items-center flex-wrap">
        <div className="flex ml-4 font-muli my-16">
            <div className="self-center">
                <LocationIcon height={30} />
            </div>
            <span className="ml-4 text-2xl lg:text-5xl text-gray-600">
                MAPEAR <span className="text-blue-400"> COMUNIDAD </span>
            </span>
        </div>
        <div>
            <div className="flex">
                <MailIcon height={32} />
                <label className="text-gray-800 ml-4">
                    mapearcomunidad@gmail.com
                </label>
            </div>
        </div>
    </div>
);
