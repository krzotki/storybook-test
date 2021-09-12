

import React from 'react'

import styles from './Button.module.css';

const sizes = ['sm', 'md', 'lg'] as const;
type Size = typeof sizes[number];

const colors = ['red', 'blue', 'green'] as const;
type Color = typeof colors[number];

interface Props {
    label: string,
    backgroundColor: Color,
    size: Size,
    handleClick: () => void
}

const Button: React.FC<Props> = (props) => {
    const classes = [styles.button, styles[props.backgroundColor], styles[props.size]];

    return (
        <div onClick={props.handleClick} className={classes.join(' ')}>
            {props.label}
        </div>
    )
}

export default Button