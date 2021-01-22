import React, { useContext } from 'react';

import Course from './components/Course';
import Paginate from './components/Pagination';

import AppContext from '../../AppContext';

const Home = () => {
  const { store } = useContext(AppContext);
  const { isShowAll, courses } = store;
  const isShow = isShowAll && Object.entries(courses).length > 0;
  return (
    <>
      {!isShowAll && courses.map((course, i) => <Course key={i} course={course} />)}
      {!isShowAll && <Paginate total={2} page={1} />}

      {isShow && courses.highlights.map((course, i) => <Course key={i} course={course} />)}
      {isShow && courses.subscribed.map((course, i) => <Course key={i} course={course} />)}
      {isShow && courses.mostView.map((course, i) => <Course key={i} course={course} />)}
      {isShow && courses.latest.map((course, i) => <Course key={i} course={course} />)}
    </>
  );
}

export default Home;