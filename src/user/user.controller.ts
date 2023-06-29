import { Controller ,Post,Get, Body, HttpStatus} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('/registration')
    public async registration(@Body() bodyData: any): Promise<any> {
        try {
            const checkUser = await this.userService.findbyEmail(bodyData.email);
            if(checkUser) return { response_code: HttpStatus.BAD_REQUEST, response_data:"User already register"}
            const users = await this.userService.regitration(bodyData);
        
            if (users) return { response_code: HttpStatus.OK, response_data: "Data Created Successfully" };
            else return { response_code: HttpStatus.BAD_REQUEST, response_data: "something went wrong" }
        } catch (e) {
            return { response_code: HttpStatus.INTERNAL_SERVER_ERROR, response_data: e.message }
        }

    }

    @Post('/login')
    public async login( @Body() payload:any):Promise<any>{
        const user = await this.userService.findbyEmail(payload.email);
        if(!user){
            return { response_code: HttpStatus.OK, response_data: "user not registeer" };
        }
        if(user){
        
        if(user && user.password === payload.password){
            const loginuser = await this.userService.loginUpdate(user._id)
             return { response_code: HttpStatus.OK, response_data: "Successfully login" };  
        }
        else{
            return { response_code: HttpStatus.BAD_REQUEST, response_data: "invalid credenatil" };
        }
    }
    }
}
