import Typography from 'typography';
import CodePlugin from 'typography-plugin-code'
import lawtonTheme from 'typography-theme-lawton'

lawtonTheme.plugins = [
    new CodePlugin(),
];

const typography = new Typography(lawtonTheme);

export default typography;