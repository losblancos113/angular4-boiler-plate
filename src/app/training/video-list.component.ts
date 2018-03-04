import { Component, OnInit } from '@angular/core';
import Video from '../classes/video';
import { VideoService } from './video.service';

@Component({
  selector: 'app-video-list',
  moduleId: module.id,
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = 'Learning CAC';
  videos: Video[];
  constructor(private _videoservice: VideoService) {
  }
  ngOnInit(): void {
    // console.log('Hello init');
    this.videos = this._videoservice.getVideos();
  }
}
