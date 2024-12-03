import { Geolocation } from '@nativescript/geolocation';
import { CoreTypes } from '@nativescript/core';

export class LocationService {
  async getCurrentLocation() {
    const hasPermission = await this.enableLocation();
    if (!hasPermission) {
      throw new Error('Location permission denied');
    }

    return await Geolocation.getCurrentLocation({
      desiredAccuracy: CoreTypes.Accuracy.high,
      maximumAge: 5000,
      timeout: 20000
    });
  }

  private async enableLocation(): Promise<boolean> {
    const isEnabled = await Geolocation.isEnabled();
    if (!isEnabled) {
      return await Geolocation.enableLocationRequest();
    }
    return true;
  }
}