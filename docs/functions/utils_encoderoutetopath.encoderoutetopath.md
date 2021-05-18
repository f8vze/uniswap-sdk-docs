[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [utils/encodeRouteToPath](../modules/utils_encoderoutetopath.md) / encodeRouteToPath

# Function: encodeRouteToPath

[utils/encodeRouteToPath](../modules/utils_encoderoutetopath.md).encodeRouteToPath

▸ **encodeRouteToPath**(`route`: [*Route*](../classes/entities_route.route.md)<Currency, Currency\>, `exactOutput`: *boolean*): *string*

Converts a route to a hex encoded path

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `route` | [*Route*](../classes/entities_route.route.md)<Currency, Currency\> | the v3 path to convert to an encoded path |
| `exactOutput` | *boolean* | whether the route should be encoded in reverse, for making exact output swaps |

**Returns:** *string*

Defined in: [utils/encodeRouteToPath.ts:11](https://github.com/Uniswap/uniswap-v3-sdk/blob/c42b4d4/src/utils/encodeRouteToPath.ts#L11)
