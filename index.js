import React from 'react';
import utilities from '@source4society/scepter-utility-lib';
import PropTypes from 'prop-types';

const calculateNumberButtons = (currentPage, maxPage, displayPages) => {
  let numberButtons = displayPages;
  if((currentPage + displayPages) > maxPage) {
    numberButtons = (maxPage - currentPage + 1);
  }
  return numberButtons;
};

const renderPaginatorButton = (page, linkPath, label, currentPage, paginatorCallback) => (
    <button key={label} className={currentPage == page ? 'selected': ''}>
    {
      utilities.isEmpty(paginatorCallback) ? (
       <Link to={linkPath + '/' + page}>{label}</Link>
      ) : ( 
       <a onClick={(evt) => paginatorCallback(label)}>{label}</a>
      )
    }
    </button>
);

const renderPreviousButton = (previousKey, pageNumber, paginatorCallback) => (
  (pageNumber > 1 || (typeof previousKey !== 'undefined' && previousKey !== null && previousKey !== '')) ? (
      renderPaginatorButton('Previous', previousKey, 'previous', pageNumber, paginatorCallback)
  ) : (null)
);

const renderNextButton = (nextKey, pageNumber, paginatorCallback, maxPage = 0) => {
  if (maxPage === 0 || pageNumber < maxPage) {
    return typeof nextKey !== 'undefined' && nextKey !== null && Object.keys(nextKey).length > 0 ? (
        renderPaginatorButton('Next', nextKey, 'next', pageNumber, paginatorCallback)
    ) : null
  }
}

const renderPageNumber = (pageNumber) => (
  <span className={'page-number'}>{pageNumber}</span> 
)

const PaginatorNav = ({id: id, previousKey: previousKey, nextKey:nextKey, pageNumber: pageNumber, paginatorCallback: paginatorCallback, maxPage: maxPage, ...props}) => (
    ((typeof nextKey !== 'undefined' && nextKey !== null) || (pageNumber > 1)) ? (
        <div className={'paginatorNav ' + id}>
          {renderPreviousButton(previousKey, pageNumber, paginatorCallback)}
          {renderPageNumber(pageNumber)}
          {renderNextButton(nextKey, pageNumber, paginatorCallback, maxPage)}
        </div>
    ) : (null)
);

PaginatorNav.defaultProps = {
  id: '',
  maxPage: 0,
};

PaginatorNav.propTypes = {
  id: PropTypes.string,
  currentKey: PropTypes.object,
  nextKey: PropTypes.object,
  previousKey: PropTypes.object,
  pageNumber: PropTypes.number,
  paginatorCallback: PropTypes.func,
};

export default PaginatorNav;
