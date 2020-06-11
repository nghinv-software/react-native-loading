/**
 * Created by nghinv on Thu Jun 11 2020
 * Copyright (c) 2020 nghinv@lumi.biz
 */

declare module '@nghinv/react-native-loading' {
  import { PureComponent } from 'react';
  import { ViewStyle } from 'react-native';

  export interface WapLoadingViewProps {
    /**
     * Custom render indicator
     */
    renderIndicator?: () => void;
    /**
     * Default value = 'white'
     */
    indicatorColor?: String;
    /**
     * Default value = 'large'
     */
    indicatorSize?: 'large' | 'small';
    /**
     * Default value = 'rgba(0, 0, 0, 0.4)'
     */
    backgroundColor?: String;

    containerStyle?: ViewStyle;
  }

  export interface LoadingViewProps extends WapLoadingViewProps {
    visible?: Boolean;
  }

  export interface LoadingServiceProps {
    defaultProps?: WapLoadingViewProps;
  }

  export interface spinner {
    /**
     * Show spinner
     */
    show: (params?: WapLoadingViewProps) => void;

    /**
     * Hide spinner
     */
    hide: () => void;
  }

  class LoadingService extends PureComponent<LoadingServiceProps> {

  }

  class LoadingView extends PureComponent<LoadingViewProps> {

  }
}