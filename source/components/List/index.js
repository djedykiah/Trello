import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card/index.jsx';

const ListContainer = ({ title, cards, className }) => {
    console.log('aaa');

    return (
      <div className= { className }>
            <h1>{title}</h1>
            {cards.map((card, index) => {
                return (
                    <Card
                        key ={ Number(new Date().getTime()) + index }
              text= { card.text }
                        title ={ card.title }
                    />
                );
            })}
        </div>
    );
};

const List = styled(ListContainer)`
  display: block;
`;

List.propTypes = {};

export default List;
