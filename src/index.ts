import {CrudApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {CrudApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new CrudApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
