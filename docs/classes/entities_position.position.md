---
Id: 
---

# Class: Position

[entities/position](../modules/entities_position.md).Position

## Constructors

### constructor

\+ **new Position**(`__namedParameters`: PositionConstructorArgs): [*Position*](entities_position.position.md)

Constructs a position for a given pool with the given liquidity

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | PositionConstructorArgs |

**Returns:** [*Position*](entities_position.position.md)

Defined in: [entities/position.ts:30](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L30)

## Properties

### liquidity

• `Readonly` **liquidity**: *default*

Defined in: [entities/position.ts:25](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L25)

___

### pool

• `Readonly` **pool**: [*Pool*](entities_pool.pool.md)

Defined in: [entities/position.ts:22](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L22)

___

### tickLower

• `Readonly` **tickLower**: *number*

Defined in: [entities/position.ts:23](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L23)

___

### tickUpper

• `Readonly` **tickUpper**: *number*

Defined in: [entities/position.ts:24](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L24)

## Accessors

### amount0

• get **amount0**(): *default*

Returns the amount of token0 that this position's liquidity could be burned for at the current pool price

**Returns:** *default*

Defined in: [entities/position.ts:67](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L67)

___

### amount1

• get **amount1**(): *default*

Returns the amount of token1 that this position's liquidity could be burned for at the current pool price

**Returns:** *default*

Defined in: [entities/position.ts:99](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L99)

___

### mintAmounts

• get **mintAmounts**(): *Readonly*<{ `amount0`: *default* ; `amount1`: *default*  }\>

Returns the minimum amount that must be sent in order to mint the amount of liquidity held by the position at
the current price for the pool

**Returns:** *Readonly*<{ `amount0`: *default* ; `amount1`: *default*  }\>

Defined in: [entities/position.ts:132](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L132)

___

### token0PriceLower

• get **token0PriceLower**(): *default*

Returns the price of token0 at the lower tick

**Returns:** *default*

Defined in: [entities/position.ts:53](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L53)

___

### token0PriceUpper

• get **token0PriceUpper**(): *default*

Returns the price of token0 at the upper tick

**Returns:** *default*

Defined in: [entities/position.ts:60](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L60)

## Methods

### fromAmount0

▸ `Static`**fromAmount0**(`__namedParameters`: { `amount0`: BigintIsh ; `pool`: [*Pool*](entities_pool.pool.md) ; `tickLower`: *number* ; `tickUpper`: *number*  }): [*Position*](entities_position.position.md)

Computes a position with the maximum amount of liquidity received for a given amount of token0, assuming an unlimited amount of token1

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | - |
| `__namedParameters.amount0` | BigintIsh | the desired amount of token0 |
| `__namedParameters.pool` | [*Pool*](entities_pool.pool.md) | the pool for which the position is created |
| `__namedParameters.tickLower` | *number* | the lower tick |
| `__namedParameters.tickUpper` | *number* | the upper tick |

**Returns:** [*Position*](entities_position.position.md)

Defined in: [entities/position.ts:213](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L213)

___

### fromAmount1

▸ `Static`**fromAmount1**(`__namedParameters`: { `amount1`: BigintIsh ; `pool`: [*Pool*](entities_pool.pool.md) ; `tickLower`: *number* ; `tickUpper`: *number*  }): [*Position*](entities_position.position.md)

Computes a position with the maximum amount of liquidity received for a given amount of token1, assuming an unlimited amount of token0

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | - |
| `__namedParameters.amount1` | BigintIsh | the desired amount of token1 |
| `__namedParameters.pool` | [*Pool*](entities_pool.pool.md) | the pool for which the position is created |
| `__namedParameters.tickLower` | *number* | the lower tick |
| `__namedParameters.tickUpper` | *number* | the upper tick |

**Returns:** [*Position*](entities_position.position.md)

Defined in: [entities/position.ts:234](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L234)

___

### fromAmounts

▸ `Static`**fromAmounts**(`__namedParameters`: { `amount0`: BigintIsh ; `amount1`: BigintIsh ; `pool`: [*Pool*](entities_pool.pool.md) ; `tickLower`: *number* ; `tickUpper`: *number*  }): [*Position*](entities_position.position.md)

Computes the maximum amount of liquidity received for a given amount of token0, token1,
and the prices at the tick boundaries.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | - |
| `__namedParameters.amount0` | BigintIsh | token0 amount |
| `__namedParameters.amount1` | BigintIsh | token1 amount |
| `__namedParameters.pool` | [*Pool*](entities_pool.pool.md) | the pool for which the position should be created |
| `__namedParameters.tickLower` | *number* | the lower tick of the position |
| `__namedParameters.tickUpper` | *number* | the upper tick of the position |

**Returns:** [*Position*](entities_position.position.md)

Defined in: [entities/position.ts:183](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/position.ts#L183)
