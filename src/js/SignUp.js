import { h } from 'preact';
import { Modal } from './Modal';
import { unmount, validateEmail } from './utils';
import { Input } from './components/Input';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Button } from './components/Button/Button';
import { CalendarBtn } from './components/Button/CalendarBtn';
import { templates } from './templates';

const buttons = {
    sms: {
        id: 'sms',
        title: 'Sms',
        type: 'phone',
    },
    tel: {
        id: 'tel',
        title: 'Telegram',
        type: 'phone',
    },
    viber: {
        id: 'viber',
        title: 'Viber',
        type: 'phone',
    },
    wa: {
        id: 'wa',
        title: 'WhatsApp',
        type: 'phone',
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
            data[activeBtn.id] &&
            !stepTracker.current.contactInfo
        ) {
            stepTracker.current.contactInfo = true;
            setStep(step + 1);
        } else if (
            activeBtn &&
            stepTracker.current.contactWay &&
            !data[activeBtn.id] &&
            stepTracker.current.contactInfo
        ) {
            stepTracker.current.contactInfo = false;
            setStep(step - 1);
        }

        return () => {
            clearTimeout(tt);
        };
    }, [data, activeBtn]);

    useEffect(() => {
        if (success) {
            const message = templates[activeBtn.id](
                data.userName,
                data[activeBtn.id]
            );

            var params = {
                to_name: 'Ekaterina',
                from_name: data.useName,
                message_html: message,
            };
            emailjs.send('mailgun', 'template_f02aXQ9s', params).then(
                function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                },
                function (error) {
                    console.log('FAILED...', error);
                }
            );
        }
    }, [success]);

    const handleContactBtnClick = (btn) => () => {
        setActiveBtn(btn);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setError(null);
        setData((d) => ({ ...d, [name]: value }));
    };

    const validate = () => {
        if (!data.userName) {
            setError((er) => ({
                ...er,
                userName: 'Введи своё имя пожалуйста',
            }));
            return;
        }

        if (activeBtn.type === 'email') {
            const isValid = validateEmail(data[activeBtn.id]);
            if (!isValid) {
                setError((er) => ({
                    ...er,
                    [activeBtn.id]: 'Ты ввёл не правильный адрес :(',
                }));
                return;
            }
        }

        if (activeBtn.type === 'phone' && !data[activeBtn.id]) {
            setError((er) => ({
                ...er,
                [activeBtn.id]: 'Необходимо ввести номер телефона',
            }));
            return;
        } else if (
            activeBtn.type === 'phone' &&
            data[activeBtn.id].length !== 16
        ) {
            setError((er) => ({
                ...er,
                [activeBtn.id]: 'Неверный номер телефона :(',
            }));
            return;
        }

        setSuccess(true);
        setStep(step + 1);
    };

    const renderChoice = () => {
        return (
            <div>
                <div className="hidden lg:block mb-5">
                    <Button title={activeBtn.title} type="primary" big={true} />
                </div>
                <div className="lg:hidden mb-4">
                    <Button reducable title={activeBtn.title} type="primary" />
                </div>
                <Input
                    type={activeBtn.type}
                    onChange={handleInputChange}
                    name={activeBtn.id}
                    error={error}
                />
            </div>
        );
    };

    const goBack = () => {
        setData((d) => {
            const copy = { ...d };
            delete copy[activeBtn.id];
            return copy;
        });
        setActiveBtn(null);
    };

    return (
        <Modal>
            <div className="lg:hidden mb-6">
                <div className="px-6 lg:px-8 xl:px-0 py-2 lg:py-6">
                    <div className="em-brand">
                        <img src="./assets/images/svg/logo.svg" />
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
                                <img src="./assets/images/svg/arrow-left.svg" />
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
                        onClick={unmount}
                    >
                        <img src="./assets/images/svg/cancel.svg" />
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
                                                    title={buttons.sms.title}
                                                    disabled={!data.userName}
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
                                                    title={buttons.tel.title}
                                                    disabled={!data.userName}
                                                    onClick={handleContactBtnClick(
                                                        buttons.tel
                                                    )}
                                                />
                                            </span>
                                            <Button
                                                type="ghost"
                                                reducable
                                                big={true}
                                                title={buttons.viber.title}
                                                disabled={!data.userName}
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
                                                    title={buttons.wa.title}
                                                    disabled={!data.userName}
                                                    onClick={handleContactBtnClick(
                                                        buttons.wa
                                                    )}
                                                />
                                            </span>
                                            <Button
                                                type="ghost"
                                                reducable
                                                big={true}
                                                title={buttons.mail.title}
                                                disabled={!data.userName}
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
                                    disabled={!activeBtn || !data[activeBtn.id]}
                                    onClick={validate}
                                    type="danger"
                                    shape="rounded"
                                    title="Записаться"
                                />
                            </div>
                        </div>
                    ) : (
                        <Success />
                    )}
                </Modal.Body>
            </div>
        </Modal>
    );
};
