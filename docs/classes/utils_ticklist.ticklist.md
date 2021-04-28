[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [utils/tickList](../modules/utils_ticklist.md) / TickList

# Class: TickList

[utils/tickList](../modules/utils_ticklist.md).TickList

Utility methods for interacting with sorted lists of ticks

## Table of contents

### Constructors

- [constructor](utils_ticklist.ticklist.md#constructor)

### Methods

- [binarySearch](utils_ticklist.ticklist.md#binarysearch)
- [getTick](utils_ticklist.ticklist.md#gettick)
- [isAtOrAboveLargest](utils_ticklist.ticklist.md#isatorabovelargest)
- [isBelowSmallest](utils_ticklist.ticklist.md#isbelowsmallest)
- [nextInitializedTick](utils_ticklist.ticklist.md#nextinitializedtick)
- [nextInitializedTickWithinOneWord](utils_ticklist.ticklist.md#nextinitializedtickwithinoneword)
- [validateList](utils_ticklist.ticklist.md#validatelist)

## Constructors

### constructor

\+ `Private`**new TickList**(): [*TickList*](utils_ticklist.ticklist.md)

Cannot be constructed

**Returns:** [*TickList*](utils_ticklist.ticklist.md)

Defined in: [utils/tickList.ts:14](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/tickList.ts#L14)

## Methods

### binarySearch

▸ `Static` `Private`**binarySearch**(`ticks`: readonly [*Tick*](entities_tick.tick.md)[], `tick`: *number*): *number*

Finds the largest tick in the list of ticks that is less than or equal to tick

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `ticks` | readonly [*Tick*](entities_tick.tick.md)[] | list of ticks |
| `tick` | *number* | tick to find the largest tick that is less than or equal to tick |

**Returns:** *number*

Defined in: [utils/tickList.ts:62](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/tickList.ts#L62)

___

### getTick

▸ `Static`**getTick**(`ticks`: readonly [*Tick*](entities_tick.tick.md)[], `index`: *number*): [*Tick*](entities_tick.tick.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `ticks` | readonly [*Tick*](entities_tick.tick.md)[] |
| `index` | *number* |

**Returns:** [*Tick*](entities_tick.tick.md)

Defined in: [utils/tickList.ts:50](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/tickList.ts#L50)

___

### isAtOrAboveLargest

▸ `Static`**isAtOrAboveLargest**(`ticks`: readonly [*Tick*](entities_tick.tick.md)[], `tick`: *number*): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `ticks` | readonly [*Tick*](entities_tick.tick.md)[] |
| `tick` | *number* |

**Returns:** *boolean*

Defined in: [utils/tickList.ts:45](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/tickList.ts#L45)

___

### isBelowSmallest

▸ `Static`**isBelowSmallest**(`ticks`: readonly [*Tick*](entities_tick.tick.md)[], `tick`: *number*): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `ticks` | readonly [*Tick*](entities_tick.tick.md)[] |
| `tick` | *number* |

**Returns:** *boolean*

Defined in: [utils/tickList.ts:40](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/tickList.ts#L40)

___

### nextInitializedTick

▸ `Static`**nextInitializedTick**(`ticks`: readonly [*Tick*](entities_tick.tick.md)[], `tick`: *number*, `lte`: *boolean*): [*Tick*](entities_tick.tick.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `ticks` | readonly [*Tick*](entities_tick.tick.md)[] |
| `tick` | *number* |
| `lte` | *boolean* |

**Returns:** [*Tick*](entities_tick.tick.md)

Defined in: [utils/tickList.ts:83](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/tickList.ts#L83)

___

### nextInitializedTickWithinOneWord

▸ `Static`**nextInitializedTickWithinOneWord**(`ticks`: readonly [*Tick*](entities_tick.tick.md)[], `tick`: *number*, `lte`: *boolean*, `tickSpacing`: *number*): [*number*, *boolean*]

#### Parameters:

| Name | Type |
| :------ | :------ |
| `ticks` | readonly [*Tick*](entities_tick.tick.md)[] |
| `tick` | *number* |
| `lte` | *boolean* |
| `tickSpacing` | *number* |

**Returns:** [*number*, *boolean*]

Defined in: [utils/tickList.ts:101](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/tickList.ts#L101)

___

### validateList

▸ `Static`**validateList**(`ticks`: [*Tick*](entities_tick.tick.md)[], `tickSpacing`: *number*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `ticks` | [*Tick*](entities_tick.tick.md)[] |
| `tickSpacing` | *number* |

**Returns:** *void*

Defined in: [utils/tickList.ts:20](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/tickList.ts#L20)
