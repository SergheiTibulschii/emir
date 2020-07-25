import { h } from 'preact';
import { Button } from './Button';
import { mountSignup } from '../../utils';

export const SignupBtn = ({ disabled, magnetic = false }) => (
    <Button
        onClick={mountSignup}
        title="записаться"
        type="danger"
        shape="rounded"
        disabled={disabled}
        magnetic={magnetic}
    />
);
