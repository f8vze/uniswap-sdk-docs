[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / [entities/route](../modules/entities_route.md) / Route

# Class: Route

[entities/route](../modules/entities_route.md).Route

Represents a list of pools through which a swap can occur

## Table of contents

### Constructors

- [constructor](entities_route.route.md#constructor)

### Properties

- [input](entities_route.route.md#input)
- [output](entities_route.route.md#output)
- [pools](entities_route.route.md#pools)
- [tokenPath](entities_route.route.md#tokenpath)

### Accessors

- [chainId](entities_route.route.md#chainid)

## Constructors

### constructor

\+ **new Route**(`pools`: [*Pool*](entities_pool.pool.md)[], `input`: *Currency*, `output?`: *Currency*): [*Route*](entities_route.route.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `pools` | [*Pool*](entities_pool.pool.md)[] |
| `input` | *Currency* |
| `output?` | *Currency* |

**Returns:** [*Route*](entities_route.route.md)

Defined in: [entities/route.ts:13](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/route.ts#L13)

## Properties

### input

• `Readonly` **input**: *Currency*

Defined in: [entities/route.ts:12](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/route.ts#L12)

___

### output

• `Readonly` **output**: *Currency*

Defined in: [entities/route.ts:13](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/route.ts#L13)

___

### pools

• `Readonly` **pools**: [*Pool*](entities_pool.pool.md)[]

Defined in: [entities/route.ts:10](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/route.ts#L10)

___

### tokenPath

• `Readonly` **tokenPath**: *Token*[]

Defined in: [entities/route.ts:11](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/route.ts#L11)

## Accessors

### chainId

• get **chainId**(): *number*

**Returns:** *number*

Defined in: [entities/route.ts:52](https://github.com/Uniswap/uniswap-v3-sdk/blob/4a7e393/src/entities/route.ts#L52)
