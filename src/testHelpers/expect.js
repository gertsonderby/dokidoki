import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';
import unexpectedSinon from 'unexpected-sinon';

const expect = unexpected
  .clone()
  .use(unexpectedReact)
  .use(unexpectedSinon);

export default expect;
