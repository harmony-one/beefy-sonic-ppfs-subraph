import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { ProxyCreated } from "../generated/BeefyVaultV7Factory/BeefyVaultV7Factory"

export function createProxyCreatedEvent(proxy: Address): ProxyCreated {
  let proxyCreatedEvent = changetype<ProxyCreated>(newMockEvent())

  proxyCreatedEvent.parameters = new Array()

  proxyCreatedEvent.parameters.push(
    new ethereum.EventParam("proxy", ethereum.Value.fromAddress(proxy))
  )

  return proxyCreatedEvent
}
