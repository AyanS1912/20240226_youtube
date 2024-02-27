import { Component } from '@angular/core';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrl: './subscriber.component.css'
})
export class SubscriberComponent {


  videos= [

    {
      "img_url": "https://picsum.photos/200/300?random=1",
      "title": "Title 1",
      "youtuber": "Channel 1",
      "views": 10234567,
      "year": 2019,
      
    },

    

  ]

  formatcount = function formatCount(count: number): string {
    if( count > 1000000000){
      return (count/1000000000).toFixed(2)+'B'
    }
    else if (count >= 1000000) {
        return (count / 1000000).toFixed(2) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(2) + 'K';
    } else {
        return count.toString();
    }
  }
  

}
