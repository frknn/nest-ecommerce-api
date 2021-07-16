import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MerchantsService } from 'src/merchants/merchants.service';
import { RegistrationDto } from './dto/registration.dto';
const bcrypt = require('bcrypt')
import { Merchant } from 'src/merchants/entities/merchant.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import TokenPayload from './tokenPayload.interface';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly merchantsService: MerchantsService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }


  async register(registrationDto: RegistrationDto): Promise<Merchant> {
    const hashedPassword = await bcrypt.hash(registrationDto.password, 10);
    const createdMerchant = await this.merchantsService.create(
      {
        ...registrationDto,
        password: hashedPassword
      }
    );

    return createdMerchant;
  }

  async getAuthenticatedUser(email: string, plainTextPassword: string): Promise<Merchant> {
    try {
      const merchant = await this.merchantsService.findOneByEmail(email);
      await this.verifyPassword(plainTextPassword, merchant.password);


      return merchant;
    } catch (error) {
      throw new UnauthorizedException("Eposta ya da şifre yanlış")
    }
  }

  private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(plainTextPassword, hashedPassword);
    if (!isPasswordMatching) {
      throw new UnauthorizedException("Eposta ya da şifre yanlış")
    }
  }

  public getCookieWithJwtToken(merchantId: number) {
    const payload: TokenPayload = { merchantId };
    const token = this.jwtService.sign(payload);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
  }

  public getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }
}
