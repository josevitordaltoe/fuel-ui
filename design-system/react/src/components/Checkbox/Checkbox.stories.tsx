import { Form } from '../Form';
import { Stack } from '../Stack';

import type { CheckboxProps } from './Checkbox';
import { Checkbox } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Form/Checkbox',
  argTypes: {},
};

export const Usage = (args: CheckboxProps) => (
  <Stack>
    <Form.Control css={{ flexDirection: 'row' }}>
      <Checkbox {...args} defaultChecked id="c1" />
      <Form.Label htmlFor="c1">Accept terms and condition</Form.Label>
    </Form.Control>
  </Stack>
);

export const Disabled = (args: CheckboxProps) => (
  <Stack>
    <Form.Control css={{ flexDirection: 'row' }} isDisabled>
      <Checkbox {...args} defaultChecked id="c1" />
      <Form.Label htmlFor="c1">Accept terms and condition</Form.Label>
    </Form.Control>
  </Stack>
);

export const ReadOnly = (args: CheckboxProps) => (
  <Stack>
    <Form.Control css={{ flexDirection: 'row' }} isReadOnly>
      <Checkbox {...args} defaultChecked id="c1" />
      <Form.Label htmlFor="c1">Accept terms and condition</Form.Label>
    </Form.Control>
  </Stack>
);
