//Core
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Card as AntdCard, Icon } from 'antd';
import { Draggable } from 'react-beautiful-dnd';

//Styles
import styled from 'styled-components';

//Components
import { Typography } from 'components';

//Actions
import { removeCard } from 'store/reducers/list/actions';

const CardContainer = ({ text, className, id, listIndex, cardIndex }) => {
    const dispatch = useDispatch();

    const _handleDelete = () => {
        dispatch(removeCard(listIndex, cardIndex));
    };

    return (
        <Draggable draggableId = { String(id) } index = { cardIndex }>
            {(provided) => (
                <div { ...provided.draggableProps } { ...provided.dragHandleProps } ref = { provided.innerRef }>
                    <AntdCard className = { className }>
                        <Typography size = 'plain'>{text}</Typography>
                        <Icon className = 'icon-delete' type = 'delete' onClick = { _handleDelete } />
                    </AntdCard>
                </div>
            )}

        </Draggable>
    );
};

const Card = styled(CardContainer)`
    width: 300px;
    position: relative;
    &:hover {
        .icon-delete {
            display: block;
        }
    }
    p {
        margin-bottom: 0;
    }
    .icon-delete {
        display: none;
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
        &:hover {
            color: var(--errorColor);
        }
    }
`;

Card.propTypes = {

};

export default Card;
