import { h } from 'preact';
import { Modal } from './Modal';
import { validateEmail } from './utils';
import { Input } from './components/Input';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Button } from './components/Button/Button';
import { CalendarBtn } from './components/Button/CalendarBtn';
import emailjs from 'emailjs-com';
import logoIcon from '../assets/images/svg/logo.svg';
import arrowLeftIcon from '../assets/images/svg/arrow-left.svg';
import cancelIcon from '../assets/images/svg/cancel.svg';

const buttons = {
    sms: {
        id: 'sms',
        title: 'SMS',
        type: 'phone',
        text: 'смс',
    },
    tel: {
        id: 'tel',
        title: 'Telegram',
        type: 'phone',
        text: 'телеграм',
    },
    viber: {
        id: 'viber',
        title: 'Viber',
        type: 'phone',
        text: 'вайбер',
    },
    wa: {
        id: 'wa',
        title: 'WhatsApp',
        type: 'phone',
        text: 'ватсапп',
    },
    mail: {
        id: 'mail',
        title: 'Почта',
        type: 'email',
    },
};

const Success = () => {
    return (
        <div style={{ paddingTop: '70px' }}>
            <h1 className="title text-left lg:text-center mb-5">Отлично!</h1>
            <p className="text-f2 lg:text-f3 mb-c13 text-left lg:text-center">
                Встретимся 10.07.2020 в <br /> 20:00 на вебинаре!
            </p>
            <div className="flex justify-center items-center mb-c11">
                <div className="mr-2 lg:mr-10 text-f2 lg:text-f3">
                    Записать дату <br /> в календарь
                </div>
                <CalendarBtn />
            </div>
        </div>
    );
};

export const SignUp = () => {
    const [activeBtn, setActiveBtn] = useState();
    const [data, setData] = useState({});
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);
    const [step, setStep] = useState(0);
    const stepTracker = useRef({
        userName: false,
        contactWay: false,
        contactInfo: false,
    });

    useEffect(() => {
        let tt;
        if (data.userName && !stepTracker.current.userName) {
            tt = setTimeout(() => {
                stepTracker.current.userName = true;
                setStep(step + 1);
            }, 1000);
        } else if (!data.userName && stepTracker.current.userName) {
            stepTracker.current.userName = false;
            setStep(step - 1);
        }

        if (activeBtn && !stepTracker.current.contactWay) {
            stepTracker.current.contactWay = true;
            setStep(step + 1);
        } else if (!activeBtn && stepTracker.current.contactWay) {
            stepTracker.current.contactWay = false;
            setStep(step - 1);
        }

        if (
            activeBtn &&
            stepTracker.current.contactWay &&
            (data.number || data.mail) &&
            !stepTracker.current.contactInfo
        ) {
            stepTracker.current.contactInfo = true;
            setStep(step + 1);
        } else if (
            activeBtn &&
            stepTracker.current.contactWay &&
            !(data.number || data.mail) &&
            stepTracker.current.contactInfo
        ) {
            stepTracker.current.contactInfo = false;
            setStep(step - 1);
        }

        return () => {
            clearTimeout(tt);
        };
    }, [data, activeBtn]);

    const handleContactBtnClick = (btn) => () => {
        setActiveBtn(btn);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setError(null);
        setData((d) => ({ ...d, [name]: value }));
    };

    const validate = (e) => {
        e.preventDefault();

        if (!data.userName) {
            setError((er) => ({
                ...er,
                userName: 'Введи своё имя пожалуйста :)',
            }));
            return;
        }

        if (activeBtn.type === 'email') {
            const isValid = validateEmail(data[activeBtn.id]);
            if (!isValid) {
                setError((er) => ({
                    ...er,
                    mail: 'Указан не правильный адрес :(',
                }));
                return;
            }
        }

        if (activeBtn.type === 'phone' && !data.number) {
            setError((er) => ({
                ...er,
                number: 'Необходимо ввести номер телефона',
            }));
            return;
        }

        const entries = new FormData(e.target).entries();
        const { mail } = Object.fromEntries(entries);

        emailjs
            .sendForm(
                'gmail',
                mail ? 'mail' : 'number',
                e.target,
                'user_gZNRjXBKTSyq5iyj8qPZZ'
            )
            .then(
                () => {
                    setSuccess(true);
                    setStep(step + 1);
                },
                (error) => {
                    console.log('Что-то не так :(');
                }
            );
    };

    const renderChoice = () => {
        const isMail = activeBtn.id === 'mail';

        return (
            <div>
                <div className="hidden lg:block mb-5">
                    <Button title={activeBtn.title} type="primary" big={true} />
                </div>
                <div className="lg:hidden mb-4">
                    <Button reducable title={activeBtn.title} type="primary" />
                </div>
                {!isMail && (
                    <input
                        className="hidden"
                        name="source"
                        value={buttons[activeBtn.id].text}
                        type="text"
                    />
                )}
                <Input
                    type={activeBtn.type}
                    onChange={handleInputChange}
                    name={isMail ? 'mail' : 'number'}
                    error={error}
                />
            </div>
        );
    };

    const goBack = () => {
        setData((d) => {
            const copy = { ...d };
            delete copy['number'];
            delete copy['mail'];
            return copy;
        });
        setActiveBtn(null);
    };

    return (
        <Modal>
            {(closeModal) => (
                <form onSubmit={validate}>
                    <div className="lg:hidden mb-6">
                        <div className="px-6 lg:px-8 xl:px-0 py-2 lg:py-6">
                            <div className="em-brand">
                                <img src={logoIcon} />
                            </div>
                        </div>
                        <div className="relative items-center">
                            <div
                                className="absolute top-0 left-0 z-50"
                                style={{
                                    height: '4px',
                                    width: `${((step + 1) * 100) / 4}%`,
                                    transition: 'all 0.4s',
                                    background: '#0011A8',
                                }}
                            ></div>
                            <div
                                style={{
                                    height: '4px',
                                }}
                                className="absolute top-0 left-0 w-full z-40 rounded-lg bg-blue-light"
                            ></div>
                        </div>
                    </div>
                    <div className="px-c5 lg:px-0">
                        <div className="flex justify-between lg:px-6 pt-6">
                            <div
                                style={{
                                    minWidth: '28px',
                                    display: 'flex',
                                }}
                            >
                                {activeBtn && !success && (
                                    <button
                                        className="mr-auto h-5 w-5 lg:h-8 lg:w-8"
                                        onClick={goBack}
                                    >
                                        <img src={arrowLeftIcon} />
                                    </button>
                                )}
                            </div>
                            <div className="hidden lg:flex relative items-center rounded-lg px-10 flex-1">
                                <div
                                    className="relative z-50 rounded-lg"
                                    style={{
                                        height: '4px',
                                        width: `${((step + 1) * 100) / 5}%`,
                                        transition: 'all 0.4s',
                                        background: '#0011A8',
                                    }}
                                ></div>
                                <div
                                    style={{
                                        height: '4px',
                                        width: 'calc(100% - 80px)',
                                    }}
                                    className="absolute rounded-lg bg-blue-light"
                                ></div>
                            </div>
                            <button
                                className="ml-auto h-5 w-5 lg:h-8 lg:w-8"
                                onClick={closeModal}
                            >
                                <img src={cancelIcon} />
                            </button>
                        </div>
                        <Modal.Body>
                            {!success ? (
                                <div className="pt-12 pb-c12">
                                    <div className="mb-6 lg:mb-c5">
                                        <Input
                                            type="text"
                                            onChange={handleInputChange}
                                            name="userName"
                                            label="Я Катя, а как зовут тебя?"
                                            error={error}
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-c2 text-sm lg:text-f2">
                                            Как тебе напомнить о вебинаре?
                                        </label>
                                    </div>
                                    <div className="mb-10">
                                        {!activeBtn ? (
                                            <div>
                                                <div className="mb-4 lg:mb-5">
                                                    <span className="mr-2 md:mr-12 lg:mr-c5">
                                                        <Button
                                                            type="ghost"
                                                            reducable
                                                            big={true}
                                                            title={
                                                                buttons.sms
                                                                    .title
                                                            }
                                                            disabled={
                                                                !data.userName
                                                            }
                                                            onClick={handleContactBtnClick(
                                                                buttons.sms
                                                            )}
                                                        />
                                                    </span>
                                                    <span className="mr-2 md:mr-12 lg:mr-c5">
                                                        <Button
                                                            type="ghost"
                                                            reducable
                                                            big={true}
                                                            title={
                                                                buttons.tel
                                                                    .title
                                                            }
                                                            disabled={
                                                                !data.userName
                                                            }
                                                            onClick={handleContactBtnClick(
                                                                buttons.tel
                                                            )}
                                                        />
                                                    </span>
                                                    <Button
                                                        type="ghost"
                                                        reducable
                                                        big={true}
                                                        title={
                                                            buttons.viber.title
                                                        }
                                                        disabled={
                                                            !data.userName
                                                        }
                                                        onClick={handleContactBtnClick(
                                                            buttons.viber
                                                        )}
                                                    />
                                                </div>
                                                <div>
                                                    <span className="mr-2 md:mr-12 lg:mr-c5">
                                                        <Button
                                                            type="ghost"
                                                            reducable
                                                            big={true}
                                                            title={
                                                                buttons.wa.title
                                                            }
                                                            disabled={
                                                                !data.userName
                                                            }
                                                            onClick={handleContactBtnClick(
                                                                buttons.wa
                                                            )}
                                                        />
                                                    </span>
                                                    <Button
                                                        type="ghost"
                                                        reducable
                                                        big={true}
                                                        title={
                                                            buttons.mail.title
                                                        }
                                                        disabled={
                                                            !data.userName
                                                        }
                                                        onClick={handleContactBtnClick(
                                                            buttons.mail
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            renderChoice(buttons)
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <Button
                                            disabled={
                                                !data.number && !data.mail
                                            }
                                            type="danger"
                                            shape="rounded"
                                            title="Записаться"
                                            htmlFor="submit"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <Success />
                            )}
                        </Modal.Body>
                    </div>
                </form>
            )}
        </Modal>
    );
};
