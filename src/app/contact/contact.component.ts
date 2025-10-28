import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;
declare var particlesJS : any;

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
	public contactData = data['Contact'];
	public particlesEnabled = false; // Toggle for particles effect (default: off)

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		if (this.particlesEnabled) {
			particlesJS.load('particles-js2');
		}
		this.changeDetectorRef.detectChanges();
	}
}
