import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDropdownOpen = false;

  constructor() {}

  ngOnInit() {
    this.setupNavbarToggler();
  }

  setupNavbarToggler() {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;

    navbarToggler.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      } else {
        navbarCollapse.classList.add('show');
      }
    });

    document.addEventListener('click', function(event) {
      if (!(navbarCollapse.contains(event.target as Node)) && !(navbarToggler.contains(event.target as Node))) {
        navbarCollapse.classList.remove('show');
      }
    });

    // Select the menu icon and close icon
    const menuIcon = document.querySelector('.menu-icon') as HTMLElement;
    const closeIcon = document.querySelector('.close-icon') as HTMLElement;

    // Add event listener to toggle icons when menu is clicked
    navbarToggler.addEventListener('click', () => {
      menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline' : 'none';
      closeIcon.style.display = closeIcon.style.display === 'none' ? 'inline' : 'none';
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!(event.target instanceof HTMLElement && event.target.closest('.user-dropdown'))) {
      this.isDropdownOpen = false;
    }
  }
}
