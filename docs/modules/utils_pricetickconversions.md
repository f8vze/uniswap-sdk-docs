[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / utils/priceTickConversions

# Module: utils/priceTickConversions

## Table of contents

### Functions

- [priceToClosestTick](utils_pricetickconversions.md#pricetoclosesttick)
- [tickToPrice](utils_pricetickconversions.md#ticktoprice)

## Functions

### priceToClosestTick

▸ **priceToClosestTick**(`price`: Price): *number*

Returns the first tick for which the given price is greater than or equal to the tick price

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `price` | Price | for which to return the closest tick that represents a price less than or equal to the input price, i.e. the price of the returned tick is less than or equal to the input price |

**Returns:** *number*

Defined in: [utils/priceTickConversions.ts:30](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/priceTickConversions.ts#L30)

___

### tickToPrice

▸ **tickToPrice**(`baseToken`: Token, `quoteToken`: Token, `tick`: *number*): Price

Returns a price object corresponding to the input tick and the base/quote token
Inputs must be tokens because the address order is used to interpret the price represented by the tick

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseToken` | Token | the base token of the price |
| `quoteToken` | Token | the quote token of the price |
| `tick` | *number* | the tick for which to return the price |

**Returns:** Price

Defined in: [utils/priceTickConversions.ts:15](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/utils/priceTickConversions.ts#L15)
