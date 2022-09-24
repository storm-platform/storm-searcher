/*
 * This file is part of Storm Searcher.
 * Copyright (C) 2022 Storm Platform.
 *
 * Storm-Searcher is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import { render } from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import './index.css';
import { StormSearcher, StormHeader } from './lib';

const App = () => (
  <Container>
    <StormHeader />
    <div className={'search-app-container'}>
      <StormSearcher />
    </div>
  </Container>
);

render(<App />, document.getElementById('root'));
