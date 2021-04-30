---
Id: 
---

# Class: NonfungiblePositionManager

[nonfungiblePositionManager](../modules/nonfungiblepositionmanager.md).NonfungiblePositionManager

## Hierarchy

* [*SelfPermit*](selfpermit.selfpermit-1.md)

  ↳ **NonfungiblePositionManager**

## Properties

### ADDRESS

▪ `Static` **ADDRESS**: *string*

Defined in: [nonfungiblePositionManager.ts:130](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L130)

___

### INTERFACE

▪ `Static` **INTERFACE**: *Interface*

Overrides: [SelfPermit](selfpermit.selfpermit-1.md).[INTERFACE](selfpermit.selfpermit-1.md#interface)

Defined in: [nonfungiblePositionManager.ts:131](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L131)

## Methods

### decreaseCallParameters

▸ `Static`**decreaseCallParameters**(`position`: [*Position*](entities_position.position.md), `options`: [*DecreaseLiquidityOptions*](../interfaces/nonfungiblepositionmanager.decreaseliquidityoptions.md)): [*MethodParameters*](../interfaces/utils_calldata.methodparameters.md)

Produces the calldata for completely or partially exiting a position

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [*Position*](entities_position.position.md) | the position to exit |
| `options` | [*DecreaseLiquidityOptions*](../interfaces/nonfungiblepositionmanager.decreaseliquidityoptions.md) | additional information necessary for generating the calldata |

**Returns:** [*MethodParameters*](../interfaces/utils_calldata.methodparameters.md)

Defined in: [nonfungiblePositionManager.ts:239](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L239)

___

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

### increaseCallParameters

▸ `Static`**increaseCallParameters**(`position`: [*Position*](entities_position.position.md), `options`: [*IncreaseLiquidityOptions*](../modules/nonfungiblepositionmanager.md#increaseliquidityoptions)): [*MethodParameters*](../interfaces/utils_calldata.methodparameters.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `position` | [*Position*](entities_position.position.md) |
| `options` | [*IncreaseLiquidityOptions*](../modules/nonfungiblepositionmanager.md#increaseliquidityoptions) |

**Returns:** [*MethodParameters*](../interfaces/utils_calldata.methodparameters.md)

Defined in: [nonfungiblePositionManager.ts:140](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/nonfungiblePositionManager.ts#L140)
