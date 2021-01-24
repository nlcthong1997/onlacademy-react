import React, { useEffect, useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from '../../components/Header';
import Content from './components/Content';

import AppContext from '../../AppContext';
import { INIT_MENU_HEADER } from '../../AppTypes';
import { getInitCategories } from '../../services/category';

import './index.css';

const Default = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      let categories = await getInitCategories();
      dispatch({
        type: INIT_MENU_HEADER,
        payload: {
          categories,
        }
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Container className="main">
        <Row>
          <Content />
        </Row>
      </Container>
    </>
  );
}

export default Default;