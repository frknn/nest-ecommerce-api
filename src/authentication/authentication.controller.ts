import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Merchant } from 'src/merchants/entities/merchant.entity';
import { AuthenticationService } from './authentication.service';
import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/registration.dto';
import JwtAuthenticationGuard from './jwt-authentication.guard';
import { LocalAuthenticationGuard } from './localAuthentication.guard';
import RequestWithMerchant from './requestWithUser.interface';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @Post('register')
  async register(@Body() registrationDto: RegistrationDto): Promise<Merchant> {
    return this.authenticationService.register(registrationDto)
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async login(
    @Req() request: RequestWithMerchant,
    @Res({ passthrough: true }) response: Response
  ) {
    const { user } = request;
    const cookie = this.authenticationService.getCookieWithJwtToken(user.id)
    response.setHeader('Set-Cookie', cookie);

    return user
  }

  @HttpCode(200)
  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  async logout(
    @Req() request: RequestWithMerchant,
    @Res({ passthrough: true }) response: Response
  ) {
    response.setHeader('Set-Cookie', this.authenticationService.getCookieForLogOut());
    return "Authentication cookie'si silindi"
  }


  @UseGuards(JwtAuthenticationGuard)
  @Get()
  authenticate(@Req() request: RequestWithMerchant) {
    const merchant = request.user;
    return merchant;
  }
}
