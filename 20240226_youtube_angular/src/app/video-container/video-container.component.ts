import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Video = {
  img_url:string,
  title: string;
  youtuber: string;
  views: number;
  year: number;

};

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrl: './video-container.component.css'
})
export class VideoContainerComponent {

  videos:Video[] = [

    {
      "img_url": "https://picsum.photos/200/300?random=1",
      "title": "Title 1",
      "youtuber": "Channel 1",
      "views": 10234567,
      "year": 2019,
    },
    {
      "img_url": "https://picsum.photos/200/300?random=2",
      "title": "Title 2",
      "youtuber": "Channel 2",
      "views": 98765432,
      "year": 2020,
    },
    {
      "img_url": "https://picsum.photos/200/300?random=3",
      "title": "Title 3",
      "youtuber": "Channel 3",
      "views": 123456789,
      "year": 2021,

    },
    {
      "img_url": "https://picsum.photos/200/300?random=4",
      "title": "Title 4",
      "youtuber": "Channel 4",
      "views": 987654,
      "year": 2022,
      
    },
    {
      "img_url": "https://picsum.photos/200/300?random=5",
      "title": "Title 5",
      "youtuber": "Channel 5",
      "views": 456789,
      "year": 2023,
      
    },
    {
      "img_url": "https://picsum.photos/200/300?random=6",
      "title": "Title 6",
      "youtuber": "Channel 6",
      "views": 12345,
      "year": 2024,
      
    },
    {
      "img_url": "https://picsum.photos/200/300?random=7",
      "title": "Title 7",
      "youtuber": "Channel 7",
      "views": 987654321,
      "year": 2018,
    },
    {
      "img_url": "https://picsum.photos/200/300?random=8",
      "title": "Title 8",
      "youtuber": "Channel 8",
      "views": 654321,
      "year": 2017,
      
    },
    {
      "img_url": "https://picsum.photos/200/300?random=9",
      "title": "Title 9",
      "youtuber": "Channel 9",
      "views": 1234567,
      "year": 2016,
      
    },
    {
      "img_url": "https://picsum.photos/200/300?random=10",
      "title": "Title 10",
      "youtuber": "Channel 10",
      "views": 87654321,
      "year": 2015,
      
    },
    {
      "img_url": "https://picsum.photos/200/300?random=11",
      "title": "Title 11",
      "youtuber": "Channel 11",
      "views": 234567,
      "year": 2014,
      
    },
    {
      "img_url": "https://picsum.photos/200/300?random=12",
      "title": "Title 12",
      "youtuber": "Channel 12",
      "views": 6543210,
      "year": 2013,
      
    },
    {
      "img_url": "https://picsum.photos/200/300?random=13",
      "title": "Title 13",
      "youtuber": "Channel 13",
      "views": 789012,
      "year": 2012,
      
    },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=14",
    //   "title": "Title 14",
    //   "youtuber": "Channel 14",
    //   "views": 2345678,
    //   "year": 2011,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=15",
    //   "title": "Title 15",
    //   "youtuber": "Channel 15",
    //   "views": 890123,
    //   "year": 2010,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=16",
    //   "title": "Title 16",
    //   "youtuber": "Channel 16",
    //   "views": 3456789,
    //   "year": 2009,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=17",
    //   "title": "Title 17",
    //   "youtuber": "Channel 17",
    //   "views": 9012345,
    //   "year": 2008,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=18",
    //   "title": "Title 18",
    //   "youtuber": "Channel 18",
    //   "views": 12345678,
    //   "year": 2007,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=19",
    //   "title": "Title 19",
    //   "youtuber": "Channel 19",
    //   "views": 78901234,
    //   "year": 2006,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=20",
    //   "title": "Title 20",
    //   "youtuber": "Channel 20",
    //   "views": 34567890,
    //   "year": 2005,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=21",
    //   "title": "Title 21",
    //   "youtuber": "Channel 21",
    //   "views": 901234,
    //   "year": 2004,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=22",
    //   "title": "Title 22",
    //   "youtuber": "Channel 22",
    //   "views": 2345678,
    //   "year": 2003,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=23",
    //   "title": "Title 23",
    //   "youtuber": "Channel 23",
    //   "views": 8901234,
    //   "year": 2002,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=24",
    //   "title": "Title 24",
    //   "youtuber": "Channel 24",
    //   "views": 34567890,
    //   "year": 2001,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=25",
    //   "title": "Title 25",
    //   "youtuber": "Channel 25",
    //   "views": 90123456,
    //   "year": 2000,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=26",
    //   "title": "Title 26",
    //   "youtuber": "Channel 26",
    //   "views": 1234567,
    //   "year": 1999,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=27",
    //   "title": "Title 27",
    //   "youtuber": "Channel 27",
    //   "views": 78901234,
    //   "year": 1998,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=28",
    //   "title": "Title 28",
    //   "youtuber": "Channel 28",
    //   "views": 234567890,
    //   "year": 1997,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=29",
    //   "title": "Title 29",
    //   "youtuber": "Channel 29",
    //   "views": 901234567,
    //   "year": 1996,
      
    // },
    // {
    //   "img_url": "https://picsum.photos/200/300?random=30",
    //   "title": "Title 30",
    //   "youtuber": "Channel 30",
    //   "views": 1234567890,
    //   "year": 1995,
      
    // },
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

