import styled from 'styled-components';

export const Wrapper = styled.div`
    color: rebeccapurple;
    background-color: rgba(10,200,250,1);
    text-align: center;
    height: 826px;
    margin:-8px;
    
    `;
export const Header = styled.h1`
        font-size: 30px;
        text-align: center;
        padding: 1em;
        margin:0px;
    `;
export const Ul = styled.ul`
    list-style-type:none;
    display: flex;
    justify-content: space-around;
    `;
export const Li = styled.div`
    border: 4px solid #0ff;
    border-radius: 10px;
    `;
export const Day = styled.li`
    font-size: 26px;
    background-color: #0ff;
    padding: 70px;
    margin: 0;
    `;
export const Input = styled.input`
    border: 0px solid rgba(10,200,250,1);
    border-radius: 20px;
    width: 20%;
    font-size: 18px;
    margin: 10px;
    `;

export const Button = styled.button`
    background-color: #0ff; 
    border: none;
    border-radius: 7px;
    padding: 8px;
    margin:2px;
    `;