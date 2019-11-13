//Core
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Icon, Input } from 'antd';

//Styles
import styled from 'styled-components';

//Actions
import { addList, addCard } from '../../store/reducers/list/actions';

const ActionButtonContainer = ({ list, className, index }) => {
    const [ isLoading, setLoading ] = useState(false);
    const [ isFormOpen, setFormOpen ] = useState(false);
    const [ value, setValue ] = useState('');
    const { TextArea } = Input;
    const dispatch = useDispatch();

    const _buttonText = list ? 'Add new list' : 'Add new card';
    const _placeholder = list ? 'Enter list title' : 'Enter cards text';

    const _handleChangeText = (e) => {
        setValue(e.target.value);
    };

    const _handleClick = () => {
        setFormOpen(!isFormOpen);
    };

    const _addList = () => {
        setLoading(true);
        setTimeout(() => {
            dispatch(addList(value));
            setLoading(false);
            setFormOpen(false);
            setValue('');
        }, 1000);
    };

    const _addCard = () => {
        setLoading(true);
        setTimeout(() => {
            dispatch(addCard(index, value));
            setLoading(false);
            setFormOpen(false);
            setValue('');
        }, 1000);
    };

    const _renderForm = () => {
        return (
            <div className = 'form'>
                <TextArea
                    autoSize = { { minRows: list ? 1 : 3, maxRows: 10 } }
                    placeholder = { _placeholder }
                    value = { value }
                    onChange = { (e) => _handleChangeText(e) }
                />

                <div className = 'form-actions'>
                    <Button
                        icon = 'plus'
                        loading = { Boolean(isLoading) }
                        size = 'large'
                        type = 'dashed'
                        onClick = { list ? _addList : _addCard }>
                        {_buttonText}
                    </Button>
                    <Icon
                        height = '32px'
                        style = { { fontSize: 25 } }
                        type = 'close-circle'
                        onClick = { _handleClick }
                    />
                </div>
            </div>
        );
    };

    const _renderButton = () => {
        return (
            <Button
                icon = 'plus'
                loading = { Boolean(isLoading) }
                size = 'large'
                type = 'dashed'
                onClick = { _handleClick }>
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
