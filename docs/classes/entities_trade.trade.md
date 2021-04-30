---
Id: 
---

# Class: Trade

[entities/trade](../modules/entities_trade.md).Trade

## Properties

### inputAmount

• `Readonly` **inputAmount**: *default*

The input amount for the trade assuming no slippage.

Defined in: [entities/trade.ts:87](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L87)

___

### outputAmount

• `Readonly` **outputAmount**: *default*

The output amount for the trade assuming no slippage.

Defined in: [entities/trade.ts:91](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L91)

___

### route

• `Readonly` **route**: [*Route*](entities_route.route.md)

The route of the trade, i.e. which pools the trade goes through.

Defined in: [entities/trade.ts:79](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L79)

___

### tradeType

• `Readonly` **tradeType**: TradeType

The type of the trade, either exact in or exact out.

Defined in: [entities/trade.ts:83](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L83)

## Accessors

### executionPrice

• get **executionPrice**(): *default*

The price expressed in terms of output amount/input amount.

**Returns:** *default*

Defined in: [entities/trade.ts:101](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L101)

## Methods

### maximumAmountIn

▸ **maximumAmountIn**(`slippageTolerance`: *default*): *default*

Get the maximum amount in that can be spent via this trade for the given slippage tolerance

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `slippageTolerance` | *default* | tolerance of unfavorable slippage from the execution price of this trade |

**Returns:** *default*

Defined in: [entities/trade.ts:240](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L240)

___

### minimumAmountOut

▸ **minimumAmountOut**(`slippageTolerance`: *default*): *default*

Get the minimum amount that must be received from this trade for the given slippage tolerance

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `slippageTolerance` | *default* | tolerance of unfavorable slippage from the execution price of this trade |

**Returns:** *default*

Defined in: [entities/trade.ts:221](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L221)

___

### worstExecutionPrice

▸ **worstExecutionPrice**(`slippageTolerance`: *default*): *default*

Return the execution price after accounting for slippage tolerance

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `slippageTolerance` | *default* | the allowed tolerated slippage |

**Returns:** *default*

Defined in: [entities/trade.ts:256](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L256)

___

### bestTradeExactIn

▸ `Static`**bestTradeExactIn**(`pools`: [*Pool*](entities_pool.pool.md)[], `currencyAmountIn`: *default*, `currencyOut`: *Currency*, `__namedParameters?`: [*BestTradeOptions*](../interfaces/entities_trade.besttradeoptions.md), `currentPools?`: [*Pool*](entities_pool.pool.md)[], `originalAmountIn?`: *default*, `bestTrades?`: [*Trade*](entities_trade.trade.md)[]): *Promise*<[*Trade*](entities_trade.trade.md)[]\>

Given a list of pools, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
amount to an output token, making at most `maxHops` hops.
Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
the amount in among multiple routes.

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pools` | [*Pool*](entities_pool.pool.md)[] | - | the pools to consider in finding the best trade |
| `currencyAmountIn` | *default* | - | exact amount of input currency to spend |
| `currencyOut` | *Currency* | - | the desired currency out |
| `__namedParameters` | [*BestTradeOptions*](../interfaces/entities_trade.besttradeoptions.md) | {} | - |
| `currentPools` | [*Pool*](entities_pool.pool.md)[] | [] | used in recursion; the current list of pools |
| `originalAmountIn` | *default* | - | used in recursion; the original value of the currencyAmountIn parameter |
| `bestTrades` | [*Trade*](entities_trade.trade.md)[] | [] | used in recursion; the current list of best trades |

**Returns:** *Promise*<[*Trade*](entities_trade.trade.md)[]\>

Defined in: [entities/trade.ts:279](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L279)

___

### bestTradeExactOut

▸ `Static`**bestTradeExactOut**(`pools`: [*Pool*](entities_pool.pool.md)[], `currencyIn`: *Currency*, `currencyAmountOut`: *default*, `__namedParameters?`: [*BestTradeOptions*](../interfaces/entities_trade.besttradeoptions.md), `currentPools?`: [*Pool*](entities_pool.pool.md)[], `originalAmountOut?`: *default*, `bestTrades?`: [*Trade*](entities_trade.trade.md)[]): *Promise*<[*Trade*](entities_trade.trade.md)[]\>

similar to the above method but instead targets a fixed output amount
given a list of pools, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
to an output token amount, making at most `maxHops` hops
note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
the amount in among multiple routes.

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pools` | [*Pool*](entities_pool.pool.md)[] | - | the pools to consider in finding the best trade |
| `currencyIn` | *Currency* | - | the currency to spend |
| `currencyAmountOut` | *default* | - | the exact amount of currency out |
| `__namedParameters` | [*BestTradeOptions*](../interfaces/entities_trade.besttradeoptions.md) | {} | - |
| `currentPools` | [*Pool*](entities_pool.pool.md)[] | [] | used in recursion; the current list of pools |
| `originalAmountOut` | *default* | - | used in recursion; the original value of the currencyAmountOut parameter |
| `bestTrades` | [*Trade*](entities_trade.trade.md)[] | [] | used in recursion; the current list of best trades |

**Returns:** *Promise*<[*Trade*](entities_trade.trade.md)[]\>

Defined in: [entities/trade.ts:366](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L366)

___

### createUncheckedTrade

▸ `Static`**createUncheckedTrade**(`constructorArguments`: { `inputAmount`: *default* ; `outputAmount`: *default* ; `route`: [*Route*](entities_route.route.md) ; `tradeType`: TradeType  }): [*Trade*](entities_trade.trade.md)

Creates a trade without computing the result of swapping through the route. Useful when you have simulated the trade
elsewhere and do not have any tick data

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructorArguments` | *object* | the arguments passed to the trade constructor |
| `constructorArguments.inputAmount` | *default* | - |
| `constructorArguments.outputAmount` | *default* | - |
| `constructorArguments.route` | [*Route*](entities_route.route.md) | - |
| `constructorArguments.tradeType` | TradeType | - |

**Returns:** [*Trade*](entities_trade.trade.md)

Defined in: [entities/trade.ts:182](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L182)

___

### exactIn

▸ `Static`**exactIn**(`route`: [*Route*](entities_route.route.md), `amountIn`: *default*): *Promise*<[*Trade*](entities_trade.trade.md)\>

Constructs an exact in trade with the given amount in and route

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `route` | [*Route*](entities_route.route.md) | route of the exact in trade |
| `amountIn` | *default* | the amount being passed in |

**Returns:** *Promise*<[*Trade*](entities_trade.trade.md)\>

Defined in: [entities/trade.ts:118](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L118)

___

### exactOut

▸ `Static`**exactOut**(`route`: [*Route*](entities_route.route.md), `amountOut`: *default*): *Promise*<[*Trade*](entities_trade.trade.md)\>

Constructs an exact out trade with the given amount out and route

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `route` | [*Route*](entities_route.route.md) | route of the exact out trade |
| `amountOut` | *default* | the amount returned by the trade |

**Returns:** *Promise*<[*Trade*](entities_trade.trade.md)\>

Defined in: [entities/trade.ts:127](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L127)

___

### fromRoute

▸ `Static`**fromRoute**(`route`: [*Route*](entities_route.route.md), `amount`: *default*, `tradeType`: TradeType): *Promise*<[*Trade*](entities_trade.trade.md)\>

Constructs a trade by simulating swaps through the given route

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `route` | [*Route*](entities_route.route.md) | route to swap through |
| `amount` | *default* | the amount specified, either input or output, depending on tradeType |
| `tradeType` | TradeType | whether the trade is an exact input or exact output swap |

**Returns:** *Promise*<[*Trade*](entities_trade.trade.md)\>

Defined in: [entities/trade.ts:137](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/trade.ts#L137)
