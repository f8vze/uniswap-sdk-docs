---
Id: 
---

# Class: NoTickDataProvider

[entities/tickDataProvider](../modules/entities_tickdataprovider.md).NoTickDataProvider

## Implements

* [*TickDataProvider*](../interfaces/entities_tickdataprovider.tickdataprovider.md)

## Constructors

### constructor

\+ **new NoTickDataProvider**(): [*NoTickDataProvider*](entities_tickdataprovider.notickdataprovider.md)

**Returns:** [*NoTickDataProvider*](entities_tickdataprovider.notickdataprovider.md)

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
