import { PassThrough } from 'node:stream';
import { HelmetProvider } from 'react-helmet-async';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export type RenderResult = {
  html: string;
  head: string;
};

type HelmetState = {
  title: { toString(): string };
  meta: { toString(): string };
  link: { toString(): string };
  script: { toString(): string };
};

export const render = (url: string): Promise<RenderResult> =>
  new Promise((resolve, reject) => {
    const helmetContext: { helmet?: HelmetState } = {};
    const output = new PassThrough();
    let html = '';
    let settled = false;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    output.setEncoding('utf8');
    output.on('data', (chunk) => {
      html += chunk;
    });
    output.on('end', () => {
      if (settled) return;
      settled = true;
      if (timeout) clearTimeout(timeout);
      const helmet = helmetContext.helmet;
      const head = helmet
        ? [
            helmet.title.toString(),
            helmet.meta.toString(),
            helmet.link.toString(),
            helmet.script.toString(),
          ]
            .filter(Boolean)
            .join('\n')
        : '';
      resolve({ html, head });
    });
    output.on('error', (error) => {
      if (settled) return;
      settled = true;
      if (timeout) clearTimeout(timeout);
      reject(error);
    });

    const { pipe, abort } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          pipe(output);
        },
        onShellError(error) {
          if (settled) return;
          settled = true;
          if (timeout) clearTimeout(timeout);
          reject(error);
        },
        onError(error) {
          console.error(`[prerender] React render error for ${url}:`, error);
        },
      },
    );

    timeout = setTimeout(() => {
      if (settled) return;
      settled = true;
      abort();
      reject(new Error(`Timed out pre-rendering ${url}`));
    }, 15000);
  });
