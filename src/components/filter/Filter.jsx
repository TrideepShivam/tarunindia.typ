import { useContext, useState } from 'react';
import PopUpContainer from '../popUpContainer/PopUpContainer';
import './Filter.css';
import { Context } from '../../ContextAPI';
import CircleButton from '../circleButton/CircleButton';
import CardContainer from '../cardContainer/CardContainer';
import Hyperlink from '../hyperlink/Hyperlink';
import Button from '../button/Button';

const Filter = ({ setOpenFilter, data, setLanguageFilter, setDurationFilter }) => {
    const { lightMode } = useContext(Context);
    const durationList = [1, 5, 10];
    const languageList = ['English', 'Krutidev', 'Mangal'];
    const [selectedData, setSelectedData] = useState(data);
    const img = (
        <img
            width="25"
            height="25"
            src={
                !lightMode
                    ? 'https://img.icons8.com/ios-filled/25/000000/delete-sign--v1.png'
                    : 'https://img.icons8.com/ios-filled/25/ffffff/delete-sign--v1.png'
            }
            alt="back"
        />
    );
    const handleFilter = () => {
        setLanguageFilter(selectedData.language);
        setDurationFilter(selectedData.duration);
        setOpenFilter(false);
    };
    return (
        <PopUpContainer>
            <CircleButton onClick={() => setOpenFilter(false)} style={{ top: '1em', right: '0.5em' }} value={img} />
            <div className="filterContainer">
                <h1 className="highlight">Filter analytics</h1>
                <p>Easily filter your data based on duration and language to get more relevant results.</p>
                <h2 className="sectionHead">Language</h2>
                <CardContainer>
                    {languageList.map((item, index) => (
                        <Hyperlink
                            key={index}
                            value={item}
                            onClick={() =>
                                setSelectedData((prevData) => ({
                                    ...prevData,
                                    language: item,
                                }))
                            }
                            type={item == selectedData.language ? 'themed' : 'bordered-theme'}
                        />
                    ))}
                </CardContainer>
                <h2 className="sectionHead">Duration</h2>
                <CardContainer>
                    {durationList.map((item, index) => (
                        <Hyperlink
                            key={index}
                            value={item + ' min'}
                            onClick={() =>
                                setSelectedData((prevData) => ({
                                    ...prevData,
                                    duration: item,
                                }))
                            }
                            type={item == selectedData.duration ? 'themed' : 'bordered-theme'}
                        />
                    ))}
                </CardContainer>
                <div>
                    <Button style={{ width: '50%' }} value={'See Results'} onClick={handleFilter} />
                    <Hyperlink type="trans-hover" value={'Leave'} onClick={() => setOpenFilter(false)} />
                </div>
            </div>
        </PopUpContainer>
    );
};

export default Filter;
