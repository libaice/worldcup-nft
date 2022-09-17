import abi from './abi_min.json';

export const env = 'prod';
export const etherscanHost = env == 'prod' ? 'https://etherscan.io' : 'https://rinkeby.etherscan.io';
export const contract = {
  addressOrName: env == 'prod' ? '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d' : '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
  contractInterface: abi,
}