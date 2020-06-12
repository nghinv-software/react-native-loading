/**
 * Created by nghinv on Thu Jun 11 2020
 * Copyright (c) 2020 nghinv@lumi.biz
 */

import React from 'react';
import WrapLoadingView from './WrapLoadingView';

let Spinner;

export default function LoadingService({ children, defaultProps }) {
  return (
    <>
      {children}
      <WrapLoadingView {...defaultProps} ref={ref => { Spinner = ref; }} />
    </>
  );
}

export { Spinner };
