import { h } from 'preact';
import { Button } from './Button';
import { mountTest } from '../../utils';

export const TestBtn = ({ disabled }) => (
    <Button
        onClick={mountTest}
        title="пройти тест"
        type="primary"
        shape="rounded"
        disabled={disabled}
    />
);
