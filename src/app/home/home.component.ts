import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var Typed: any;
declare var particlesJS : any;
declare var data : any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit,AfterViewInit {
	public homeData = data['Home'];
	public particlesEnabled = false; // Toggle for particles effect (default: off)

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}
	ngOnInit(): void {
		if (this.particlesEnabled) {
			particlesJS.load('particles-js');
		}
		this.changeDetectorRef.detectChanges();
	}
	ngAfterViewInit() {
		new Typed("#element",{stringsElement:'#typed-strings',typeSpeed: 100,backDelay: 3000,loop:true});
	}
}
