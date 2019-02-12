/* global window */
// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { withTheme } from 'styled-components';
import { List, AutoSizer } from 'react-virtualized';
import { ClickOutside, Transition } from 'react-overlay-pack';
import rafThrottle from 'raf-throttle';
import { IconFold } from '../Icons';
import Input from '../Input';
import Rotate from '../Rotate';
import MenuItem from '../MenuItem';
import { StyledButton } from '../Select/styled-components';
import {
  StyledMenu,
  StyledInputGroup,
  NoRowWrapper,
  FakeInputValue,
  TextOverflow,
} from './styled-components';
import { type ItemProps, type ItemValueMapper } from './type.flow';
import {
  filterBy,
  getInputValue,
  getPlaceholder,
  getMenuItemHeight,
  getMenuHeight,
} from './utils';
import { type Kind, type Theme, type ReactRef } from '../utils/type.flow';

export type Props = {
  value: any,
  onChange: (value: any) => Promise<void> | void,
  items: Array<ItemProps>,
  kind?: Kind,
  placeholder?: string,
  focus?: boolean,
  noRowsRenderer?: ({ onClose: () => void }) => React.Node,
  disableFilter?: boolean,
  itemValueMapper?: ItemValueMapper,
  // Note: innerRef for the problem of outside click in dialog
  menuRef?: React.ElementRef<any>,
};
type InnerProps = {
  value: any,
  onChange: (value: any) => Promise<void> | void,
  items: Array<ItemProps>,
  kind?: Kind,
  placeholder?: string,
  focus?: boolean,
  noRowsRenderer?: ({ onClose: () => void }) => React.Node,
  disableFilter: boolean,
  itemValueMapper: ItemValueMapper,
  // Note: innerRef for the problem of outside click in dialog
  menuRef?: React.ElementRef<any>,
  theme: Theme,
};
type State = {
  isOpen: boolean,
  filter: string,
  menuWidth: number,
};

const defaultItemValueMapper = (item: ItemProps) => item.children;

class PureInputSelect extends React.PureComponent<InnerProps, State> {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired, // (value: any) => Promise<void> | void,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
        children: PropTypes.node.isRequired,
      }),
    ).isRequired,
    kind: PropTypes.string,
    placeholder: PropTypes.string,
    noRowsRenderer: PropTypes.func,
    focus: PropTypes.bool,
    disableFilter: PropTypes.bool,
    itemValueMapper: PropTypes.func,
    menuRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.object }),
    ]),
  };

  static defaultProps = {
    kind: 'primary',
    noRowsRenderer: () => <NoRowWrapper>No results found</NoRowWrapper>,
    disableFilter: false,
    itemValueMapper: defaultItemValueMapper,
  };

  constructor(props) {
    super(props);

    this.state = { isOpen: false, filter: '', menuWidth: 0 };
    this.input = React.createRef();
    this.inputGroup = React.createRef();
    this.resize = rafThrottle(() => {
      const inputGroup = this.inputGroup.current;
      const menuWidth =
        inputGroup &&
        inputGroup.getBoundingClientRect &&
        inputGroup.getBoundingClientRect().width;

      this.setState(() => ({ menuWidth: parseInt(menuWidth, 10) }));
    });
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    if (this.resize && this.resize.cancel) this.resize.cancel();
  }

  onOpen = () => this.setState(() => ({ isOpen: true }));

  onClose = () => this.setState(() => ({ isOpen: false }));

  onClickOutside = (e: any) => {
    const node = this.input.current;
    if (node && node.contains(e.target)) return; // Note: Omit input target.
    this.onClose();
  };

  onToggle = (e: any) => {
    e.preventDefault();
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  onFilterChange = (e: any) => {
    const { value }: { value: string } = e.target;
    this.setState(() => ({ filter: value }));
  };

  rowRenderer = ({
    key,
    index,
    style,
  }: {
    key: string,
    index: number,
    style: Object,
  }): React.Element<typeof MenuItem> => {
    const { items, value, onChange, itemValueMapper } = this.props;
    const { filter } = this.state;
    const { onClose } = this;
    const filteredItems = filterBy({ items, filter, itemValueMapper });
    const item = filteredItems[index];
    const onItemClick = () => {
      onChange(item.value);
      this.setState(() => ({ filter: '' }));
      onClose();
    };

    return (
      <MenuItem
        key={key}
        style={style}
        active={item.value === value}
        onClick={onItemClick}
        title={itemValueMapper(item)}
      >
        <TextOverflow>{item.children}</TextOverflow>
      </MenuItem>
    );
  };

  input: ReactRef<React.ElementRef<typeof Input>>;

  inputGroup: ReactRef<React.ElementRef<typeof StyledInputGroup>>;

  resize: () => void;

  render() {
    const {
      items,
      kind,
      placeholder,
      theme,
      value,
      noRowsRenderer,
      focus,
      menuRef,
      disableFilter,
      itemValueMapper,
      ...otherProps
    } = this.props;
    const { menuWidth, isOpen, filter } = this.state;
    const {
      onOpen,
      onClose,
      onToggle,
      onFilterChange,
      rowRenderer,
      onClickOutside,
      input,
      inputGroup,
    } = this;

    const filteredItems = filterBy({ items, filter, itemValueMapper });
    const activeIndex = R.findIndex(R.propEq('value', value))(items);
    const activeItem = items[activeIndex];
    const menuItemHeight = getMenuItemHeight(theme);
    const menuHeight = getMenuHeight({ filteredItems, menuItemHeight });

    return (
      <div>
        {/* Input filter */}
        <StyledInputGroup ref={inputGroup} disableFilter={disableFilter}>
          <Input
            ref={input}
            kind={kind}
            focus={focus || isOpen}
            value={getInputValue({
              isOpen,
              filter,
              activeItem,
              itemValueMapper,
            })}
            onChange={onFilterChange}
            placeholder={getPlaceholder({ isOpen, activeItem, placeholder })}
            readOnly={disableFilter}
            onClick={onOpen}
            onFocus={onOpen}
            autoComplete="off"
            {...R.omit(['onChange'])(otherProps)}
          />
          {isOpen && activeItem && !filter && (
            <FakeInputValue defaultValue={itemValueMapper(activeItem)} />
          )}
          <StyledButton
            kind={kind}
            active={focus || isOpen}
            square
            onClick={onToggle}
          >
            <Rotate active={focus || isOpen}>
              <IconFold />
            </Rotate>
          </StyledButton>
        </StyledInputGroup>

        {/* Dropdown overlay */}
        {isOpen && (
          <ClickOutside onClick={onClickOutside}>
            <Transition
              style={{ transform: 'translateY(0px)' }} // From
              animation={{ translateY: 5, ease: 'easeOutQuart', duration: 350 }} // To
              component={false}
            >
              <StyledMenu key="menu" ref={menuRef} width={menuWidth}>
                {R.isEmpty(filteredItems) &&
                  noRowsRenderer &&
                  noRowsRenderer({ onClose })}
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <List
                      width={width}
                      height={menuHeight}
                      rowCount={filteredItems.length}
                      rowHeight={menuItemHeight}
                      rowRenderer={rowRenderer}
                      scrollToIndex={activeIndex}
                    />
                  )}
                </AutoSizer>
              </StyledMenu>
            </Transition>
          </ClickOutside>
        )}
      </div>
    );
  }
}

const InputSelect: React.ComponentType<Props> = withTheme(PureInputSelect);
InputSelect.displayName = 'InputSelect';

export default InputSelect;
