/**
 * Created by nghinv on Thu Jun 11 2020
 * Copyright (c) 2020 nghinv@lumi.biz
 */

import React, { useState, useImperativeHandle, forwardRef } from 'react';
import LoadingView from './LoadingView';

function WapLoadingView(props, ref) {
  const [isShow, setIsShow] = useState(false);
  const [otherState, setOtherState] = useState({});

  useImperativeHandle(ref, () => ({
    show: (params) => {
      setIsShow(true);
      setOtherState(params);
    },
    hide: () => {
      setIsShow(false);
      setOtherState({});
    }
  }));

  return <LoadingView {...props} {...otherState} visible={isShow} />;
}

export default forwardRef(WapLoadingView);
