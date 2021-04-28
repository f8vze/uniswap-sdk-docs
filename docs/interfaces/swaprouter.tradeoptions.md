[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [swapRouter](../modules/swaprouter.md) / TradeOptions

# Interface: TradeOptions

[swapRouter](../modules/swaprouter.md).TradeOptions

Options for producing the arguments to send call to the router.

## Table of contents

### Properties

- [deadline](swaprouter.tradeoptions.md#deadline)
- [inputTokenPermit](swaprouter.tradeoptions.md#inputtokenpermit)
- [recipient](swaprouter.tradeoptions.md#recipient)
- [slippageTolerance](swaprouter.tradeoptions.md#slippagetolerance)
- [sqrtPriceLimitX96](swaprouter.tradeoptions.md#sqrtpricelimitx96)
- [swapRouterAddressOverride](swaprouter.tradeoptions.md#swaprouteraddressoverride)

## Properties

### deadline

• **deadline**: BigintIsh

When the transaction expires, in epoch seconds.

Defined in: [swapRouter.ts:28](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/swapRouter.ts#L28)

___

### inputTokenPermit

• `Optional` **inputTokenPermit**: StandardPermitArguments \| AllowedPermitArguments

The optional permit parameters for spending the input.

Defined in: [swapRouter.ts:33](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/swapRouter.ts#L33)

___

### recipient

• **recipient**: *string*

The account that should receive the output.

Defined in: [swapRouter.ts:23](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/swapRouter.ts#L23)

___

### slippageTolerance

• **slippageTolerance**: *default*

How much the execution price is allowed to move unfavorably from the trade execution price.

Defined in: [swapRouter.ts:18](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/swapRouter.ts#L18)

___

### sqrtPriceLimitX96

• `Optional` **sqrtPriceLimitX96**: *string* \| *number* \| *default*

The optional price limit for the trade.

Defined in: [swapRouter.ts:38](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/swapRouter.ts#L38)

___

### swapRouterAddressOverride

• **swapRouterAddressOverride**: *string*

Defined in: [swapRouter.ts:41](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/swapRouter.ts#L41)