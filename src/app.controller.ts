import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response } from 'express'
import { AppService } from './app.service';
import { Request } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('pass')
  getSimplePassword(@Res() response: Response): void {
    this.appService.getSimplePassword().subscribe((axiosResponse => {
      response.json(axiosResponse.data)
    }))
  }

  @Get('dados_para_maratona')
  getLoginData (@Req() request: Request){
    console.log (request.body.loginData)
    return this.appService.getLoginData(request.body.loginData)
  }
}
