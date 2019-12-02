import BasePanelItem from './BasePanelItem';
import {infoBarIconElement} from '../../styles/base';

export default class StaticPanelItem extends BasePanelItem {
  constructor(props) {
    super({...props, ...{press: undefined}});
    this.containerStyle = {
      ...infoBarIconElement,
      ...(props.containerStyle || {}),
    };
  }
}
