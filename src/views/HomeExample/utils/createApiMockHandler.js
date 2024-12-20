import { delay, http, HttpResponse } from 'msw';
import { postsMock } from '../mocks/postsMock.js';
import { getApiBaseUrl } from '../../../shared/utils/getApiBaseUrl.js';

const createApiMockHandler = () => {
  return [
    http.get(`${getApiBaseUrl}/posts`, async () => {
      await delay();
      return HttpResponse.json(postsMock);
    }),
  ];
};

export { createApiMockHandler };
