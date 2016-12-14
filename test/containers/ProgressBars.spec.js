import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { ProgressBars } from 'containers';
import { Bar } from 'components';

const mockResponse = {"buttons":[49,33,-23,-35],"bars":[26,80,13],"limit":200};

describe('<ProgressBars />', function () {
  it('Render all the bars from props', function () {
    const wrapper = mount(<ProgressBars progressBars={mockResponse} />);
    expect(wrapper.find(Bar)).to.have.length(3);
  });
});
