import { Observable, ObservableArray } from '@nativescript/core';
import { Trail } from '../../models/trail.model';
import { TrailService } from '../../services/trail.service';

export class TrailListViewModel extends Observable {
  private trailService: TrailService;
  public trails: ObservableArray<Trail>;

  constructor() {
    super();
    this.trailService = new TrailService();
    this.trails = new ObservableArray<Trail>();
  }

  loadTrails() {
    this.trails = this.trailService.getTrails();
  }

  onTrailTap(args: any) {
    const trail = this.trails.getItem(args.index);
    // TODO: Navigate to trail details
  }

  onSearchTap() {
    // TODO: Show search interface
  }

  onFilterTap() {
    // TODO: Show filter dialog
  }

  onSortTap() {
    // TODO: Show sort options
  }
}