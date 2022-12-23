export class LoggerService{
    LoggMessage(name: string, status: string){
        console.log("A New User with UserName: "+name+" and Status: "+status+" has been Added.");
        
    }
}