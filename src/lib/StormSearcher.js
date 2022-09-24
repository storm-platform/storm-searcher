/*
 * This file is part of Storm Searcher.
 * Copyright (C) 2022 Storm Platform.
 *
 * Storm-Searcher is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import { OverridableContext } from 'react-overridable';
import { ReactSearchKit, SearchBar, ResultsList } from 'react-searchkit';

import { ResultsListItem } from './search';
import { searchApiProjectFactory } from '../api';

/**
 * Configurations
 */
const customSearchComponents = {
  'ResultsList.item': ResultsListItem,
};

/**
 * Storm Searcher App.
 */
export const StormSearcher = () => {
  const searchApi = searchApiProjectFactory();

  return (
    <OverridableContext.Provider value={customSearchComponents}>
      <ReactSearchKit searchApi={searchApi}>
        <div style={{ margin: '2em auto', width: '50%' }}>
          <SearchBar />
          <ResultsList />
        </div>
      </ReactSearchKit>
    </OverridableContext.Provider>
  );
};
