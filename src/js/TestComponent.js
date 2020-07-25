import { h } from 'preact';
import { useRef, useState, useEffect } from 'preact/hooks';
import cn from 'classnames';
import { unmount, useOutsideClick, mountSignup } from './utils';
import { RadioBox } from './components/RadioBox';
import { Modal } from './Modal';
import { SignupBtn } from './components/Button/SignupBtn';
import { Button } from './components/Button/Button';

const questions = [
    {
        title: 'На английском я предпочитаю...',
        payload: [
            {
                id: 1,
                text: 'смотреть не известные мне сериалы',
            },
            {
                id: 2,
                text: 'пересматривать те, которые уже смотрел(а) на русском',
            },
            {
                id: 3,
                text:
                    'вовсе не смотрю, потому что у меня еще не уровень advanced',
            },
        ],
    },
    {
        title: 'Я смотрю сериалы ...',
        payload: [
            {
                id: 1,
                text: 'с русскими субтитрами',
            },
            {
                id: 2,
                text: 'с английскими субтитрами',
            },
            {
                id: 3,
                text: 'с русскими и английскими субтитрами',
            },
        ],
    },
    {
        title: 'Когда я вижу незнакомое слово, я...',
        payload: [
            {
                id: 1,
                text: 'ставлю на паузу, чтобы перевести слово',
            },
            {
                id: 2,
                text: 'продолжаю смотреть, потому что и так понятен контекст',
            },
            {
                id: 3,
                text: 'делаю вид, что его не заметил(а)',
            },
        ],
    },
    {
        title: 'Когда я не совсем понимаю, о чем речь, я...',
        payload: [
            {
                id: 1,
                text:
                    'включаю русскую дорожку, чтобы не пропустить самое важное',
            },
            {
                id: 2,
                text:
                    'перематываю немного назад, чтобы разобраться, что было сказано',
            },
            {
                id: 3,
                text: 'продолжаю смотреть дальше, надеясь, что потом разберусь',
            },
        ],
    },
];

const Step = ({ handleAnswer, stepName, data, answer }) => (
    <div className="mb-6">
        <h2 className="text-f2 lg:text-f3 mb-8">{data.title}</h2>
        {data.payload.map((d) => (
            <div
                className="mb-4 last:mb-0 h-10 flex items-center"
                key={`${stepName}-${d.id}`}
            >
                <RadioBox
                    onChange={handleAnswer}
                    name={stepName}
                    value={d.id}
                    checked={answer && Number(answer.answer) === d.id}
                    label={d.text}
                />
            </div>
        ))}
    </div>
);

const Success = () => (
    <div className="mb-5 lg:mb-c5">
        <h2 className="title mb-6 lg:mb-8">Отлично!</h2>
        <p className="text-f2 lg:text-f3 mb-4">
            У тебя уже довольно большой опыт просмотра сериалов на английском!
            Ты уже интуитивно или сознательно подошел к некоторым вещам
            правильно.
        </p>
        <p className="text-sm lg:text-f2">
            Чтобы закрепить, и узнать пару-тройку новых техник, предлагаю тебе
            присоединиться к нашему бесплатному вебинару!
        </p>
    </div>
);

const Fail = () => <div>Fail!</div>;

const TestComponent = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [success, setSuccess] = useState(false);
    const [isLastStep, setLastStep] = useState(false);

    const handleAnswer = (value) => {
        const answer = {
            step: currentStep,
            answer: Number(value),
        };

        setAnswers((prevAnswers) => {
            if (prevAnswers[currentStep]) {
                return prevAnswers.map((v) =>
                    v.step === currentStep ? answer : v
                );
            } else {
                return [...prevAnswers, answer];
            }
        });
    };

    const handleNext = () => {
        const step = currentStep + 1;
        setCurrentStep(step);
        if (step === questions.length) {
            setSuccess(true);
            setLastStep(true);
        }
    };

    const goBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
        if (isLastStep) {
            setLastStep(false);
        }
    };

    const reset = () => {
        setCurrentStep(0);
        setSuccess(false);
        setLastStep(false);
        setAnswers([]);
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
                        className="absolute left-0 top-0 z-50"
                        style={{
                            height: '4px',
                            width: `${
                                ((currentStep + 1) * 100) /
                                (questions.length + 1)
                            }%`,
                            transition: 'all 0.4s',
                            background: '#0011A8',
                        }}
                    ></div>
                    <div
                        style={{
                            height: '4px',
                        }}
                        className="absolute left-0 top-0 w-full z-40 bg-blue-light"
                    ></div>
                </div>
            </div>
            <div className="px-c5 lg:py-6">
                <Modal.Head>
                    <div
                        style={{
                            minWidth: '28px',
                            display: 'flex',
                        }}
                    >
                        {Number(currentStep) !== 0 && !success && (
                            <button
                                className="mr-auto h-5 w-5 lg:h-8 lg:w-8"
                                onClick={goBack}
                            >
                                <img src="./assets/images/svg/arrow-left.svg" />
                            </button>
                        )}
                    </div>
                    <div className="hidden lg:block relative items-center rounded-lg px-10 flex-1">
                        <div
                            className="relative top-0 left-0 z-50 rounded-lg"
                            style={{
                                height: '4px',
                                width: `${
                                    ((currentStep + 1) * 100) /
                                    (questions.length + 1)
                                }%`,
                                transition: 'all 0.4s',
                                background: '#0011A8',
                            }}
                        ></div>
                        <div
                            style={{
                                height: '4px',
                                width: 'calc(100% - 80px)',
                            }}
                            className="absolute top-o left-0 z-40 rounded-lg bg-blue-light"
                        ></div>
                    </div>
                    <button
                        className="ml-auto h-5 w-5 lg:h-8 lg:w-8"
                        onClick={unmount}
                    >
                        <img src="./assets/images/svg/cancel.svg" />
                    </button>
                </Modal.Head>
                <Modal.Body>
                    {!isLastStep && (
                        <h1 className="title pt-6 lg:pt-1 pb-8">
                            А ты смотришь сериалы правильно?
                        </h1>
                    )}
                    {currentStep > questions.length - 1 ? (
                        success ? (
                            <Success />
                        ) : (
                            <Fail />
                        )
                    ) : (
                        <Step
                            handleAnswer={handleAnswer}
                            stepName={`step${currentStep}`}
                            data={questions[currentStep]}
                            answer={answers[currentStep]}
                        />
                    )}
                </Modal.Body>
                <div className="pb-5 pt-4">
                    {!isLastStep ? (
                        <div className="flex justify-center">
                            <Button
                                type="primary"
                                shape="rounded"
                                disabled={
                                    !answers
                                        .map((answer) => answer.step)
                                        .includes(currentStep)
                                }
                                title="Далее"
                                onClick={handleNext}
                            />
                        </div>
                    ) : (
                        <div>
                            <div className="mb-6 text-center">
                                <SignupBtn />
                            </div>
                            <div className="mb-6 text-center lg:hidden">
                                <Button
                                    shape="rounded"
                                    type="danger"
                                    title="Подробнее"
                                    onClick={unmount}
                                />
                            </div>
                            <div className="text-center">
                                <Button
                                    title="пройти ещё раз"
                                    type="primary"
                                    shape="rounded"
                                    onClick={reset}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default TestComponent;
