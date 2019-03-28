import { PipeTransform, Pipe} from '@angular/core';

@Pipe({
  name:"Salutation1"
})
export class Salutation implements PipeTransform {
    transform(namevalue:string,gender:string):string {
       if(gender='Male'){
         return 'Mr.'+namevalue;
       }
       else return 'Ms.'+namevalue;
    }

}
