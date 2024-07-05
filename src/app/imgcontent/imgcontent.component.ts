import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-imgcontent',
  templateUrl: './imgcontent.component.html',
  styleUrls: ['./imgcontent.component.css']
})

export class ImgcontentComponent {
  tagSelected: string | null = null;

  onClick(tag: string) {
    this.tagSelected = tag;
  }

  @HostListener('document:click', ['$event.target'])
  onFocusOut(target: any) {
    const checkbox = target.closest('input[type="checkbox"]');
    if (!checkbox) {
      this.tagSelected = null;
    }
  }
}
