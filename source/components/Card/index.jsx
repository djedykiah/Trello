//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';

//Styles
import 'antd/lib/card/style/css';

//Components
import { Typography } from 'components';

const Card = ({ text, title }) => {
    return (
        <AntdCard style = { { width: 300 } } title = { title }>
            <Typography size = 'plain'>{text}</Typography>
        </AntdCard>
    );
};

Card.propTypes = {

};

export default Card;
