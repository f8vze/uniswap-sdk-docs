[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [entities/pool](../modules/entities_pool.md) / Pool

# Class: Pool

[entities/pool](../modules/entities_pool.md).Pool

Represents a V3 pool

## Table of contents

### Constructors

- [constructor](entities_pool.pool.md#constructor)

### Properties

- [\_token0Price](entities_pool.pool.md#_token0price)
- [\_token1Price](entities_pool.pool.md#_token1price)
- [fee](entities_pool.pool.md#fee)
- [liquidity](entities_pool.pool.md#liquidity)
- [sqrtRatioX96](entities_pool.pool.md#sqrtratiox96)
- [tickCurrent](entities_pool.pool.md#tickcurrent)
- [tickDataProvider](entities_pool.pool.md#tickdataprovider)
- [token0](entities_pool.pool.md#token0)
- [token1](entities_pool.pool.md#token1)

### Accessors

- [chainId](entities_pool.pool.md#chainid)
- [tickSpacing](entities_pool.pool.md#tickspacing)
- [token0Price](entities_pool.pool.md#token0price)
- [token1Price](entities_pool.pool.md#token1price)

### Methods

- [getInputAmount](entities_pool.pool.md#getinputamount)
- [getOutputAmount](entities_pool.pool.md#getoutputamount)
- [involvesToken](entities_pool.pool.md#involvestoken)
- [priceOf](entities_pool.pool.md#priceof)
- [swap](entities_pool.pool.md#swap)
- [getAddress](entities_pool.pool.md#getaddress)

## Constructors

### constructor

\+ **new Pool**(`tokenA`: *Token*, `tokenB`: *Token*, `fee`: [*FeeAmount*](../enums/constants.feeamount.md), `sqrtRatioX96`: BigintIsh, `liquidity`: BigintIsh, `tickCurrent`: *number*, `ticks?`: [*TickDataProvider*](../interfaces/entities_tickdataprovider.tickdataprovider.md) \| ([*Tick*](entities_tick.tick.md) \| [*TickConstructorArgs*](../interfaces/entities_tick.tickconstructorargs.md))[]): [*Pool*](entities_pool.pool.md)

Construct a pool

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenA` | *Token* | one of the tokens in the pool |
| `tokenB` | *Token* | the other token in the pool |
| `fee` | [*FeeAmount*](../enums/constants.feeamount.md) | the fee in hundredths of a bips of the input amount of every swap that is collected by the pool |
| `sqrtRatioX96` | BigintIsh | the sqrt of the current ratio of amounts of token1 to token0 |
| `liquidity` | BigintIsh | the current value of in range liquidity |
| `tickCurrent` | *number* | the current tick of the pool |
| `ticks` | [*TickDataProvider*](../interfaces/entities_tickdataprovider.tickdataprovider.md) \| ([*Tick*](entities_tick.tick.md) \| [*TickConstructorArgs*](../interfaces/entities_tick.tickconstructorargs.md))[] | the current state of the pool ticks or a data provider that can return tick data |

**Returns:** [*Pool*](entities_pool.pool.md)

Defined in: [entities/pool.ts:46](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L46)

## Properties

### \_token0Price

• `Private` `Optional` **\_token0Price**: *default*

Defined in: [entities/pool.ts:41](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L41)

___

### \_token1Price

• `Private` `Optional` **\_token1Price**: *default*

Defined in: [entities/pool.ts:42](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L42)

___

### fee

• `Readonly` **fee**: [*FeeAmount*](../enums/constants.feeamount.md)

Defined in: [entities/pool.ts:35](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L35)

___

### liquidity

• `Readonly` **liquidity**: *default*

Defined in: [entities/pool.ts:37](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L37)

___

### sqrtRatioX96

• `Readonly` **sqrtRatioX96**: *default*

Defined in: [entities/pool.ts:36](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L36)

___

### tickCurrent

• `Readonly` **tickCurrent**: *number*

Defined in: [entities/pool.ts:38](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L38)

___

### tickDataProvider

• `Readonly` **tickDataProvider**: [*TickDataProvider*](../interfaces/entities_tickdataprovider.tickdataprovider.md)

Defined in: [entities/pool.ts:39](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L39)

___

### token0

• `Readonly` **token0**: *Token*

Defined in: [entities/pool.ts:33](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L33)

___

### token1

• `Readonly` **token1**: *Token*

Defined in: [entities/pool.ts:34](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L34)

## Accessors

### chainId

• get **chainId**(): *number*

Returns the chain ID of the tokens in the pool.

**Returns:** *number*

Defined in: [entities/pool.ts:135](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L135)

___

### tickSpacing

• get **tickSpacing**(): *number*

**Returns:** *number*

Defined in: [entities/pool.ts:279](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L279)

___

### token0Price

• get **token0Price**(): *default*

Returns the current mid price of the pool in terms of token0, i.e. the ratio of token1 over token0

**Returns:** *default*

Defined in: [entities/pool.ts:96](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L96)

___

### token1Price

• get **token1Price**(): *default*

Returns the current mid price of the pool in terms of token1, i.e. the ratio of token0 over token1

**Returns:** *default*

Defined in: [entities/pool.ts:111](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L111)

## Methods

### getInputAmount

▸ **getInputAmount**(`outputAmount`: *default*): *Promise*<[*default*, [*Pool*](entities_pool.pool.md)]\>

Given a desired output amount of a token, return the computed input amount and a pool with state updated after the trade

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputAmount` | *default* | the output amount for which to quote the input amount |

**Returns:** *Promise*<[*default*, [*Pool*](entities_pool.pool.md)]\>

Defined in: [entities/pool.ts:163](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L163)

___

### getOutputAmount

▸ **getOutputAmount**(`inputAmount`: *default*): *Promise*<[*default*, [*Pool*](entities_pool.pool.md)]\>

Given an input amount of a token, return the computed output amount and a pool with state updated after the trade

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputAmount` | *default* | the input amount for which to quote the output amount |

**Returns:** *Promise*<[*default*, [*Pool*](entities_pool.pool.md)]\>

Defined in: [entities/pool.ts:143](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L143)

___

### involvesToken

▸ **involvesToken**(`token`: *Token*): *boolean*

Returns true if the token is either token0 or token1

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | *Token* | to check |

**Returns:** *boolean*

Defined in: [entities/pool.ts:89](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L89)

___

### priceOf

▸ **priceOf**(`token`: *Token*): *default*

Return the price of the given token in terms of the other token in the pool.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | *Token* | token to return price of |

**Returns:** *default*

Defined in: [entities/pool.ts:127](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L127)

___

### swap

▸ `Private`**swap**(`zeroForOne`: *boolean*, `amountSpecified`: *default*, `sqrtPriceLimitX96?`: *default*): *Promise*<{ `amountCalculated`: *default* ; `liquidity`: *default* ; `sqrtRatioX96`: *default* ; `tickCurrent`: *number*  }\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `zeroForOne` | *boolean* |
| `amountSpecified` | *default* |
| `sqrtPriceLimitX96?` | *default* |

**Returns:** *Promise*<{ `amountCalculated`: *default* ; `liquidity`: *default* ; `sqrtRatioX96`: *default* ; `tickCurrent`: *number*  }\>

Defined in: [entities/pool.ts:179](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L179)

___

### getAddress

▸ `Static`**getAddress**(`tokenA`: *Token*, `tokenB`: *Token*, `fee`: [*FeeAmount*](../enums/constants.feeamount.md)): *string*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `tokenA` | *Token* |
| `tokenB` | *Token* |
| `fee` | [*FeeAmount*](../enums/constants.feeamount.md) |

**Returns:** *string*

Defined in: [entities/pool.ts:44](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/pool.ts#L44)
