import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ProxyCreated } from "../generated/schema"
import { ProxyCreated as ProxyCreatedEvent } from "../generated/BeefyVaultV7Factory/BeefyVaultV7Factory"
import { handleProxyCreated } from "../src/beefy-vault-v-7-factory"
import { createProxyCreatedEvent } from "./beefy-vault-v-7-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let proxy = Address.fromString("0x0000000000000000000000000000000000000001")
    let newProxyCreatedEvent = createProxyCreatedEvent(proxy)
    handleProxyCreated(newProxyCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ProxyCreated created and stored", () => {
    assert.entityCount("ProxyCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ProxyCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proxy",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
