import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Heading } from 'components';
import Card from '../Card/index.jsx';

const ListContainer = ({ title, cards, className }) => {
    return (
        <div className = { className }>
            <div className = 'head'>
                <Heading as = 'h3' size = '3'>{title}</Heading>
            </div>

            {cards.map((card, index) => {
                return (
                    <div className = 'card' key = { Number(new Date().getTime()) + index }>
                        <Card
                            text = { card.text }
                            title = { card.title }
                        />
                    </div>
                );
            })}
        </div>
    );
};

const List = styled(ListContainer)`
  display: block;
  .head {
      text-align: center;
      padding-top: 15px;
  }
  .card {
      margin-bottom: 15px;
  }
`;

List.propTypes = {};

export default List;
