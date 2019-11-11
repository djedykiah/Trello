import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';

const Card = ({ text, title }) => {
    console.log(title);

    return (
        <AntdCard style = { { width: 300 } } title = { title }>
            <p>{text}</p>
        </AntdCard>
    );
};

Card.propTypes = {

};

export default Card;
