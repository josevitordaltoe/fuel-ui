import { testA11y } from '@fuel-ui/test-utils';

import { Switch } from './Switch';

describe('Switch', () => {
  it('a11y', async () => {
    await testA11y(
      <Switch defaultChecked id="s1" aria-label="Default switch" />
    );
  });
});
