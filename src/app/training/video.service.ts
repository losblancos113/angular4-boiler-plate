import { Injectable } from '@angular/core';
import Video from '../classes/video';

@Injectable()

export class VideoService {
  getVideos(): Video[] {
    return [
      {
        id: 1,
        title: 'Cold',
        artist: 'Rich Brian',
        iframe: '<iframe ' +
        'width="560" height="315" ' +
        'src="https://www.youtube-nocookie.com/embed/Q17z9a03YaM" ' +
        'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      },
      {
        id: 2,
        title: 'Glow like dat',
        artist: 'Rich Brian',
        iframe: '<iframe ' +
        'width="560" ' +
        'height="315" ' +
        'src="https://www.youtube.com/embed/adDD43CvrUc" ' +
        'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      }
    ];
  }
}
