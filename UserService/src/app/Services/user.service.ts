export class UserService{
    users = [
        {name: 'John', status: 'active'},
        {name: 'Mark', status: 'inactive'},
        {name: 'Sreve', status: 'active'}
    ]

    AddNewuser(name: string, status: string){
        this.users.push({name: name, status: status})
    }
}