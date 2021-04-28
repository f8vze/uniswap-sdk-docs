[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [utils/sqrtPriceMath](../modules/utils_sqrtpricemath.md) / SqrtPriceMath

# Class: SqrtPriceMath

[utils/sqrtPriceMath](../modules/utils_sqrtpricemath.md).SqrtPriceMath

## Table of contents

### Constructors

- [constructor](utils_sqrtpricemath.sqrtpricemath.md#constructor)

### Methods

- [getAmount0Delta](utils_sqrtpricemath.sqrtpricemath.md#getamount0delta)
- [getAmount1Delta](utils_sqrtpricemath.sqrtpricemath.md#getamount1delta)
- [getNextSqrtPriceFromAmount0RoundingUp](utils_sqrtpricemath.sqrtpricemath.md#getnextsqrtpricefromamount0roundingup)
- [getNextSqrtPriceFromAmount1RoundingDown](utils_sqrtpricemath.sqrtpricemath.md#getnextsqrtpricefromamount1roundingdown)
- [getNextSqrtPriceFromInput](utils_sqrtpricemath.sqrtpricemath.md#getnextsqrtpricefrominput)
- [getNextSqrtPriceFromOutput](utils_sqrtpricemath.sqrtpricemath.md#getnextsqrtpricefromoutput)

## Constructors

### constructor

\+ `Private`**new SqrtPriceMath**(): [*SqrtPriceMath*](utils_sqrtpricemath.sqrtpricemath.md)

Cannot be constructed.

**Returns:** [*SqrtPriceMath*](utils_sqrtpricemath.sqrtpricemath.md)

Defined in: [utils/sqrtPriceMath.ts:19](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/sqrtPriceMath.ts#L19)

## Methods

### getAmount0Delta

▸ `Static`**getAmount0Delta**(`sqrtRatioAX96`: *default*, `sqrtRatioBX96`: *default*, `liquidity`: *default*, `roundUp`: *boolean*): *default*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `sqrtRatioAX96` | *default* |
| `sqrtRatioBX96` | *default* |
| `liquidity` | *default* |
| `roundUp` | *boolean* |

**Returns:** *default*

Defined in: [utils/sqrtPriceMath.ts:25](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/sqrtPriceMath.ts#L25)

___

### getAmount1Delta

▸ `Static`**getAmount1Delta**(`sqrtRatioAX96`: *default*, `sqrtRatioBX96`: *default*, `liquidity`: *default*, `roundUp`: *boolean*): *default*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `sqrtRatioAX96` | *default* |
| `sqrtRatioBX96` | *default* |
| `liquidity` | *default* |
| `roundUp` | *boolean* |

**Returns:** *default*

Defined in: [utils/sqrtPriceMath.ts:38](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/sqrtPriceMath.ts#L38)

___

### getNextSqrtPriceFromAmount0RoundingUp

▸ `Static` `Private`**getNextSqrtPriceFromAmount0RoundingUp**(`sqrtPX96`: *default*, `liquidity`: *default*, `amount`: *default*, `add`: *boolean*): *default*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `sqrtPX96` | *default* |
| `liquidity` | *default* |
| `amount` | *default* |
| `add` | *boolean* |

**Returns:** *default*

Defined in: [utils/sqrtPriceMath.ts:71](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/sqrtPriceMath.ts#L71)

___

### getNextSqrtPriceFromAmount1RoundingDown

▸ `Static` `Private`**getNextSqrtPriceFromAmount1RoundingDown**(`sqrtPX96`: *default*, `liquidity`: *default*, `amount`: *default*, `add`: *boolean*): *default*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `sqrtPX96` | *default* |
| `liquidity` | *default* |
| `amount` | *default* |
| `add` | *boolean* |

**Returns:** *default*

Defined in: [utils/sqrtPriceMath.ts:100](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/sqrtPriceMath.ts#L100)

___

### getNextSqrtPriceFromInput

▸ `Static`**getNextSqrtPriceFromInput**(`sqrtPX96`: *default*, `liquidity`: *default*, `amountIn`: *default*, `zeroForOne`: *boolean*): *default*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `sqrtPX96` | *default* |
| `liquidity` | *default* |
| `amountIn` | *default* |
| `zeroForOne` | *boolean* |

**Returns:** *default*

Defined in: [utils/sqrtPriceMath.ts:48](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/sqrtPriceMath.ts#L48)

___

### getNextSqrtPriceFromOutput

▸ `Static`**getNextSqrtPriceFromOutput**(`sqrtPX96`: *default*, `liquidity`: *default*, `amountOut`: *default*, `zeroForOne`: *boolean*): *default*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `sqrtPX96` | *default* |
| `liquidity` | *default* |
| `amountOut` | *default* |
| `zeroForOne` | *boolean* |

**Returns:** *default*

Defined in: [utils/sqrtPriceMath.ts:57](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/sqrtPriceMath.ts#L57)
