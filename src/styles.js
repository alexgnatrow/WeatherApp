import styled from 'styled-components';

export const Wrapper = styled.main`
    color: #2dde8e;
    font-family: sans-serif;
    background: linear-gradient(to bottom right, #401effdf, #0ac8fa);
    text-align: center;
    height: 100vh;
    margin:-8px;
    &::-webkit-scrollbar{
        width: 2px;
    }
    &::-moz-scrollbar{
        width: 2px;
    }
    `;
export const Header = styled.h1`
        font-size: 30px;
        padding: 1em;
        margin: 0;
    `;
export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 1%;
    margin-top: 0;
    padding-top: 0;
    `;
export const Ul = styled.ul`
    background: linear-gradient(to top left, #401effdf, #0ac8fa);
    list-style-type:none;
    border: 4px solid #0ff;
    border-top-color: #357ffe;
    border-left-color: #3383fd;
    border-bottom-color: #435cfe;
    border-right-color: #4755fe;
    border-radius: 10px;
    font-size:20px; 
    padding:0; 
    margin-top: 0;
    width: 16rem;
    `;
export const Li = styled.li`
    font-size: 26px;
    padding: 0.5rem 3rem;
    
    margin: 0;
    `;
export const Text = styled.p`
    margin: 0;
    font-weight: 600;

`
export const Input = styled.input`
    border: 0px solid rgba(10,200,250,1);
    border-radius: 10px;
    width: 200px;
    font-size: 18px;
    margin: 10px;
    
     &:hover, &:focus{
    transition-duration: 0.7s;
    color:rebeccapurple;  
    box-shadow: 0 0 10px;
    `;

export const Button = styled.button`
    background-color: #0ff; 
    display: inline-block;
    font-size: 1rem;
    border: none;
    border-radius: 7px;
    padding: 8px;
    margin:2px;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 10px transparent;
    transition-duration: 0.5s;
    transition-property: transform;
    
    &:hover, &:focus{
    transform: scale(1.2);
    color:gold;
    box-shadow: 0 0 10px;

    }
    `;
export const Ulist = styled.ul`
    list-style-type: none;
    display: flex;
    flex-flow: column-reverse wrap;
    width: 25rem;
    margin: 0 auto;
    padding: 0;
    `;
export const ListItemWrapper = styled.li`
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;    
    `;
export const ListItem = styled.button`
    
    border: 4px solid #0ff;
    border-radius: 7px;
    background-color: #0ff;
    width: 15rem;
    margin: 0.5rem;
    cursor: pointer;
    box-shadow: 0 0 10px transparent;

    &:hover, &:focus{
    transition-duration: 0.7s;
    color:gold;  
    box-shadow: 0 0 10px;
 
    }
    `;
export const Button2 = styled.button`
    background-color: #0ff; 
    font: 0.5rem arial;
    border: none;
    border-radius: 7px;
    padding: 0 0.5rem;
    margin: 0.5rem;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    transition-duration: 0.5s;
    transition-property: transform;
    box-shadow: 0 0 10px transparent;

    &:hover, &:focus{
    transform: scale(1.2);
    color:gold;
    box-shadow: 0 0 10px;

    }
    `;
export const Img = styled.img`
    padding: 0;
    margin: 0;
    width: 5rem;
    height: 5rem;
    `;

export default {};