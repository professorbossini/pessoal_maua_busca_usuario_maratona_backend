import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import dados from './data/dados_finais_para_boca'

@Injectable()
export class AppService {
  
  constructor(private httpService: HttpService){

  }
  getHello(): string {
    return 'Hello World!';
  }

  getSimplePassword (): Observable< AxiosResponse< string > >{
    console.log(dados[0])
    return this.httpService.get('https://www.dinopass.com/password/simple')
  }

  getLoginData (termoDeBusca: string): Object[] {    
    return dados
          .filter (dado => dado.userfullname.includes(termoDeBusca))
          .map (dado => {
            return {username: dado.username, userpassword: dado.userpassword}
          })

  }
}
