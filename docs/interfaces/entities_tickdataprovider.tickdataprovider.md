[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [entities/tickDataProvider](../modules/entities_tickdataprovider.md) / TickDataProvider

# Interface: TickDataProvider

[entities/tickDataProvider](../modules/entities_tickdataprovider.md).TickDataProvider

Provides information about ticks

## Implemented by

* [*NoTickDataProvider*](../classes/entities_tickdataprovider.notickdataprovider.md)
* [*TickListDataProvider*](../classes/entities_ticklistdataprovider.ticklistdataprovider.md)

## Table of contents

### Methods

- [getTick](entities_tickdataprovider.tickdataprovider.md#gettick)
- [nextInitializedTickWithinOneWord](entities_tickdataprovider.tickdataprovider.md#nextinitializedtickwithinoneword)

## Methods

### getTick

▸ **getTick**(`tick`: *number*): *Promise*<{ `liquidityNet`: BigintIsh  }\>

Return information corresponding to a specific tick

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `tick` | *number* | the tick to load |

**Returns:** *Promise*<{ `liquidityNet`: BigintIsh  }\>

Defined in: [entities/tickDataProvider.ts:11](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/tickDataProvider.ts#L11)

___

### nextInitializedTickWithinOneWord

▸ **nextInitializedTickWithinOneWord**(`tick`: *number*, `lte`: *boolean*, `tickSpacing`: *number*): *Promise*<[*number*, *boolean*]\>

Return the next tick that is initialized within a single word

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `tick` | *number* | the current tick |
| `lte` | *boolean* | whether the next tick should be lte the current tick |
| `tickSpacing` | *number* | the tick spacing of the pool |

**Returns:** *Promise*<[*number*, *boolean*]\>

Defined in: [entities/tickDataProvider.ts:19](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/tickDataProvider.ts#L19)