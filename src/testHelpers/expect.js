import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';

const expect = unexpected.clone().use(unexpectedReact);

export default expect;
