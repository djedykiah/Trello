// Core
import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

import List from 'components/List/index.jsx';
import ActionButton from 'components/ActionButton/ActionButton.jsx';

const HomeContainer = ({ className }) => {
    const list = useSelector((state) => state.list);

    const _handleDragEnd = () => {
        console.log('darh');
    };

    return (
        <DragDropContext onDragEnd = { _handleDragEnd }>
            <div className = { className }>
                {list.map((listItem, index) => {
                    return (
                        <List
                            cards = { listItem.cards }
                            className = 'list-card'
                            id = { listItem.id }
                            index = { index }
                            key = { Number(new Date().getTime()) + index }
                            title = { listItem.title }
                        />
                    );
                })}
                <ActionButton list />
            </div>
        </DragDropContext>

    );
};

const Home = styled(HomeContainer)`
    display: flex;
    .list-card {
        margin-right: 15px;
        &:last-child {
            margin-right: 0;
        }
    }
`;

export default Home;
