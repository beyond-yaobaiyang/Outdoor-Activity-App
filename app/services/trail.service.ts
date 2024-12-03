import { Observable, ObservableArray } from '@nativescript/core';
import { Trail } from '../models/trail.model';

export class TrailService extends Observable {
  private trails: ObservableArray<Trail> = new ObservableArray<Trail>();

  getTrails(): ObservableArray<Trail> {
    // TODO: Implement API call
    return this.trails;
  }

  getTrailById(id: string): Trail | undefined {
    return this.trails.find(trail => trail.id === id);
  }

  searchTrails(query: string): Trail[] {
    return this.trails.filter(trail => 
      trail.name.toLowerCase().includes(query.toLowerCase()) ||
      trail.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterTrails(difficulty?: string, minDistance?: number, maxDistance?: number): Trail[] {
    return this.trails.filter(trail => {
      let matches = true;
      if (difficulty) {
        matches = matches && trail.difficulty === difficulty;
      }
      if (minDistance) {
        matches = matches && trail.distance >= minDistance;
      }
      if (maxDistance) {
        matches = matches && trail.distance <= maxDistance;
      }
      return matches;
    });
  }
}