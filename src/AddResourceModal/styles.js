import styled from 'styled-components'
import Dropzone from 'react-dropzone'

import { getThemeField } from 'Theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${getThemeField('colors.WHITE')};
  flex-shrink: 0;
`

export const TabRow = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  flex-direction: row;
  background-color: ${getThemeField('colors.GRAY')};
  padding-left: 40px;
`

export const TabRowButton = styled.div`
  margin-left: 24px;
  font-size: 13px;
  color: ${getThemeField('colors.MAIN')};
  display: flex;
  align-items: flex-end;
  padding-bottom: 23px;
  cursor: pointer;
`

export const TabRowButtonActive = TabRowButton.extend`
  border-bottom: solid 2px ${getThemeField('colors.MAIN')};
  padding-bottom: 21px;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  flex-shrink: 0;
  padding: 54px 64px 54px 60px;
`

export const StyledDropzone = styled(Dropzone).attrs({
  activeClassName: 'conversation-dropzone-active',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 165px;
  opacity: 0.6;
  border: dashed 2px ${getThemeField('colors.BORDER_GRAY')};
  margin-top: 12px;
  flex-shrink: 0;
`

export const DropzoneLabel = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${getThemeField('colors.MAIN')};
  margin-top: 11px;
`

export const ResLibContainer = styled.div`
  margin-top: 35px;
  width: 100%;
`

export const ResLibRow = styled.div`
  width: 638px;
  height: 91px;
  margin: auto auto 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${getThemeField('colors.WHITE')};
  border: solid ${props => (props.active ? '2px ' : '1px ')};
  cursor: pointer;
  ${props =>
    props.active
      ? getThemeField('colors.MAIN')
      : getThemeField('colors.BORDER_GRAY')};
`

export const ResLibRowTitle = styled.div`
  margin-left: 27px;
  font-weight: 500;
`

export const ResLibRowDescription = styled.div`
  margin-left: 27px;
`
