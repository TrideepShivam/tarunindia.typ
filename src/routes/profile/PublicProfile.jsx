import { useEffect, useState } from 'react';
import Profile from '../../assets/logo-reverse.svg';
import api from '../../api';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import Loading from '../../components/loading/Loading';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import { useParams } from 'react-router-dom';

import './PublicProfile.css';
import { format } from 'date-fns';
import TypingDetails from './typingDetails/TypingDetails';

const PublicProfile = () => {
    const { id } = useParams();
    useAuthInterceptor();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `/profile/${id}`;
        api.get(url)
            .then(({ data }) => {
                setData(data);
                setLoading(false);
            })
            .catch(({ response }) => {
                setLoading(false);
                console.log(response);
            });
    }, []);
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <div className="publicProfile">
                <div className="profileImageSection">
                    <img
                        className="profileImage"
                        width="150em"
                        src={data.profile_pic_url ? data.profile_pic_url : Profile}
                        alt="profile_pic"
                    />
                    <div className="linkContainer">
                        {data.youtube && (
                            <Hyperlink
                                onClick={() => {}}
                                href={data.youtube}
                                value={<img src="https://img.icons8.com/color/42/youtube-play.png" alt="youtube" />}
                            />
                        )}
                        {data.instagram && (
                            <Hyperlink
                                onClick={() => {}}
                                href={data.instagram}
                                value={
                                    <img src="https://img.icons8.com/fluency/39/instagram-new.png" alt="instagram" />
                                }
                            />
                        )}
                        {data.instagram && (
                            <Hyperlink
                                onClick={() => {}}
                                href={data.twitter}
                                value={<img src="https://img.icons8.com/fluency/39/twitterx--v1.png" alt="twitter" />}
                            />
                        )}
                        {data.facebook && (
                            <Hyperlink
                                onClick={() => {}}
                                href={data.facebook}
                                value={<img src="https://img.icons8.com/fluency/39/facebook--v1.png" alt="twitter" />}
                            />
                        )}
                    </div>
                </div>
                <div className="contactInfo">
                    <h1>{data.name ? data.name : 'NAME'}</h1>
                    <p>Joined Typathon on {format(new Date(data.joining_date), 'MMM d, yyyy')}</p>
                    <p className="highlight">ABOUT</p>
                    <p>{data.bio ? data.bio : 'BIO'}</p>
                    <p className="highlight">CONTACT</p>
                    <p>{data.email}</p>
                </div>
                <div className="profileCardContainer"></div>
                <div className="typingDetails">
                    <TypingDetails data={data.avg_test_details} />
                </div>
                <div className="achivement">
                    <span>ACHIEVEMENTS</span>
                    <div className="achivementDetails">No Data Found</div>
                </div>
            </div>
        </>
    );
};

export default PublicProfile;
