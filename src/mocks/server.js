import { isMock } from '../shared/utils/isMock.js';

export const runMockServer = async () => {
  if (!isMock) {
    return;
  }

  const { setupWorker } = await import('msw/browser');
  const { handlers } = await import('./handlers');

  const server = setupWorker(...handlers);
  const muteWarnPatterns = ['chrome-extension'];

  return server.start({
    onUnhandledRequest(request, print) {
      if (
        muteWarnPatterns.some((muteWarnPattern) =>
          request.url.includes(muteWarnPattern)
        )
      ) {
        return;
      }

      print.warning();
    },
  });
};
