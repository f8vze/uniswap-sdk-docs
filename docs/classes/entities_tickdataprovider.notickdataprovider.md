[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [entities/tickDataProvider](../modules/entities_tickdataprovider.md) / NoTickDataProvider

# Class: NoTickDataProvider

[entities/tickDataProvider](../modules/entities_tickdataprovider.md).NoTickDataProvider

This tick data provider does not know how to fetch any tick data. It throws whenever it is required. Useful if you
do not need to load tick data for your use case.

## Implements

* [*TickDataProvider*](../interfaces/entities_tickdataprovider.tickdataprovider.md)

## Table of contents

### Constructors

- [constructor](entities_tickdataprovider.notickdataprovider.md#constructor)

### Properties

- [ERROR\_MESSAGE](entities_tickdataprovider.notickdataprovider.md#error_message)

### Methods

- [getTick](entities_tickdataprovider.notickdataprovider.md#gettick)
- [nextInitializedTickWithinOneWord](entities_tickdataprovider.notickdataprovider.md#nextinitializedtickwithinoneword)

## Constructors

### constructor

\+ **new NoTickDataProvider**(): [*NoTickDataProvider*](entities_tickdataprovider.notickdataprovider.md)

**Returns:** [*NoTickDataProvider*](entities_tickdataprovider.notickdataprovider.md)

## Properties

### ERROR\_MESSAGE

▪ `Static` `Private` **ERROR\_MESSAGE**: *string*= 'No tick data provider was given'

Defined in: [entities/tickDataProvider.ts:27](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/tickDataProvider.ts#L27)

## Methods

### getTick

▸ **getTick**(`_tick`: *number*): *Promise*<{ `liquidityNet`: BigintIsh  }\>

Return information corresponding to a specific tick

#### Parameters:

| Name | Type |
| :------ | :------ |
| `_tick` | *number* |

**Returns:** *Promise*<{ `liquidityNet`: BigintIsh  }\>

Implementation of: [TickDataProvider](../interfaces/entities_tickdataprovider.tickdataprovider.md)

Defined in: [entities/tickDataProvider.ts:28](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/tickDataProvider.ts#L28)

___

### nextInitializedTickWithinOneWord

▸ **nextInitializedTickWithinOneWord**(`_tick`: *number*, `_lte`: *boolean*, `_tickSpacing`: *number*): *Promise*<[*number*, *boolean*]\>

Return the next tick that is initialized within a single word

#### Parameters:

| Name | Type |
| :------ | :------ |
| `_tick` | *number* |
| `_lte` | *boolean* |
| `_tickSpacing` | *number* |

**Returns:** *Promise*<[*number*, *boolean*]\>

Implementation of: [TickDataProvider](../interfaces/entities_tickdataprovider.tickdataprovider.md)

Defined in: [entities/tickDataProvider.ts:32](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/tickDataProvider.ts#L32)