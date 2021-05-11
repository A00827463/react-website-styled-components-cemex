import styled from "styled-components";
import cemex from "../../images/cemex.jpeg";
import { Link } from "react-router-dom";

export const InfoSec = styled.div `
    color: #fff;
    /* padding: 100px 0; */
    padding: ${({s, m, l}) => (s ? '20px 0' : (m ? '50px 0' : (l ? '100px 0' : '0')))};
    /* background: url(${cemex}); */
    background: ${({light}) => (light ? '#add8e6' : '#101522')};
    background-repeat: no-repeat;
    background-size: auto; 
    
`;

export const ContentLogin = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
    
`;

export const ContentLoginSubheading = styled.p `
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 44px;
    /* color: #1c1c1c; */
    color: ${({light}) => (light ? '#fff' : '#101522')};
`;

export const ContentLoginSubText = styled.p `
    margin-bottom: 24px;
    font-size: 20px;
    /* color: #1c1c1c; */
    color: ${({light}) => (light ? '#fff' : '#101522')};
`;

export const Form = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px){
        flex-direction: column;
        width: 80%;
    }
`;

export const FormInput = styled.input `
    padding: 14px 30px;
    border-radius: 20px;
    /* margin-right: 100px; */
    outline: none;
    border: none;
    font-size: 18px;
    border: 1px solid #fff;
    margin: 0 0 14px 0;
    width: 350px;

    &::placeholder{
        color: #808080;
    }
    
    @media screen and (max-width: 820px){
        width: 100%;
        margin: 0 0 14px 0;
    }
`;

export const CustomLink = styled(Link) `
    text-decoration: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    /* color: #293064; */
    color: ${({blue}) => (blue ? '#293064' : '#df343d')};
    outline: none;
    
    &:hover {
        /* color: #df343d; */
        color: ${({blue}) => (blue ? '#4B59F7' : '#FF3B45')};
    }
`;

