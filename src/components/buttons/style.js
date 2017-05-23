// @flow
/* eslint no-eval: 0 */
// $FlowFixMe
import styled, { css } from 'styled-components';
import { Gradient, Shadow, Transition, hexa } from '../globals';

const baseButton = css`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 700;
  white-space: nowrap;
  word-break: keep-all;
  transition: ${Transition.hover.off};
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  position: relative;
  text-align: center;
  padding: ${props => (props.icon ? '6px 8px' : '12px 16px')};

  &:hover {
    border-radius: ${props => (props.disabled ? '8px' : '12px')};
    transition: ${Transition.hover.on};
    box-shadow: ${props => (props.disabled ? 'none' : `${Shadow.high} ${hexa(props.theme.text.placeholder, 0.5)}`)};
    opacity: ${props => (props.disabled ? '0.5' : '1')};
  }

  /* if an icon and label are both present, add space around the label*/
  div + span {
    margin: 0 8px;
  }
`;

export const Label = styled.span`
  display: block;
  flex: 1 0 auto;
  line-height: inherit;
  color: inherit;
  ${props => (props.loading && !props.hasIcon ? 'opacity: 0;' : 'opacity: 1;')};
  transition: ${Transition.hover.on};
  align-self: center;
  margin: auto;
`;

export const StyledSolidButton = styled.button`
  ${baseButton}
  background-color: ${props => (props.disabled ? props.theme.inactive : eval(`props.theme.${props.color ? props.color : 'brand.alt'}`))};
  background-image: ${props => (props.disabled || props.gradientTheme === 'none' ? 'none' : props.gradientTheme ? Gradient(eval(`props.theme.${props.gradientTheme}.alt`), eval(`props.theme.${props.gradientTheme}.default`)) : Gradient(props.theme.brand.alt, props.theme.brand.default))};
  color: ${props => props.theme.text.reverse};

  &:hover {
    background-color: ${props => (props.disabled ? props.theme.inactive : eval(`props.theme.${props.hoverColor ? props.hoverColor : 'brand.alt'}`))};
  }

  &:active {
    box-shadow: ${props => (props.disabled ? 'none' : `${Shadow.low} ${props.theme.text.placeholder}`)};
  }
`;

export const StyledTextButton = styled(StyledSolidButton)`
  background: ${({ theme }) => theme.bg.default};
  background-image: none;
  font-weight: 600;
  color: ${props => (props.disabled ? props.theme.inactive : eval(`props.theme.${props.color ? props.color : 'text.alt'}`))};
  transition: color 0.1s ease-out, box-shadow 0.2s ease-out 0.1s;

  &:hover {
    color: ${props => (props.disabled ? props.theme.inactive : eval(`props.theme.${props.hoverColor ? props.hoverColor : 'brand.alt'}`))};
    transition: color 0.1s ease-in, box-shadow 0.2s ease-in 0.1s;
  }
`;

export const StyledOutlineButton = styled(StyledTextButton)`
  box-shadow: inset 0 0 0 2px ${props => (props.disabled ? props.theme.inactive : eval(`props.theme.${props.color ? props.color : 'brand.default'}`))};
  color: ${props => (props.disabled ? props.theme.inactive : eval(`props.theme.${props.color ? props.color : 'brand.default'}`))};
  transition: ${Transition.hover.on};

  &:hover {
    color: ${props => (props.disabled ? props.theme.inactive : eval(`props.theme.${props.hoverColor ? props.hoverColor : 'brand.alt'}`))};
    box-shadow: inset 0 0 0 2px ${props => (props.disabled ? props.theme.inactive : eval(`props.theme.${props.hoverColor ? props.hoverColor : 'brand.alt'}`))};
    transition: ${Transition.hover.on};
  }
`;

export const StyledIconButton = styled.button`
  ${baseButton}
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  color: ${props => (props.disabled ? props.theme.inactive : props.color ? eval(`props.theme.${props.color}`) : props.theme.text.alt)};

  &:hover {
    color: ${props => (props.disabled ? props.theme.inactive : props.hoverColor ? eval(`props.theme.${props.hoverColor}`) : props.color ? eval(`props.theme.${props.color}`) : props.theme.brand.alt)};
    transform: ${props => (props.disabled ? 'none' : 'scale(1.05)')};
    box-shadow: none;
  }
`;