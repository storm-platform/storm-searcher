/*
 * This file is part of Storm Searcher.
 * Copyright (C) 2022 Storm Platform.
 *
 * Storm-Searcher is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import { InvenioSearchApi } from 'react-searchkit';

/**
 * Constants
 */
const API_KEY = process.env.REACT_APP_API_KEY;
const API_ADDRESS = process.env.REACT_APP_API_ADDRESS;
const API_PROJECT = process.env.REACT_APP_API_PROJECT;

/**
 * Build Storm WS API compatible URLs.
 */
export const searchApiBuildUrl = (resourceUrl) =>
  `${API_ADDRESS}/${resourceUrl}`;

/**
 * Factory to generate specialized search API based on projects.
 */
export const searchApiProjectFactory = () => {
  const projectAddress = searchApiBuildUrl(`projects/${API_PROJECT}/compendia`);

  return new InvenioSearchApi({
    axios: {
      url: projectAddress,
      timeout: 5000,
      headers: { Accept: 'application/json', 'x-api-key': API_KEY },
    },
  });
};
