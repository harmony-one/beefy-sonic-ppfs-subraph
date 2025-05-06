import { ProxyCreated as ProxyCreatedEvent } from "../generated/BeefyVaultV7Factory/BeefyVaultV7Factory"
import { ProxyCreated } from "../generated/schema"

export function handleProxyCreated(event: ProxyCreatedEvent): void {
  let entity = new ProxyCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proxy = event.params.proxy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
