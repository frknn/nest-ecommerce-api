import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Merchant } from "src/merchants/entities/merchant.entity";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authenticationService: AuthenticationService,
  ) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<Merchant> {
    const merchant = await this.authenticationService.getAuthenticatedUser(email, password)

    return merchant;
  }
}