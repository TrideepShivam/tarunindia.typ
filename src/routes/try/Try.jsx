import { useContext, useEffect, useRef, useState } from 'react';
import FullScreenBtn, { exitFullscreen } from '../../components/fullScreenBtn/FullScreenBtn';
import logo from '../../assets/logo-reverse.svg';
import Button from '../../components/button/Button';
import TextContent from '../../components/textContent/TextContent';
import Timer from '../../components/timer/Timer';
import ToggleDarkLight from '../../components/toggleDarkLight/ToggleDarkLight';
import WordCount from '../../components/wordCount/WordCount';
import { Context } from '../../ContextAPI';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import Textbox from '../../components/textbox/Textbox';
import Percentage from '../../components/resultDetail/percentage/Percentage';
import Card from '../../components/card/Card';
import CardContainer from '../../components/cardContainer/CardContainer';
import './Try.css';
import Share from '../../components/share/Share';

const stories = {
    English: `A long time ago, during a devastating spell of dry weather, there was a thirsty crow who was desperate for a drink of water. The poor crow flew and flew in search of a means to quench his thirst. From one place to another place he went, until, at long last, when he could fly no further, he came upon a large pitcher of water at the base of a tree. Overjoyed, the thirsty crow thrust its jet-black beak inside to drink his fill. But, alas! the pitcher had a narrow neck. Try as he might, the despairing crow couldn't get his head far enough inside. To his dismay, he realized the water was out of reach. The thirsty crow cried out and flapped his wings in anguish. He attempted to knock the pitcher over. But to no avail. It was too heavy for his weary, dehydrated body to budge. The crow was on the verge of exhaustion and ready to fly elsewhere. But then an idea came to him. Around the base of the pitcher he seen some small round pebbles. Picking them up, one by one, the thirsty crow dropped them into the pitcher. Again and again he placed these stones inside. And with every extra pebble, the water level began to rise. His idea worked. Eventually, after much toil, the water rose so high inside the pitcher that the clever crow was able to drink his fill and state his thirst for good. Then he flew away for his work.`,
    Krutidev: `vkt gekjs ns'k esa lekt dh feykoV lc ls cM+h 'k=q gSA feykoV rFkk feykoV [kksj dk pksyh&nkeu dk lkFk gSA lekt esa euq\"; feykoV[kksj gksus dh rjQ D;ksa c<+rk gS og ,slk D;ksa lksprk gS] fd feykoV djuh pkfg;sA euq\"; vkfn dky ls gh ykyp dk f'kdkj gSA fdUrq vk\/kqfud le; esa ykyp bruk c<+ x;k gS fd mlds fdlh xyr dk;Z ls vxj fdlh dh tku Hkh pyh tk, rks mldks bldh fpUrk ugha] cfYd mldh tsc Hkjuh pkfg,A vkt [kkus&ihus dh gj oLrq esa feykoV ik;h tkrh gSA nw\/k esa feykoV] ?kh esa feykoV] elkyksa esa feykoV bR;kfnA feykoV [kksj udyh nokb;k\u00a1 cukus rFkk mlesa feykoV djus esa Hkh ugha pwdrs] tcfd mudks irk gS fd muds bl dk;Z ls yksxksa dh tku dks [krjk gks tkrk gSA feykoV djuk ,d vijk\/k gS bls jksduk ljdkj dk drZO; gsA ijUrq bls jksdus ds fy, tks deZpkjh j[ks gq, gSa] og Hkh feykoV [kksj dk lkFk nsrs gSA mudh vPNh [kklh jde olwyrs gSaA gj 'kgj esa LokLF; vf\/kdkjh gksrs gSa] ijUrq og yksx gj ,d ls eghuk Hkj iSlk olwyrs gSaA tc ckM+ gh [ksrksa dks [kk;s rks [ksrh dh j[kokyh dkSu djsA vHkh dqN fnu igys lu~ 1998 esa gh] tc fnYyh esa Hkkjrh; turk ikVhZ dk 'kklu Fkk rks ljlksa ds rsy esa bruh feykoV gqbZ] fd dkQh yksx bldk f'kdkj gks x,A fnYyh ds vLirku ejhtksa ls Hkj x;s] lSdMksa dh tkus pyh xbZA ml le; rsy 80 #i;s fdyks rd fcd x;kA rsy ds cukus okyksa us ml rsy dks QSad fn;kA dqN fnuksa ds okLrs mudk rsy fcduk can gks x;kA ljdkj dks iSlk pkfg, FkkA`,
};
const Try = () => {
    const [orient, setOrient] = useState(screen.orientation.type == 'landscape-primary' ? 'landscape' : 'portrait');
    const [pauseTimer, setPauseTimer] = useState(true);
    const [storyDetails, setStoryDetails] = useState({
        time: 0,
        backspace: true,
        highlight: true,
        story: ['Text'],
    });
    const [language, setLanguage] = useState({
        language: 'English',
        font: 'tahoma',
    });
    const [switchPage, setSwitchPage] = useState(true);
    const [writtenStory, setWrittenStory] = useState('');
    const { responsive } = useContext(Context);
    const [wordCount, setWordCount] = useState(0);
    const [typingDisabled, setTypingDisabled] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [second, setSecond] = useState(60);
    const [name, setName] = useState('Typathon');
    const textAreaRef = useRef();
    const resultRef = useRef({
        words: 0,
        duration: 0,
        char_with_spaces: 0,
        keystrokes: 0,
        mistakes: {},
    });
    const setOreintation = () => {
        setOrient(screen.orientation.type == 'landscape-primary' ? 'landscape' : 'portrait');
    };
    const testSetter = () => {
        setStoryDetails({
            time: 1,
            backspace: true,
            highlight: true,
            story: stories[language.language].split(/(\s+)/),
        });
        resultRef.current.duration = 1;
        screen.orientation.addEventListener('change', setOreintation);
        return () => {
            screen.orientation.removeEventListener('change', setOreintation);
        };
    }; //we can add multiple useEffects
    useEffect(() => {
        testSetter();
        focusTextArea();
    }, [typingDisabled, switchPage]);
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
        }
        if (/^[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]+$/.test(e.key)) {
            resultRef.current.char_with_spaces += 1;
        }
    };
    const timeOut = () => {
        exitFullscreen();
        setTypingDisabled(true);
        setSwitchPage(true);
    };
    const getFont = () => {
        return language.font;
    };

    if (switchPage && second == 60) {
        return (
            <div className="tryFrontContainer">
                <img width={'200em'} src={logo} alt="" />
                <div className="tryFormContainer">
                    <h1>
                        Welcome to <span className="highlight">Typathon</span>
                    </h1>
                    <p>
                        Take <span className="highlight">1 min</span> typing test for English and Krutidev
                    </p>
                    <Textbox
                        autofocus={true}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        legend="Enter Your Name"
                    />
                    <p className="sectionHead">Choose Language</p>
                    <div style={{ display: 'flex', gap: '1em', alignItems: 'center', paddingTop: '.5em' }}>
                        <Hyperlink
                            type={language.language == 'English' ? 'themed' : 'bordered-theme'}
                            value="English"
                            href="#"
                            onClick={() => {
                                setLanguage({
                                    language: 'English',
                                    font: 'tahoma',
                                });
                            }}
                        />
                        <Hyperlink
                            type={language.language == 'Krutidev' ? 'themed' : 'bordered-theme'}
                            value="Krutidev"
                            href="#"
                            onClick={() => {
                                setLanguage({
                                    language: 'Krutidev',
                                    font: 'Krutidev',
                                });
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: '1em', alignItems: 'center', paddingTop: '.5em' }}>
                        <Button style={{ width: '40%' }} value="Start" onClick={() => setSwitchPage(false)} />
                        <Hyperlink value="Go to Home" href="/" onClick={() => {}} />
                    </div>
                    <p>
                        <span className="highlight">Mangal font</span> is available after{' '}
                        <Hyperlink href="/login" value="Login" />
                    </p>
                </div>
            </div>
        );
    } else if (switchPage && second == 0) {
        return (
            <div className="tryResultContainer">
                <div className="tryResult">
                    <Share shareTitle="Share result" />
                    <Percentage
                        value={
                            resultRef.current.words != 0
                                ? ((resultRef.current.words - Object.keys(resultRef.current.mistakes).length) /
                                      resultRef.current.words) *
                                  100
                                : 0
                        }
                        text="Accuracy"
                        label="%"
                    />
                    <div className="tryErrorContainer">
                        <h2>
                            Well done, <span className="highlight">{name.split(' ')[0].toUpperCase()}</span>
                        </h2>
                        <p className="sectionHead">Total Errors</p>
                        <h1>{Object.keys(resultRef.current.mistakes).length}</h1>
                        <p className="sectionHead">Errors</p>
                        {Object.keys(resultRef.current.mistakes).length !== 0 ? (
                            Object.entries(resultRef.current.mistakes).map(([key, value]) => (
                                <div key={key}>
                                    <p>
                                        [<span style={{ fontFamily: getFont() }}>{key}</span>] [
                                        <span style={{ color: 'tomato', fontFamily: getFont() }}>{value}</span>]
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p>No Mistakes found</p>
                        )}
                    </div>
                    <CardContainer>
                        <Card
                            val={{
                                value: language.language,
                                unit: '',
                                cardHead: 'Language',
                                more: false,
                            }}
                        />
                        <Card
                            val={{
                                value: resultRef.current.words - Object.keys(resultRef.current.mistakes).length,
                                unit: 'WPM',
                                cardHead: 'Words per min',
                                more: false,
                            }}
                        />
                        <Card
                            val={{
                                value: resultRef.current.keystrokes,
                                unit: 'KPM',
                                cardHead: 'Keystrokes per min',
                                more: false,
                            }}
                        />
                        <Card
                            val={{
                                value: resultRef.current.words,
                                unit: '',
                                cardHead: 'Total words',
                                more: false,
                            }}
                        />
                    </CardContainer>
                    <div>
                        <p>
                            <Hyperlink href={'/login'} value="Login" /> to access more features
                        </p>
                        <p>Mangal Font is also available.</p>
                        <Hyperlink href={'/'} value="typathon.com" />
                    </div>
                </div>
                <div className="tryResultButtonContainer">
                    <Hyperlink href={'/'} type="themed" value="Know more" />
                    <Hyperlink
                        href={'#'}
                        type="bordered-theme"
                        value="Try again"
                        onClick={() => {
                            window.location.reload();
                        }}
                    />
                </div>
            </div>
        );
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
            <div className="contentContainer test">
                <div className="textContainer" id="readable">
                    {!storyDetails.highlight ? (
                        <p>{storyDetails.story}</p>
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
                        disabled={typingDisabled}
                        onContextMenu={(e) => e.preventDefault()}
                        onChange={(e) => {
                            setWrittenStory(e.target.value);
                        }}
                        ref={textAreaRef}
                        spellCheck={false}
                    />
                </div>
            </div>
            <div className="contentContainer info">
                <div style={{ position: 'absolute', top: '0em', display: 'flex', alignItems: 'center' }}>
                    <ToggleDarkLight />
                    <FullScreenBtn />
                </div>
                {!responsive && <img width="100em" src={logo} alt="Logo" />}
                <h2 id="userName">{name}</h2>
                <Timer
                    time={storyDetails.time}
                    second={second}
                    setSecond={setSecond}
                    pause={pauseTimer}
                    timeOut={timeOut}
                    checkpoint={() => console.log('Test Done')}
                />
                <WordCount value={wordCount} />
                <Hyperlink value="Go to Home" type="themed" href="/" onClick={() => {}} />
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

export default Try;
