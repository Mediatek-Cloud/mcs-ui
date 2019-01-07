// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'react-overlay-pack';
import { IconLoading } from '../Icons';
import IconWarning from '../IconWarning';
import Button from '../Button';
import { ResponsivePanel } from '../Form';
import Spin from '../Spin';
import { Esc } from '../KeyHandler';
import { Content } from './styled-components';
import { type SetSubmitting } from '../utils/type.flow';
import useSubmittingState from '../hooks/useSubmittingState';

export type Props = {
  children: React.Node,
  show: boolean,
  onHide: (e: any) => void,
  onSubmit: ({ setSubmitting: SetSubmitting }) => Promise<void> | void,
  title: string,
  ok: string,
  cancel: string,
};

const ConfirmDialog = ({
  onHide,
  show,
  children,
  title,
  ok,
  cancel,
  onSubmit,
}: Props) => {
  const { isSubmitting, setSubmitting } = useSubmittingState();
  const onSubmitMemo = React.useCallback(
    (e: SyntheticEvent<any>) => {
      if (e && e.preventDefault) e.preventDefault();
      if (isSubmitting) return;
      onSubmit({ setSubmitting });
    },
    [isSubmitting, setSubmitting, onSubmit],
  );

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
          <Button onClick={onSubmitMemo}>
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
};

ConfirmDialog.displayName = 'ConfirmDialog';
ConfirmDialog.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired, // (e: any) => void,
  onSubmit: PropTypes.func.isRequired, // ({ setSubmitting: SetSubmitting }) => Promise<void> | void
  title: PropTypes.string.isRequired,
  ok: PropTypes.string.isRequired,
  cancel: PropTypes.string.isRequired,
};

export default React.memo(ConfirmDialog);
