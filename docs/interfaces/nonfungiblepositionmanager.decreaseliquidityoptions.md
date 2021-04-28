[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [nonfungiblePositionManager](../modules/nonfungiblepositionmanager.md) / DecreaseLiquidityOptions

# Interface: DecreaseLiquidityOptions

[nonfungiblePositionManager](../modules/nonfungiblepositionmanager.md).DecreaseLiquidityOptions

Options for producing the calldata to exit a position.

## Table of contents

### Properties

- [burnToken](nonfungiblepositionmanager.decreaseliquidityoptions.md#burntoken)
- [deadline](nonfungiblepositionmanager.decreaseliquidityoptions.md#deadline)
- [liquidityPercentage](nonfungiblepositionmanager.decreaseliquidityoptions.md#liquiditypercentage)
- [nonfungiblePositionManagerAddressOverride](nonfungiblepositionmanager.decreaseliquidityoptions.md#nonfungiblepositionmanageraddressoverride)
- [receiveEther](nonfungiblepositionmanager.decreaseliquidityoptions.md#receiveether)
- [recipient](nonfungiblepositionmanager.decreaseliquidityoptions.md#recipient)
- [slippageTolerance](nonfungiblepositionmanager.decreaseliquidityoptions.md#slippagetolerance)
- [tokenId](nonfungiblepositionmanager.decreaseliquidityoptions.md#tokenid)

## Properties

### burnToken

• `Optional` **burnToken**: *boolean*

Whether the NFT should be burned after exiting the entire position, by default true

Defined in: [nonfungiblePositionManager.ts:118](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L118)

___

### deadline

• **deadline**: BigintIsh

When the transaction expires, in epoch seconds.

Defined in: [nonfungiblePositionManager.ts:108](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L108)

___

### liquidityPercentage

• **liquidityPercentage**: *default*

The percentage of position liquidity to exit. Optional--if not specified, exit the entire position

Defined in: [nonfungiblePositionManager.ts:93](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L93)

___

### nonfungiblePositionManagerAddressOverride

• **nonfungiblePositionManagerAddressOverride**: *string*

Defined in: [nonfungiblePositionManager.ts:121](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L121)

___

### receiveEther

• `Optional` **receiveEther**: *boolean*

Whether to receive ether. If true, one of the pool tokens must be WETH, by default false

Defined in: [nonfungiblePositionManager.ts:113](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L113)

___

### recipient

• **recipient**: *string*

The account that should receive the tokens.

Defined in: [nonfungiblePositionManager.ts:103](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L103)

___

### slippageTolerance

• **slippageTolerance**: *default*

How much the pool price is allowed to move.

Defined in: [nonfungiblePositionManager.ts:98](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L98)

___

### tokenId

• **tokenId**: BigintIsh

The ID of the token to exit

Defined in: [nonfungiblePositionManager.ts:88](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L88)
