import { Injectable } from '@nestjs/common';
import { DoctoresService } from 'src/doctores/doctores.service';
import { RegistrantesService } from 'src/registrantes/registrantes.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly funcionarioService: RegistrantesService,
        private readonly doctorService: DoctoresService
    ){}

    public async validateUser(username, pass): Promise<any>{
        var userFind = await this.funcionarioService.findUsernameAndPassword(username, pass);
        var doctorFind = await this.doctorService.findUsernameAndPassword(username, pass);
        console.log(userFind);
        if(userFind.length != 0){
            return userFind;
        } else if(doctorFind.length != 0) {
            return doctorFind;
        } else {
            return null;
            
        }
        
    }
}
