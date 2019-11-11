// Core
import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setUserLanguage } from '../../../store/reducers/ui/actions';
import List from '../../../components/List/index.jsx';

const Home = (props) => {
    const list = useSelector((state) => state.list);

    return (
        <div>
            {list.map((listItem, index) => {
                return <List cards = { listItem.cards } key = { Number(new Date().getTime()) + index } title = { listItem.title } />;
            })}
        </div>
    );
};

export default Home;
