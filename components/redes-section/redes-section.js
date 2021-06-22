import MailIcon from '../svg/mailIcon';
import FacebookIcon from '../svg/facebookIcon';
import InstagramIcon from '../svg/instagramIcon';

function RedesSection() {
    return (
        <div className="flex flex-col">
            <div className="flex items-center self-center lg:self-start cursor-pointer">
                <MailIcon height={32} color="#931F27" />
                <a
                    className="text-gray-800 ml-4 cursor-pointer"
                    href="mailto:mapearcomunidad@gmail.com"
                >
                    mapearcomunidad@gmail.com
                </a>
            </div>

            <div className="mt-8 flex items-center self-center lg:self-start cursor-pointer">
                <FacebookIcon height={32} color="#931F27" />
                <a
                    className="text-gray-800 ml-4 cursor-pointer"
                    target="_blank"
                    href="https://www.facebook.com/Mapear-Comunidad-105933275033351"
                >
                    Mapear Comunidad
                </a>
            </div>

            <div className="mt-8 flex items-center self-center lg:self-start cursor-pointer">
                <InstagramIcon height={32} color="#931F27" />
                <a
                    className="text-gray-800 ml-4 cursor-pointer"
                    target="_blank"
                    href="https://instagram.com/mapearcomunidad?utm_medium=copy_link"
                >
                    mapearcomunidad
                </a>
            </div>
        </div>
    );
}

export default RedesSection;
