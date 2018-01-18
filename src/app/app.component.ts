import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    animalImage: any;
    
    chooseAnimal(e){
        this.animalImage = document.getElementById("img-container");
        let animal = e.target.value;
        let tempImg: string;
        
        switch(animal){
            
            case "a giraffe":
               tempImg  = "../assets/giraffe-image.jpg";
            break;
            
            case "a tiger":
                tempImg= "../assets/tiger-image.jpg";
            break;
            
            case "a rhino":
                tempImg= "../assets/rhino-image.jpg";
            break;
                
            default:
                tempImg  = "../assets/giraffe-image.jpg";
            break;
            
        }
        this.animalImage.style.background = `url(${tempImg}) center center no-repeat`;
        console.log(tempImg); 
    }
}
