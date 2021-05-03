[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [utils/maxLiquidityForAmounts](../modules/utils_maxliquidityforamounts.md) / maxLiquidityForAmounts

# Function: maxLiquidityForAmounts

[utils/maxLiquidityForAmounts](../modules/utils_maxliquidityforamounts.md).maxLiquidityForAmounts

▸ **maxLiquidityForAmounts**(`sqrtRatioCurrentX96`: JSBI, `sqrtRatioAX96`: JSBI, `sqrtRatioBX96`: JSBI, `amount0`: BigintIsh, `amount1`: BigintIsh): JSBI

Computes the maximum amount of liquidity received for a given amount of token0, token1,
and the prices at the tick boundaries.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `sqrtRatioCurrentX96` | JSBI | the current price |
| `sqrtRatioAX96` | JSBI | price at lower boundary |
| `sqrtRatioBX96` | JSBI | price at upper boundary |
| `amount0` | BigintIsh | token0 amount |
| `amount1` | BigintIsh | token1 amount |

**Returns:** JSBI

Defined in: [utils/maxLiquidityForAmounts.ts:29](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/maxLiquidityForAmounts.ts#L29)
