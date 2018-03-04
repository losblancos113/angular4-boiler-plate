import { Component, Input } from '@angular/core';
import Video from '../../classes/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
export class VideoComponent {
  title = 'Learning CAC';
  @Input() video: Video;
}
