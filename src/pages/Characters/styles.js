import styled from "styled-components";

//  interface ThumbnailData {
//      thumbnail: {
//          path: string;
//          extension: string;
//      }
//  }

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`

padding: 0px 10px;
margin: 0 auto;
border-radius: 8px;
background: #ec1d24;
color: white;
cursor: pointer;
transition: all 1s;

/* &:hover{
  opacity: 0.7;
} */

input{

    padding: 10px;
    border-radius: 5px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;

  }

`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const urlImg = (props) =>
  `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
  background: #f1f1f1;
  width: 300px;
  height: 450px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

  h2,
  p {
    padding: 5px;
    text-align: justify;
  }

  div#img {
    width: 100%;
    height: 400px;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    transition: all 1s;
    
  }

  &:hover {
    div#img {
      height: 450px;
    }
  }
`;

export const ButtonMore = styled.div`
  background: #f1f1f1;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  margin: 20px auto;
  padding: 0 50px;
  border-radius: 5px;
  transition: all 1s;


  &:hover{
    background: #ec1d24;
    color: white;
  }

  svg{
    margin: 0 10px;
  }
`;