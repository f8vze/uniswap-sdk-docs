[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [nonfungiblePositionManager](../modules/nonfungiblepositionmanager.md) / CollectOptions

# Interface: CollectOptions

[nonfungiblePositionManager](../modules/nonfungiblepositionmanager.md).CollectOptions

## Properties

### expectedCurrencyOwed0

• **expectedCurrencyOwed0**: *CurrencyAmount*<Currency\>

Expected value of tokensOwed0, including as-of-yet-unaccounted-for fees/liquidity value to be burned

Defined in: [nonfungiblePositionManager.ts:91](https://github.com/Uniswap/uniswap-v3-sdk/blob/c42b4d4/src/nonfungiblePositionManager.ts#L91)

___

### expectedCurrencyOwed1

• **expectedCurrencyOwed1**: *CurrencyAmount*<Currency\>

Expected value of tokensOwed1, including as-of-yet-unaccounted-for fees/liquidity value to be burned

Defined in: [nonfungiblePositionManager.ts:96](https://github.com/Uniswap/uniswap-v3-sdk/blob/c42b4d4/src/nonfungiblePositionManager.ts#L96)

___

### recipient

• **recipient**: *string*

The account that should receive the tokens.

Defined in: [nonfungiblePositionManager.ts:101](https://github.com/Uniswap/uniswap-v3-sdk/blob/c42b4d4/src/nonfungiblePositionManager.ts#L101)

___

### tokenId

• **tokenId**: BigintIsh

Indicates the ID of the position to collect for.

Defined in: [nonfungiblePositionManager.ts:86](https://github.com/Uniswap/uniswap-v3-sdk/blob/c42b4d4/src/nonfungiblePositionManager.ts#L86)
