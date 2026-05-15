import { handleRequest } from '../../src/api/router.js';

export default {
  fetch(request: Request): Promise<Response> {
    return handleRequest(request);
  },
};
