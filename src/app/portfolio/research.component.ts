import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-research',
	templateUrl: './research.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
	public researchData = data['Research'];

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

}
