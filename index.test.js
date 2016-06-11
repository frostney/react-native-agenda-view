import React from 'react-native';

import test from 'ava';
import AgendaView from './';
import { render } from 'enzyme';

test(t => {
  const wrapper = render(
    <AgendaView />
  );

  t.truthy(wrapper);
});
