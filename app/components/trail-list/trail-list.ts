import { EventData, NavigatedData, Page } from '@nativescript/core';
import { TrailListViewModel } from './trail-list-view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  page.bindingContext = new TrailListViewModel();
}

export function onLoaded(args: EventData) {
  const page = <Page>args.object;
  const vm = page.bindingContext as TrailListViewModel;
  vm.loadTrails();
}