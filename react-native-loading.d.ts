/**
 * Created by nghinv on Thu Jun 11 2020
 * Copyright (c) 2020 nghinv@lumi.biz
 */

declare module '@nghinv/react-native-loading' {
  import { PureComponent } from 'react';
  import { ViewStyle } from 'react-native';

  interface WapLoadingViewProps {
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

  interface LoadingViewProps extends WapLoadingViewProps {
    visible?: Boolean;
  }

  interface LoadingServiceProps {
    defaultProps?: WapLoadingViewProps;
  }

  interface SpinnerProps {
    /**
     * Show spinner
     */
    show: (params?: WapLoadingViewProps) => void;

    /**
     * Hide spinner
     */
    hide: () => void;
  }

  export const Spinner: SpinnerProps;

  export class LoadingService extends PureComponent<LoadingServiceProps> {

  }

  export class LoadingView extends PureComponent<LoadingViewProps> {

  }
}