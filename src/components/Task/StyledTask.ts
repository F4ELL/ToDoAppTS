import styled from 'styled-components';

export const StyledTask = styled.li`
    width: 100%;
    padding: 15px;
    background-color: #FFF;
    text-transform: uppercase;
    color: #868686;
    margin-bottom: 20px;
    position: relative;

    .delete-btn{
        background-color: #FF5A5A;
        width: 20px;
        height: 20px;
        position: absolute;
        top: -8px;
        left: -8px;
        border: none;
        cursor: pointer;
        transition: 1s ease;

        &:hover{
            background-color: #ff2121;
        }
    }

    .completed-btn{
        background-color: #5AFF74;
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        width: 50px;
        height: 100%;
        cursor: pointer;
        transition: 1s ease;

        &:hover{
            background-color: #00ff28;
        }
    }
`