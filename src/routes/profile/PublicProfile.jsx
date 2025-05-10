import { useEffect, useState } from 'react';
import Profile from '../../assets/logo-reverse.svg';
import api from '../../api';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import Loading from '../../components/loading/Loading';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import { useParams } from 'react-router-dom';

import './PublicProfile.css';
import { format } from 'date-fns';

const PublicProfile = () => {
    const { id } = useParams();
    const typingStats = [
        {
            time: '1 MINUTE',
            kpm: 176,
            wpm: 31,
            accuracy: 94.3,
        },
        {
            time: '5 MINUTE',
            kpm: 177,
            wpm: 32,
            accuracy: 95.3,
        },
        {
            time: '10 MINUTE',
            kpm: 178,
            wpm: 33,
            accuracy: 96.3,
        },
    ];
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
                    <h3>TYPING DETAILS</h3>
                    <div className="typingModes">
                        <Hyperlink key="english" type="bordered-theme" value="English" onClick={() => {}} />
                        <Hyperlink key="krutidev" type="bordered-theme" value="Krutidev" onClick={() => {}} />
                        <Hyperlink key="mangal" type="bordered-theme" value="Mangal" onClick={() => {}} />
                    </div>
                    <div className="typingStats">
                        <div className="statsHeader">
                            <div className="statLabel"></div>
                            <div className="statLabel">KPM (AVG)</div>
                            <div className="statLabel">WPM (AVG)</div>
                            <div className="statLabel">ACCURACY</div>
                        </div>
                        {typingStats.map((stat, index) => (
                            <div className="statsRow" key={index}>
                                <div className="statValue">{stat.time}</div>
                                <div className="statValue">{stat.kpm}</div>
                                <div className="statValue">{stat.wpm}</div>
                                <div className="statValue">{stat.accuracy}</div>
                            </div>
                        ))}
                    </div>
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
