import BasePanelItem from './BasePanelItem';
import {buttonStyle} from '../../styles/base';

export default class ButtonPanelItem extends BasePanelItem {
  constructor(props) {
    super(props)
    this.containerStyle = {...buttonStyle, ...(props.containerStyle || {})};
  }
}
