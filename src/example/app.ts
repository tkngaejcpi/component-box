import { injectTheme, registerComponent } from '@lib/Component';

import { defaultTheme, pair } from './components/Test';

registerComponent(pair);
injectTheme(pair, defaultTheme);
