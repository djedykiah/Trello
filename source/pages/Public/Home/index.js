// Core
import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setUserLanguage } from 'store/reducers/ui/actions';
import List from 'components/List/index.jsx';

const HomeContainer = ({ className }) => {
    const list = useSelector((state) => state.list);

    return (
        <div className = { className }>
            {list.map((listItem, index) => {
                return (
                    <List
                        cards = { listItem.cards }
                        className = 'list-card'
                        key = { Number(new Date().getTime()) + index }
                        title = { listItem.title }
                    />
                );
            })}
        </div>
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
