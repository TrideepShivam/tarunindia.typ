import { useContext, useEffect, useRef, useState } from 'react';
import './Play.css';
import logo from '../../assets/logo-reverse.svg';
import { Context } from '../../ContextAPI';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import Timer from '../../components/timer/Timer';
import ToggleDarkLight from '../../components/toggleDarkLight/ToggleDarkLight';
import WordCount from '../../components/wordCount/WordCount';
import Button from '../../components/button/Button';
import TextContent from '../../components/textContent/TextContent';
import Loading from '../../components/loading/Loading';
import useAuthInterceptor from '../../hooks/useAuthInterceptor';
import LanguageConfirmation from '../../components/languageConfirmation/LanguageConfirmation';
import Retry from '../../components/retry/Retry';
import FullScreenBtn from '../../components/fullScreenBtn/FullScreenBtn';

const Play = () => {
    useAuthInterceptor();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [retry, setRetry] = useState(false);
    const [pauseTimer, setPauseTimer] = useState(true);
    const [storyDetails, setStoryDetails] = useState({
        language: 'language',
        time: 0,
        skipIntro: true,
        backspace: true,
        highlight: true,
        story: ['Text'],
    });
    const [writtenStory, setWrittenStory] = useState('');

    const { userDetails, setMsg, connected, responsive } = useContext(Context);
    const [orient, setOrient] = useState(screen.orientation.type == 'landscape-primary' ? 'landscape' : 'portrait');
    const navigate = useNavigate();
    const [wordCount, setWordCount] = useState(0);
    const [typingDisabled, setTypingDisabled] = useState(true);
    const [wrong, setWrong] = useState(false);
    const [second, setSecond] = useState(storyDetails.time * 60);
    const textAreaRef = useRef();
    const resultRef = useRef({
        id: id,
        words: 0,
        duration: 0,
        char_with_spaces: 0,
        keystrokes: 0,
        story_id: -1,
        mistakes: {},
    });
    const setOreintation = () => {
        setOrient(screen.orientation.type == 'landscape-primary' ? 'landscape' : 'portrait');
    };
    useEffect(() => {
        setLoading(true);
        const url = '/play/' + id;
        api.get(url)
            .then(({ data }) => {
                setStoryDetails({
                    language: data.stories.language,
                    time: data.duration,
                    skipIntro: data.skipIntro,
                    story: data.stories.content.split(/(\s+)/),
                    backspace: data.backspace,
                    highlight: data.highlight,
                });
                setWordCount(data.words);
                setSecond((data.duration - data.done_duration) * 60);
                data.words > 0 && setWrittenStory(data.written_text);
                resultRef.current.mistakes = data.mistakes == null ? {} : data.mistakes;
                resultRef.current.story_id = data.stories.id;
                resultRef.current.duration = data.duration;
                setLoading(false);
                data.skipIntro && setTypingDisabled(false);
            })
            .catch(({ response }) => {
                setMsg({
                    isOpen: true,
                    status: response.data.state,
                    message: response.data.message,
                });
                navigate('/playground', { replace: true });
            });
        screen.orientation.addEventListener('change', setOreintation);
        return () => {
            screen.orientation.removeEventListener('change', setOreintation);
        };
    }, []); //we can add multiple useEffects
    useEffect(() => {
        focusTextArea();
    }, [typingDisabled]);
    const focusTextArea = () => {
        if (textAreaRef.current) {
            textAreaRef.current.focus();
            const length = textAreaRef.current.value.length;
            textAreaRef.current.setSelectionRange(length, length);
            // textAreaRef.current.scrollIntoView({ behavior: 'smooth'});
        }
    };
    const keyPrevention = (e) => {
        let target = e.target;
        if (target && target.value !== undefined) {
            const text = target.value;
            (e.key === 'Enter' || (e.ctrlKey && e.key === 'v')) && e.preventDefault();
            e.key === 'Backspace' && (text[text.length - 1] === ' ' || !storyDetails.backspace) && e.preventDefault();
        }
    };
    const altCode = {
        '☺': 'ँ', //२३०५
        '↓': 'ङ', //२३२९
        '▲': 'ञ', //२३३४
        P: 'ॐ', //२३८४
        '\\': 'ड़', //२३९६
        '^': 'फ़', //२३९८
        e: '॥', //२४०५
        f: '०', //२४०६
        p: '॰', //२४१६
        ô: '“', //147
        ö: '”', //148
    };
    let isSpecialChar = false;
    const removeSpecialChar = (e) => {
        if (isSpecialChar && getFont() == 'Mangal') {
            let content = e.target.value;
            let newContent = content.slice(0, -1);
            e.target.value = newContent;
            isSpecialChar = false;
        }
    };
    const typing = (e) => {
        pauseTimer && setPauseTimer(false);
        wrong && setWrong(false);
        resultRef.current.keystrokes += 1;
        if (e.code == 'Space') {
            let wt = e.target.value;
            let writtenText = wt.split(/(\s+)/);
            e.target.setSelectionRange(wt.length, wt.length);
            // let currentWord = writtenText.slice(writtenStory.current.length,writtenText.length-1)//here we dont use length-1 we have to find previous space index then till that index we have to use it
            if (writtenText.length != resultRef.current.words * 2 + 1) {
                setWordCount((resultRef.current.words = wordCount + 1));
                let shownWord = storyDetails.story[wordCount * 2].replace(/‍/g, ''); //this solution reduces the time to compare
                let currentWord = writtenText[wordCount * 2].replace(/‍/g, ''); //replaced zwj with ""
                console.log(
                    currentWord,
                    shownWord,
                    currentWord.split(''),
                    shownWord.split(''),
                    currentWord === shownWord,
                );
                if (currentWord !== shownWord) {
                    resultRef.current.mistakes[`${shownWord}`] = `${currentWord}`;
                    setWrong(true);
                }
            }
        } else if (altCode[e.key] && getFont() == 'Mangal') {
            e.preventDefault();
            let code = altCode[e.key];
            let content = e.target.value;
            e.target.value = content + code;
            isSpecialChar = true;
        }

        if (/^[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]+$/.test(e.key)) {
            resultRef.current.char_with_spaces += 1;
        }
    };
    const checkpoint = (time) => {
        console.log('checkpoint on ' + time);
        const url = '/checkpoint-test/' + id;
        api.post(url, {
            done_duration: time,
            words: resultRef.current.words,
            keystrokes: resultRef.current.keystrokes,
            mistakes: resultRef.current.mistakes,
            written_text: writtenStory,
        })
            .then(({ data }) => {
                setMsg({
                    isOpen: true,
                    status: data.state,
                    message: data.message,
                });
            })
            .catch(({ response }) => {
                console.log(response);
            });
    };
    const timeOut = () => {
        setLoading(true);
        setTypingDisabled(true);
        if (resultRef.current.words > 0) {
            if (connected)
                api.post('/store-test', resultRef.current)
                    .then(({ data }) => {
                        setMsg({
                            isOpen: true,
                            status: data.state,
                            message: data.message,
                        });
                        navigate('/results', { replace: true });
                    })
                    .catch(({ response }) => {
                        console.log(response);
                    });
            else {
                setLoading(false);
                setRetry(true);
            }
        } else {
            setMsg({
                isOpen: true,
                status: 'Error',
                message: 'Test Failed due to inactivity',
            });
            navigate('/results', { replace: true });
        }
    };
    const getFont = () => {
        let lang = storyDetails.language;
        if (lang.toLowerCase() == 'english') return 'arial';
        else return lang;
    };
    if (loading) {
        return <Loading />;
    } else if (retry) {
        return <Retry retry={timeOut} />;
    } else if (orient == 'portrait') {
        return (
            <div className="loadingContainer">
                <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/fluency/48/lock-landscape.png"
                    alt="lock-landscape"
                />
                <p className="highlight">Please rotate your phone.</p>
            </div>
        );
    }

    return (
        <div className="playContainer">
            {!storyDetails.skipIntro && (
                <LanguageConfirmation
                    setTypingDisabled={setTypingDisabled}
                    setSkipIntro={(value) => {
                        setStoryDetails((prevDetails) => ({
                            ...prevDetails,
                            skipIntro: value,
                        }));
                    }}
                    language={storyDetails.language}
                />
            )}
            <div className="contentContainer test">
                <div className="textContainer" id="readable">
                    {!storyDetails.highlight ? (
                        <p>{story}</p>
                    ) : (
                        <TextContent
                            language={getFont()}
                            story={storyDetails.story}
                            highlightingIndex={wordCount * 2}
                        />
                    )}
                </div>
                <hr
                    className="divider"
                    style={{ borderColor: wrong ? 'tomato' : 'var(--theme-color)', width: '95%' }}
                />
                <div className="textContainer" id="writable">
                    <textarea
                        value={writtenStory}
                        style={{ fontFamily: getFont() }}
                        placeholder={getFont() == 'Krutidev' ? 'Vkbi djsa---' : 'start typing...'}
                        onKeyDown={(e) => keyPrevention(e)}
                        onKeyUp={(e) => typing(e)}
                        onInput={(e) => removeSpecialChar(e)}
                        disabled={typingDisabled}
                        onContextMenu={(e) => e.preventDefault()}
                        onChange={(e) => {
                            setWrittenStory(e.target.value);
                        }}
                        ref={textAreaRef}
                    />
                </div>
            </div>
            <div className="contentContainer info">
                <div style={{ position: 'absolute', top: '0em', display: 'flex', alignItems: 'center' }}>
                    <ToggleDarkLight />
                    <FullScreenBtn />
                </div>
                {!responsive && <img width="100em" src={logo} alt="Logo" />}
                <h2 id="userName">{userDetails.user.name.split(' ')[0].toUpperCase()}</h2>
                <Timer
                    time={storyDetails.time}
                    second={second}
                    setSecond={setSecond}
                    pause={pauseTimer}
                    timeOut={timeOut}
                    checkpoint={checkpoint}
                />
                <WordCount value={wordCount} />
                <Button value={'Restart'} style={{ width: '80%' }} onClick={() => window.location.reload()} />
                <Button
                    value={!pauseTimer ? 'Pause' : 'Resume'}
                    transparancy={true}
                    onClick={() => {
                        setPauseTimer(!pauseTimer);
                        setTypingDisabled(pauseTimer);
                        textAreaRef.current.focus();
                    }}
                />
            </div>
        </div>
    );
};

export default Play;
