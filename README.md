# ComEth DApp

[![built-with openzeppelin](https://img.shields.io/badge/built%20with-OpenZeppelin-3677FF)](https://docs.openzeppelin.com/)

## _Built by "Rhino Team" for its certification project at Alyra, the Blockchain School_ !

[Rhino Team](./public/favicon.ico)

#### Developers : Sarah Marques, Stella Soler, Amine Benmissi, Guillaume Bézie

[![created-by LokieDieKatze](https://img.shields.io/badge/created%20by-LokiDieKatze-FFA07A)](https://github.com/LokiDieKatze)
[![created-by StellaGreen](https://img.shields.io/badge/created%20by-StellaGreen-FFA07A)](https://github.com/StellaGreen)
[![created-by Benmissi-A](https://img.shields.io/badge/created%20by-Benmissi-FFA07A)](https://github.com/Benmissi-A)
[![created-by LokieDieKatze](https://img.shields.io/badge/created%20by-GuillaumeB75-FFA07A)](https://github.com/GuillaumeB75)

---

## Description

- testnet use : Rinkeby
- **ComEth dApp**

  This repository contains a React project for our DAO-like ComEth DApp using the Ethereum Blockchain. There will be a "ComEth Factory" allowing a user to create a personalized ComEth project according to its own needs. Each ComEth gathers users who have common interests and offers them tools to organize their activity in a entirely decentralized way, including voting and managing the Ethers of a common pot.

---

## Installation

To use this DApp you need to "fork" this repository :

- Dapp_ComEth :

On your Git Bash, choose the location then:

```
git clone https://github.com/Benmissi-A/Dapp_ComEth
cd Dapp_ComEth
yarn
```

---

## Smart contracts

- **ComEthFactory.sol**

  This contract allows any user to create a ComEth by picking the options that applies best to its case. After filling out the form, a new ComEth will be created and deployed on Ethereum. The creator of the ComEth will automatically become the owner of the new ComEth Contract and will be the only member allowed to add new members to the ComEth.

- **ComEth.sol**

  Join your ComEth, pay your subscription and start submitting proposals to the community and vote! The amount of the subscription is defined in advance by the ComEth Owner and will remain the same. The subscription time lasts 4 weeks, after which the payment has to be proceeded again. The subscription starts at a specific time and does not depend on the day the user pays.

  Submit a proposal:
  Write a proposal and enter different possible vote options, a timelimit, an amount and payment address for the matching Ether transfer. An event is then emitted.

  Vote:
  You can vote if you are not banned and if you have the status "active" and are up-to-date with your subscription payments. An event is emitted but your choice is not saved.
  For a proposal to be approved, it must gather over 50 % of the total number of users. Once it is approved, the payment is processed: the defined amount will be transferred to the registered recipient.

  Quit your ComEth:
  You must not be banned if you wish to leave your ComEth. You will have to sort your payment situation out first.
  The amount that you can get back is calculated on the basis of your fair share (current amount of the common pot divided by the (weighted) number of users ).
