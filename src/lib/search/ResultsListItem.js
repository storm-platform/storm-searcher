/*
 * This file is part of Storm Searcher.
 * Copyright (C) 2022 Storm Platform.
 *
 * Storm-Searcher is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import _get from 'lodash/get';
import _truncate from 'lodash/truncate';

import { Item, Label } from 'semantic-ui-react';

export const ResultsListItem = ({ result }) => {
  const compendiumTitle = _get(result, 'metadata.title');
  const compendiumDescription = _get(result, 'metadata.description', '');

  const compendiumDescriptor = _get(
    result,
    'metadata.execution.environment.descriptor.name'
  );
  const compendiumDescriptorVersion = _get(
    result,
    'metadata.execution.environment.descriptor.version'
  );

  const compendiumVersion = _get(result, 'versions.index');
  const compendiumDate = _get(result, 'updated').split('T')[0];

  return (
    <Item>
      <Item.Content>
        <Item.Extra className="labels-actions">
          <Label size="tiny" className="primary">
            {compendiumDate} (Version {compendiumVersion})
          </Label>
          <Label size="tiny" className="neutral">
            Compendium
          </Label>
          <Label size="tiny" className={`access-status open`}>
            {compendiumDescriptor} ({compendiumDescriptorVersion})
          </Label>
        </Item.Extra>
        <Item.Header as="h2">
          <a href={'#'}>{compendiumTitle}</a>
        </Item.Header>

        <Item.Description>
          {_truncate(compendiumDescription, { length: 350 })}
        </Item.Description>
        <Item.Extra>
          {compendiumDate && (
            <div>
              <small>
                {'Uploaded on'} <span>{compendiumDate}</span>
              </small>
            </div>
          )}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};
