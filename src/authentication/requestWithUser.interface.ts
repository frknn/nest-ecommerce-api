import { Request } from 'express';
import { Merchant } from 'src/merchants/entities/merchant.entity';

interface RequestWithMerchant extends Request {
  user: Merchant;
}

export default RequestWithMerchant;