import React from 'react';
import PropTypes from 'prop-types';
import {useBest} from '../hooks/useBest';

export const postContext = React.createContext({});

export const PostContextProvider = ({children}) => {
  const post = useBest();

  return (
    <postContext.Provider value={{post}} >
      {children}
    </postContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
