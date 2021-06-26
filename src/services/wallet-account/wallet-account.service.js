import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class WalletAccountService {
  list(data) {
    promise = api.client.get(config.end_point.admin.wallet.accounts, {params: data});
    return promise;
  }

  transferFund(data) {
    promise = api.client.post(config.end_point.admin.wallet.transfer_fund, data);
    return promise;
  }

  balanceInquiry(data) {
    promise = api.client.get(config.end_point.admin.wallet.balance_inquiry + '/' + data);
    return promise;
  }

  transactionHistory(data) {
    promise = api.client.get(config.end_point.admin.wallet.transaction_history, {params: data});
    return promise;
  }

  exchangeRate(data) {
    promise = api.client.get(config.end_point.admin.wallet.exchange_rate, {params: data});
    return promise;
  }
}

export const walletAccountService = new WalletAccountService();
