import { ToggleModule } from '../../solve/toggle/toggle.js';
import { FilterModule } from '../../solve/filter/filter.js';
import { FetchModule } from '../../solve/fetch/fetch.js';

import { filterStyles } from './styles.js';

export const JsLoadRouter = (title) => {
    if (title === 'Toggle Task') ToggleModule();
    if (title === 'Filter Task') {
        filterStyles();
        FilterModule();
    };
    if (title === 'Fetch Task') FetchModule();
}