// footer.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

declare var data: any;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
    public footerData = data['Footer'];
    public isModalOpen = false; // Controls the visibility of the modal

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        this.changeDetectorRef.detach();
    }

    ngOnInit(): void {
        this.changeDetectorRef.detectChanges();
    }

    openModal(event: Event): void {
        event.preventDefault(); // Prevents default link behavior
        this.isModalOpen = true;
        this.changeDetectorRef.detectChanges(); // Manually trigger change detection
    }

    closeModal(): void {
        this.isModalOpen = false;
        this.changeDetectorRef.detectChanges(); // Manually trigger change detection
    }
}
