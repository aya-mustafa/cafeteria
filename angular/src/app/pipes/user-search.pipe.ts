import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users:any[], term:string): any[]  {
    return users.filter((user)=>
    {
        return user.name.toLowerCase().includes(term.toLowerCase())
    })
}
}