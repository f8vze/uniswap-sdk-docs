[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [utils/priceTickConversions](../modules/utils_pricetickconversions.md) / priceToClosestTick

# Function: priceToClosestTick

[utils/priceTickConversions](../modules/utils_pricetickconversions.md).priceToClosestTick

▸ **priceToClosestTick**(`price`: Price): *number*

Returns the first tick for which the given price is greater than or equal to the tick price

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `price` | Price | for which to return the closest tick that represents a price less than or equal to the input price, i.e. the price of the returned tick is less than or equal to the input price |

**Returns:** *number*

Defined in: [utils/priceTickConversions.ts:30](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/priceTickConversions.ts#L30)
