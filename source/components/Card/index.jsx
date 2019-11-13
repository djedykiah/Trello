//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';

//Components
import { Typography } from 'components';

const Card = ({ text }) => {
    return (
        <AntdCard style = { { width: 300 } }>
            <Typography size = 'plain'>{text}</Typography>
        </AntdCard>
    );
};

Card.propTypes = {

};

export default Card;
