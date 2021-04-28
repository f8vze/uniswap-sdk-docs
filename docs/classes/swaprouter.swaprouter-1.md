[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [swapRouter](../modules/swaprouter.md) / SwapRouter

# Class: SwapRouter

[swapRouter](../modules/swaprouter.md).SwapRouter

Represents the Uniswap V2 SwapRouter, and has static methods for helping execute trades.

## Hierarchy

* [*SelfPermit*](selfpermit.selfpermit-1.md)

  ↳ **SwapRouter**

## Table of contents

### Constructors

- [constructor](swaprouter.swaprouter-1.md#constructor)

### Properties

- [ADDRESS](swaprouter.swaprouter-1.md#address)
- [INTERFACE](swaprouter.swaprouter-1.md#interface)

### Methods

- [encodePermit](swaprouter.swaprouter-1.md#encodepermit)
- [swapCallParameters](swaprouter.swaprouter-1.md#swapcallparameters)

## Constructors

### constructor

\+ `Private`**new SwapRouter**(): [*SwapRouter*](swaprouter.swaprouter-1.md)

Cannot be constructed.

**Returns:** [*SwapRouter*](swaprouter.swaprouter-1.md)

Overrides: [SelfPermit](selfpermit.selfpermit-1.md)

Defined in: [swapRouter.ts:49](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/swapRouter.ts#L49)

## Properties

### ADDRESS

▪ `Static` **ADDRESS**: *string*

Defined in: [swapRouter.ts:48](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/swapRouter.ts#L48)

___

### INTERFACE

▪ `Static` **INTERFACE**: *Interface*

Overrides: [SelfPermit](selfpermit.selfpermit-1.md).[INTERFACE](selfpermit.selfpermit-1.md#interface)

Defined in: [swapRouter.ts:49](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/swapRouter.ts#L49)

## Methods

### encodePermit

▸ `Static`**encodePermit**(`token`: *Token*, `options`: [*PermitOptions*](../modules/selfpermit.md#permitoptions)): *string*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `token` | *Token* |
| `options` | [*PermitOptions*](../modules/selfpermit.md#permitoptions) |

**Returns:** *string*

Inherited from: [SelfPermit](selfpermit.selfpermit-1.md)

Defined in: [selfPermit.ts:34](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/selfPermit.ts#L34)

___

### swapCallParameters

▸ `Static`**swapCallParameters**(`trade`: [*Trade*](entities_trade.trade.md), `options`: [*TradeOptions*](../interfaces/swaprouter.tradeoptions.md)): [*MethodParameters*](../interfaces/utils_calldata.methodparameters.md)

Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `trade` | [*Trade*](entities_trade.trade.md) | to produce call parameters for |
| `options` | [*TradeOptions*](../interfaces/swaprouter.tradeoptions.md) | options for the call parameters |

**Returns:** [*MethodParameters*](../interfaces/utils_calldata.methodparameters.md)

Defined in: [swapRouter.ts:63](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/swapRouter.ts#L63)