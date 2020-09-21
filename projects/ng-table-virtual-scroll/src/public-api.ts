/*
 * Public API Surface of ng-fixed-size-table-virtual-scroll
 */

import { BehaviorSubject, Subject } from 'rxjs';
import { CdkVirtualScrollViewport, VirtualScrollStrategy } from '@angular/cdk/scrolling';
import { ListRange } from '@angular/cdk/collections';
import { TSVStrategyConfigs } from './lib/fixed-size-table-virtual-scroll-strategy';


export * from './lib/table-virtual-scroll.module';
export * from './lib/table-item-size.directive';
// export * from './lib/fixed-size-table-virtual-scroll-strategy';
export * from './lib/table-data-source';

export declare class FixedSizeTableVirtualScrollStrategy implements VirtualScrollStrategy {
    private rowHeight;
    private headerHeight;
    private footerHeight;
    private bufferMultiplier;
    private indexChange;
    stickyChange: Subject<number>;
    viewport: CdkVirtualScrollViewport;
    renderedRangeStream: BehaviorSubject<ListRange>;
    scrolledIndexChange: import("rxjs").Observable<number>;
    readonly dataLength: number;
    private _dataLength;
    attach(viewport: CdkVirtualScrollViewport): void;
    detach(): void;
    onContentScrolled(): void;
    onDataLengthChanged(): void;
    onContentRendered(): void;
    onRenderedOffsetChanged(): void;
    scrollToIndex(index: number, behavior?: ScrollBehavior): void;
    setConfig(configs: TSVStrategyConfigs): void;
    private updateContent;
}
