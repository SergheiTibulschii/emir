import { h } from 'preact';
import { Modal } from './Modal';
import { unmount, validateEmail } from './utils';
import { Input } from './components/Input';
import { useState } from 'preact/hooks';
import { Button } from './components/Button/Button';

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
    const goToGCalendar = () => {};

    return (
        <div style={{ paddingTop: '70px' }}>
            <h1 className="title text-center mb-5">Отлично!</h1>
            <p className="text-f3 mb-c13 text-center">
                Встретимся 10.07.2020 в <br /> 20:00 на вебинаре!
            </p>
            <div className="flex justify-center items-center mb-c11">
                <div className="mr-10 text-f3">
                    Записать дату <br /> в календарь
                </div>
                <div class="calendar-btn-container relative flex items-center justify-center self-start mr-2 lg:mr-4">
                    <a
                        href="https://calendar.google.com/"
                        target="_blank"
                        class="em-calendar-btn relative z-40"
                        onClick={goToGCalendar}
                    >
                        <img
                            class="absolute z-0 hover:z-50"
                            src="./assets/images/svg/calendar-white.svg"
                            alt=""
                            style="height: 34px;"
                        />
                    </a>
                    <img
                        class="absolute z-50 hover:z-0"
                        src="./assets/images/svg/calendar.svg"
                        alt=""
                    />
                    <div class="absolute pointer-events-none">
                        <img
                            src="./assets/images/svg/circle-frame.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SignUp = () => {
    const [activeBtn, setActiveBtn] = useState();
    const [data, setData] = useState({});
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);

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
        console.log(data);
    };

    const renderChoice = () => {
        return (
            <div>
                <div className="mb-5">
                    <Button title={activeBtn.title} type="primary" big={true} />
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
            <div className="flex justify-between">
                <div
                    style={{
                        minWidth: '28px',
                        display: 'flex',
                    }}
                >
                    {activeBtn && !success && (
                        <button className="mr-auto" onClick={goBack}>
                            <img src="./assets/images/svg/arrow-left.svg" />
                        </button>
                    )}
                </div>
                <button className="ml-auto" onClick={unmount}>
                    <img src="./assets/images/svg/cancel.svg" />
                </button>
            </div>
            <Modal.Body>
                {!success ? (
                    <div className="pt-12 pb-c12">
                        <div className="mb-c5">
                            <Input
                                type="text"
                                onChange={handleInputChange}
                                name="userName"
                                label="Я Катя, а как зовут тебя?"
                                error={error}
                            />
                        </div>
                        <div>
                            <label className="block mb-c2 text-f2">
                                Как тебе напомнить о вебинаре?
                            </label>
                        </div>
                        <div className="mb-10">
                            {!activeBtn ? (
                                <div>
                                    <div className="flex justify-between mb-5">
                                        <Button
                                            type="ghost"
                                            big={true}
                                            title={buttons.sms.title}
                                            disabled={!data.userName}
                                            onClick={handleContactBtnClick(
                                                buttons.sms
                                            )}
                                        />
                                        <Button
                                            type="ghost"
                                            big={true}
                                            title={buttons.tel.title}
                                            disabled={!data.userName}
                                            onClick={handleContactBtnClick(
                                                buttons.tel
                                            )}
                                        />
                                        <Button
                                            type="ghost"
                                            big={true}
                                            title={buttons.viber.title}
                                            disabled={!data.userName}
                                            onClick={handleContactBtnClick(
                                                buttons.viber
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <span className="mr-6">
                                            <Button
                                                type="ghost"
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
                                disabled={!activeBtn}
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
        </Modal>
    );
};
