//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Input } from 'antd';

//Styles
import styled from 'styled-components';

const ActionButtonContainer = ({ list, className }) => {
    const [ isLoading, setLoading ] = useState(false);
    const [ isFormOpen, setForm ] = useState(false);
    const [ value, setValue ] = useState('');
    const { TextArea } = Input;

    const _buttonText = list ? 'Add new list' : 'Add new card';
    const _placeholder = list ? 'Enter list title' : 'Enter cards text';

    const _handleChange = (e) => {
        setValue(e.target.value);
    };

    const _renderForm = () => {
        return (
            <div className = 'form'>
                <TextArea
                    autoSize = { { minRows: list ? 1 : 3, maxRows: 10 } }
                    placeholder = { _placeholder }
                    value = { value }
                    onChange = { (e) => _handleChange(e) }
                />
                <div className = 'form-actions'>
                    <Button icon = 'plus' loading = { Boolean(isLoading) } size = 'large' type = 'dashed'>
                        {_buttonText}
                    </Button>
                    <Icon height = '32px' style = { { fontSize: 25 } } type = 'close-circle' />
                </div>

            </div>

        );
    };

    const _renderButton = () => {
        return (
            <Button icon = 'plus' loading = { Boolean(isLoading) } size = 'large' type = 'dashed'>
                {_buttonText}
            </Button>
        );
    };

    return (
        <div className = { className }>{isFormOpen ? _renderForm() : _renderButton()}</div>
    );
};

const ActionButton = styled(ActionButtonContainer)`
    display: block;
    textarea {
        resize: none;
        margin-bottom: 10px;
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .form-actions {
        display: flex; 
        align-items: center;
        .anticon-close-circle {
            cursor: pointer;
            margin-left: 10px;
        }
    }
`;

ActionButton.propTypes = {

};

export default ActionButton;
