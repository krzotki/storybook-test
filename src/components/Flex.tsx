

import React from 'react'
import styles from './Flex.module.css';

const position = ['start', 'center', 'end', 'space-between', 'space-evenly', 'space-around'] as const;
type JustifyContent = typeof position[number];
type AlignItems = typeof position[number];

const directions = ['row', 'column', 'row-reverse', 'column-reverse'] as const;
type Direction = typeof directions[number];

const wraps = ['wrap', 'nowrap', 'wrap-reverse'] as const;
type Wrap = typeof wraps[number];

interface Props {
    justify: JustifyContent
    align: AlignItems
    direction: Direction
    wrap: Wrap
}

const Flex: React.FC<Props> = (props) => {
    const style = {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: props.justify,
        alignItems: props.align,
        flexDirection: props.direction,
        flexWrap: props.wrap
    };

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Flex;