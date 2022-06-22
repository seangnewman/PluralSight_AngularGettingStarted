import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";


@Component({
  selector : 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges{


  ngOnChanges(): void {
    this.cropWidth = this.rating * 15;
  }

  onClick(): void{
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

  @Input() rating: number = 0;
  cropWidth: number = 75;

  @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
}

