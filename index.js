import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const calculateNumberButtons = (currentPage, maxPage, displayPages) => {
  let numberButtons = displayPages;
  if((currentPage + displayPages) > maxPage) {
    numberButtons = (maxPage - currentPage + 1);
  }
  return numberButtons;
};

const renderPaginatorButton = (page, linkPath, label, currentPage) => (
    <button key={label} className={currentPage == page ? 'selected': ''}><Link to={linkPath + '/' + page}>{label}</Link></button>
);

const renderPaginatorButtons = (id, {currentPage: currentPage, maxPage: maxPage, displayPages: displayPages, path: path,  ...props}) => (
    [...Array(calculateNumberButtons(currentPage, maxPage, displayPages)).keys()].map((_, i) => (renderPaginatorButton(i+currentPage, path, i+currentPage+'', currentPage)))
);

const renderPreviousButton = (id, { currentPage: currentPage, path: path, ...props}) => (
    currentPage > 1 ? (
        renderPaginatorButton(currentPage-1, path, '<', currentPage)
    ) : (null)
);

const renderNextButton = (id, { currentPage: currentPage, maxPage: maxPage, path: path, ...props}) => (
    currentPage < maxPage ? (
        renderPaginatorButton(currentPage+1, path, '>', currentPage)
    ) : (null)
);

const PaginatorNav = ({id: id, ...props}) => (
    props.maxPage > 0 ? (
        <div className={'paginatorNav ' + id}>
          {renderPreviousButton(id, props)}
          {renderPaginatorButtons(id, props)}
          {renderNextButton(id, props)}
        </div>
    ) : (null)
)

PaginatorNav.defaultProps = {
  id: '',
  currentPage: 1,
  displayPages: 5,
  maxPage: 0,
};

PaginatorNav.propTypes = {
  id: PropTypes.string,
  currentPage: PropTypes.number,
  maxPage: PropTypes.number,
  displayPages: PropTypes.number,
  path: PropTypes.string.isRequired,
};

export default PaginatorNav;
