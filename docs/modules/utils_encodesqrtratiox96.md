[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / utils/encodeSqrtRatioX96

# Module: utils/encodeSqrtRatioX96

## Table of contents

### Functions

- [encodeSqrtRatioX96](utils_encodesqrtratiox96.md#encodesqrtratiox96)

## Functions

### encodeSqrtRatioX96

▸ **encodeSqrtRatioX96**(`amount1`: BigintIsh, `amount0`: BigintIsh): JSBI

Returns the sqrt ratio as a Q64.96 corresponding to a given ratio of amount1 and amount0

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount1` | BigintIsh | the numerator amount, i.e. amount of token1 |
| `amount0` | BigintIsh | the denominator amount, i.en amount of token0 |

**Returns:** JSBI

Defined in: [utils/encodeSqrtRatioX96.ts:9](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/encodeSqrtRatioX96.ts#L9)
