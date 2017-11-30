# react-paginator-nav-component
Handles straightforward button pagination as a presentational react component


## Requirements

    "dependencies": {
      "babel-polyfill": "6.23.0",
      "prop-types": "15.5.10",
      "react": "15.6.1",
      "react-dom": "15.6.1",
      "warning": "3.0.0"
    }

## Installation

Pleas be sure you have the requirements mentioned in the previous section installed.

We recommending forking this repository and using as a submodule. To use as a git submodule in your project, navigate to your components directory and run:

    git submodule add git@github.com:source4societyorg/react-paginator-nav-component.git PaginatorNav

Replace the url with the url of your fork as needed.

For more information on how to use submodules, refer to the [git submodule reference](https://git-scm.com/docs/git-submodule) and this article from [TechJini](http://www.techjini.com/blog/working-with-git-submodules/)

## Example

Wrap this in your own applications pagination style (in the example this is `AppPaginatorStyle` component which you must style yourself) and pass it props as follows:

    const AppPaginatorStyle = (props) => (
        <AppPaginatorStyleStyle>
            <PaginatorNav {...props} />
        </AppPaginatorStyleStyle>
    )

    AppPaginatorStyle.defaultProps = {
      id: 'optional_unique_id',
      currentPage: 1,
      displayPages: 5,
      maxPage: 10,
    };

    AppPaginatorStyle.propTypes = {
      id: PropTypes.string,
      currentPage: PropTypes.number,
      maxPage: PropTypes.number,
      displayPages: PropTypes.number,
      path: PropTypes.string.isRequired,
    };
