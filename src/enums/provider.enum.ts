export enum Provider {
  YOUVERIFY = 'youverify',
  PAYSTACK = 'paystack',
  TRULIOO = 'trulioo',
  IDENFY = 'idenfy',
}

/**
 * The enum values here are made of part provider name and part provider code. This is to enable us to easily differentiate between different providers offering  services across diverse geopolitical zones.
 *
 * So in our verification provider model, we can treat the provider code as unique instead of the provider enum. This gives us some extra flexibility down the line.
 */
export enum ProviderCode {
  YOUVERIFY = 'yvf.ng',
  PAYSTACK = 'pystk.ng',
  TRULIOO = 'trulioo.us',
  IDENFY = 'idenfy.ger',
}