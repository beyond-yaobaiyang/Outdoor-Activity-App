import { Application } from '@nativescript/core';
import { enableLocationServices } from '@nativescript/geolocation';

enableLocationServices().then(() => {
  Application.run({ moduleName: 'app-root' });
}).catch(err => {
  console.error('Error enabling location services:', err);
  Application.run({ moduleName: 'app-root' });
});