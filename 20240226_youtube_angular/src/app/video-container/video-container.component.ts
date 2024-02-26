import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Video = {
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

  videos:Video[] = []

  constructor() {
    this.generateVideos()
  }
  
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

  generateVideos() {
    for (let i = 0; i < 60; i++) {
      const video = {
        "title": this.generateTitle(),
        "youtuber": this.generateYoutuber(),
        "views": this.generateViews(),
        "year": this.generateYear()
      };
      this.videos.push(video);
    }
  }

  generateTitle() {
    return "Title " + (Math.floor(Math.random() * 100) + 1);
  }

  generateYoutuber() {
    return "Channel " + (Math.floor(Math.random() * 100) + 1);
  }

  generateViews() {
    return Math.floor(Math.random() * (1000000000 - 10000 + 1)) + 10000;
  }

  generateYear() {
    return Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010;
  }
}

