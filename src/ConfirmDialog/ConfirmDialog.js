// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { pure, compose } from 'recompose';
import { Dialog } from 'react-overlay-pack';
import { IconLoading } from '../Icons';
import IconWarning from '../IconWarning';
import Button from '../Button';
import { ResponsivePanel } from '../Form';
import Spin from '../Spin';
import { Esc } from '../KeyHandler';
import { Content } from './styled-components';
import { type SetSubmitting } from '../utils/type.flow';
import withSubmittingState, {
  type InjectedProps as WithSubmittingStateProps,
} from '../HoCs/withSubmittingState';

export type Props = {
  children: React.Node,
  show: boolean,
  onHide: (e: any) => void,
  onSubmit: ({ setSubmitting: SetSubmitting }) => Promise<void> | void,
  title: string,
  ok: string,
  cancel: string,
};
type InnerProps = WithSubmittingStateProps & Props;

export class PureConfirmDialog extends React.Component<InnerProps> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired, // (e: any) => void,
    onSubmit: PropTypes.func.isRequired, // ({ setSubmitting: SetSubmitting }) => Promise<void> | void
    title: PropTypes.string.isRequired,
    ok: PropTypes.string.isRequired,
    cancel: PropTypes.string.isRequired,
  };

  onSubmit = (e: SyntheticEvent<any>) => {
    const { onSubmit, isSubmitting, setSubmitting } = this.props;
    if (e && e.preventDefault) e.preventDefault();
    if (isSubmitting) return;
    onSubmit({ setSubmitting });
  };

  render() {
    const { onSubmit } = this;
    const {
      onHide,
      isSubmitting,
      show,
      children,
      title,
      ok,
      cancel,
    } = this.props;

    return (
      <Dialog show={show} onOutsideClick={onHide}>
        <ResponsivePanel width={446}>
          <Esc onClick={onHide} />
          <header>{title}</header>
          <main>
            <Content>
              <IconWarning />
              <div>{children}</div>
            </Content>
          </main>
          <footer>
            <Button kind="default" onClick={onHide}>
              {cancel}
            </Button>
            <Button onClick={onSubmit}>
              {isSubmitting ? (
                <Spin>
                  <IconLoading height={14} width={14} />
                </Spin>
              ) : (
                ok
              )}
            </Button>
          </footer>
        </ResponsivePanel>
      </Dialog>
    );
  }
}

const enhance = compose(
  pure,
  withSubmittingState,
);
const ConfirmDialog: React.ComponentType<Props> = enhance(PureConfirmDialog);
ConfirmDialog.displayName = 'ConfirmDialog';

export default ConfirmDialog;
