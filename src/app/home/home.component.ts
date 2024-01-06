import { Component, NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCoffee, faStar, faCompressAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faCoffee, faStar, faCompressAlt, faCheck, faTimes);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faCompressAlt = faCompressAlt;
  faHeart = faHeart;
  faCoffee = faCoffee;
  faStar = faStar;
  faCheck = faCheck;
  faTimes = faTimes;
}

@NgModule({
  declarations: [HomeComponent],
  imports: [FontAwesomeModule],
  exports: [FaIconComponent], // Certifique-se de exportar FaIconComponent se necessário
})
export class HomeModule { }
