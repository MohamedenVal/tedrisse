import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  i = 0;
  slides = [
    {
      image: 'assets/slider/coding.jpg',
      title: 'حرر شغفك وطاقتك بالتعلم',
      highlight:'هنا في تدريس نعلمك أفضل المهارات بطريقة حديثة وأسلوب تفاعلي يساعدك على فهم الدروس وتطبيقها على أدض الواقع',
      action: 'تعلم الآن',
      link: 'courses'
    },
    {
      image: 'assets/slider/laptop.jpg',
      title: 'مستقبل زاهر',
      highlight: 'وسع آفاق طموحك باستثمار وقتك بكشل مثالي من أجل تحقيق أحلامك والوصول إلي اعلى إمكانياتك',
      action: 'مقالات مفيدة',
      link: 'intrests'
    },
    {
      image: 'assets/slider/laptop2.jpg',
      title: 'شارك الآخرين تجربتك ونجاحك',
      highlight: 'تواصل معنا هنا أو على وسائل التواصل الاجتماعي وأحصل على الارشادات اللازمة وساعد على هذه المنصة على التقدم ',
      action: 'تواصل معنا',
      link: 'about'
    },
  ]
  transform = false;

  constructor() { }

  ngOnInit(): void {
    // this.changeSlides();
  }

  public prevSlide() {
    this.transform  = !this.transform
    if (this.i <= 0) {
      this.i = this.slides.length! - 1;
    } else {
      this.i--;
    }
  }

  nextSlide() {
    this.transform  = !this.transform
    if (this.i === (this.slides.length -1)) {
      this.i = 0;
    } else {
      this.i++;
    }
  }

  changeSlides() {
    setInterval(() => {
      this.nextSlide()
    }, 3000)
  }
}
