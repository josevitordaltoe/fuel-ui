import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { TextProps } from '../Text';
import { Text } from '../Text';

import { useFormControlProps } from './FormControl';
import * as styles from './styles';

export type FormErrorMessageProps = TextProps;

type ObjProps = {
  id: string;
};

export const FormErrorMessage = createComponent<
  FormErrorMessageProps,
  ObjProps
>(({ as = 'div', color, children, className, ...props }) => {
  const { id, ...parentProps } = useFormControlProps();
  const classes = cx(
    'fuel_form--error-message',
    className,
    styles.errorMessage({})
  );

  const customProps = {
    ...props,
    id: `feedback${id}`,
    className: classes,
  };

  return (
    <Text
      as={as}
      {...customProps}
      color={color || 'red9'}
      aria-hidden={!parentProps?.isInvalid}
    >
      {children}
    </Text>
  );
});

FormErrorMessage.id = 'FormErrorMessage';
