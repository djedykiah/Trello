import React from 'react';

import layout from 'helpers/layout';
// import Header from 'components/Header';
// import Footer from 'components/Footer';

const LayoutDefault = ({ component: Component, ...props }) => {
    return (
        <div className = 'page-wrapper'>
            {/* <Header /> */}
            <Component { ...props } />
            {/* <Footer /> */}
        </div>
    );
};

export default layout(LayoutDefault);
