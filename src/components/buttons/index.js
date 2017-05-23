//@flow
import React from 'react';
import {
  Label,
  StyledSolidButton,
  StyledTextButton,
  StyledIconButton,
  StyledOutlineButton,
} from './style';
import { Spinner } from '../globals';
import { Loading } from '../loading';
import Icon from '../icons';

type ButtonProps = {
  loading?: Boolean,
  disabled?: Boolean,
  color?: String,
  gradientTheme?: 'default' | 'brand' | 'pro' | 'warn' | 'success' | 'none',
  icon?: String,
  children?: React$Element<any>,
};

type IconProps = {
  glyph: String,
  color?: String,
  hoverColor?: String,
  disabled?: Boolean,
  tipText?: String,
  tipLocation?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-right'
    | 'bottom-left'
    | 'left'
    | 'right',
};

export const Button = (props: ButtonProps) => (
  <StyledSolidButton {...props}>
    {props.icon
      ? props.loading ? <Loading /> : <Icon glyph={props.icon} />
      : ''}
    {props.loading && !props.icon && <Spinner />}
    <Label loading={props.loading} hasIcon={props.icon}>{props.children}</Label>
  </StyledSolidButton>
);

export const OutlineButton = (props: ButtonProps) => (
  <StyledOutlineButton {...props}>
    {props.icon
      ? props.loading ? <Loading /> : <Icon glyph={props.icon} />
      : ''}
    {props.loading && !props.icon && <Spinner />}
    <Label loading={props.loading} hasIcon={props.icon}>{props.children}</Label>
  </StyledOutlineButton>
);

export const TextButton = (props: ButtonProps) => (
  <StyledTextButton {...props}>
    {props.loading && <Spinner />}
    <Label loading={props.loading}>
      {props.children}
    </Label>
  </StyledTextButton>
);

export const IconButton = (props: IconProps) => (
  <StyledIconButton {...props}>
    <Icon
      glyph={props.glyph}
      tipText={props.tipText}
      tipLocation={props.tipLocation}
    />
  </StyledIconButton>
);